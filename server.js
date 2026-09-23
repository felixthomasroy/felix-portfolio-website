/**
 * PORTFOLIO SERVER — server.js
 * Felix Thomas Roy Portfolio
 *
 * Run:  node server.js
 * URL:  http://localhost:3000
 * Admin: http://localhost:3000/ctrl-panel.html
 */

const http     = require('http');
const fs       = require('fs');
const path     = require('path');
const url      = require('url');

const PORT      = 3000;
const STATIC    = __dirname;
const DATA_FILE = path.join(__dirname, 'portfolio-data.json');

// Admin token
const ADMIN_TOKEN = Buffer.from('felix:Felix@2026').toString('base64');

// MIME types
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.webp': 'image/webp',
  '.svg':  'image/svg+xml',
  '.pdf':  'application/pdf',
  '.ico':  'image/x-icon',
  '.txt':  'text/plain',
};

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function parseMultipart(buffer, boundary) {
  const parts = {};
  const sep   = Buffer.from('--' + boundary);
  const end   = Buffer.from('--' + boundary + '--');

  let start = 0;
  while (start < buffer.length) {
    const sepIdx = buffer.indexOf(sep, start);
    if (sepIdx === -1) break;
    const bodyStart = sepIdx + sep.length;
    if (buffer.indexOf(end, bodyStart) === bodyStart) break;

    const headerEnd = buffer.indexOf('\r\n\r\n', bodyStart);
    if (headerEnd === -1) break;
    const headerStr = buffer.slice(bodyStart, headerEnd).toString();
    const nextSep   = buffer.indexOf(sep, headerEnd + 4);
    const bodyData  = buffer.slice(headerEnd + 4, nextSep - 2);

    const cdMatch = headerStr.match(/Content-Disposition:[^\r\n]*name="([^"]+)"/i);
    const fnMatch = headerStr.match(/filename="([^"]+)"/i);
    if (cdMatch) {
      const key = cdMatch[1];
      if (fnMatch) {
        parts[key] = { filename: fnMatch[1], data: bodyData };
      } else {
        parts[key] = bodyData.toString().trim();
      }
    }
    start = nextSep;
  }
  return parts;
}

function isAuthed(req) {
  const token = req.headers['x-admin-token'];
  return token === ADMIN_TOKEN;
}

const server = http.createServer(async (req, res) => {
  const parsed   = url.parse(req.url, true);
  const pathname = decodeURIComponent(parsed.pathname);
  const method   = req.method;

  // CORS & Cache prevention headers for seamless live updates
  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Token');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  if (method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  // ── POST /save-data ──────────────────────────────────────────
  if (method === 'POST' && pathname === '/save-data') {
    if (!isAuthed(req)) { res.writeHead(403); res.end('Forbidden'); return; }
    try {
      const body = await readBody(req);
      const data = JSON.parse(body.toString());
      fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
      console.log('[Save] portfolio-data.json updated at', new Date().toLocaleTimeString());
    } catch(e) {
      console.error('[Save Error]', e.message);
      res.writeHead(500); res.end('Error: ' + e.message);
    }
    return;
  }

  // ── POST /upload-image ───────────────────────────────────────
  if (method === 'POST' && pathname === '/upload-image') {
    try {
      const body     = await readBody(req);
      const ct       = req.headers['content-type'] || '';
      const bndMatch = ct.match(/boundary=(.+)/);
      if (!bndMatch) { res.writeHead(400); res.end('No boundary'); return; }
      const parts    = parseMultipart(body, bndMatch[1]);

      const formToken  = parts['token'];
      const isFormAuth = (formToken === ADMIN_TOKEN) || isAuthed(req);
      if (!isFormAuth) { res.writeHead(403); res.end('Forbidden'); return; }

      const file     = parts['file'];
      const filename = parts['filename'] || (file && file.filename) || 'upload.bin';
      const folder   = parts['folder']  || '';
      if (!file || !file.data) { res.writeHead(400); res.end('No file'); return; }

      const destDir  = folder ? path.join(__dirname, 'assets', folder) : path.join(__dirname, 'assets');
      if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
      const destPath = path.join(destDir, filename);

      fs.writeFileSync(destPath, file.data);
      console.log('[Upload] Saved to', destPath);

      const relPath = 'assets/' + (folder ? folder + '/' : '') + filename + '?t=' + Date.now();

      // Auto update portfolio-data.json if profile-photo was uploaded
      if (filename.includes('profile-photo') && fs.existsSync(DATA_FILE)) {
        try {
          const curData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
          if (!curData.hero) curData.hero = {};
          curData.hero.profilePhoto = relPath;
          fs.writeFileSync(DATA_FILE, JSON.stringify(curData, null, 2), 'utf8');
        } catch(err) {}
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true, path: relPath }));
    } catch(e) {
      console.error('[Upload Error]', e.message);
      res.writeHead(500); res.end('Error: ' + e.message);
    }
    return;
  }

  // ── GET static files ─────────────────────────────────────────
  let filePath = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '');
  filePath     = path.join(STATIC, filePath);

  if (!filePath.startsWith(STATIC)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404); res.end('Not Found: ' + pathname); return;
  }

  const stat = fs.statSync(filePath);
  if (stat.isDirectory()) {
    filePath = path.join(filePath, 'index.html');
    if (!fs.existsSync(filePath)) { res.writeHead(404); res.end('Not Found'); return; }
  }

  const ext    = path.extname(filePath).toLowerCase();
  const mime   = MIME[ext] || 'application/octet-stream';
  const stream = fs.createReadStream(filePath);
  res.writeHead(200, {
    'Content-Type': mime,
    'Content-Length': fs.statSync(filePath).size,
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  });
  stream.pipe(res);
  stream.on('error', () => { res.end(); });
});

server.listen(PORT, () => {
  console.log('');
  console.log('  ┌──────────────────────────────────────────────┐');
  console.log('  │   Felix Thomas Roy — Portfolio Server         │');
  console.log('  │                                              │');
  console.log(`  │   Portfolio  →  http://localhost:${PORT}         │`);
  console.log(`  │   Admin      →  http://localhost:${PORT}/ctrl-panel.html │`);
  console.log('  │                                              │');
  console.log('  │   Admin credentials:                         │');
  console.log('  │   Username : felix                           │');
  console.log('  │   Password : Felix@2026                      │');
  console.log('  │                                              │');
  console.log('  │   Press Ctrl+C to stop                       │');
  console.log('  └──────────────────────────────────────────────┘');
  console.log('');
});
