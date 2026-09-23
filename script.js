/* ══════════════════════════════════════════════════════════
   PORTFOLIO SCRIPT — Felix Thomas Roy
   - Uses window.PORTFOLIO_DATA (inline) as primary source
   - Falls back to fetching portfolio-data.json when on HTTP
   ══════════════════════════════════════════════════════════ */

/* ── MOBILE NAV ─────────────────────────────────────────── */
const menuToggle = document.getElementById('menuToggle');
const mainNav    = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
window.addEventListener('resize', () => {
  if (window.innerWidth > 720 && mainNav) mainNav.classList.remove('open');
});

/* ── SCROLL PARALLAX ──────────────────────────────────────── */
const root = document.documentElement;
function updateScrollMotion() {
  const shift = Math.min(Math.max((window.scrollY || 0) * 0.06, -20), 40);
  root.style.setProperty('--scroll-content-shift', shift + 'px');
}
window.addEventListener('scroll', () => requestAnimationFrame(updateScrollMotion), { passive: true });
updateScrollMotion();

/* ── SCROLL REVEAL ────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.1 });

function attachReveal() {
  document.querySelectorAll('.reveal, .reveal-right, .timeline-item, .exp-card').forEach(el => {
    revealObserver.observe(el);
  });
}

/* ── ACTIVE NAV ───────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.main-nav a');
const activeObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });
sections.forEach(s => activeObs.observe(s));

/* ── HELPERS ──────────────────────────────────────────────── */
function esc(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function renderTags(arr, cls) {
  return (arr||[]).map(t => `<span class="${cls}">${esc(t)}</span>`).join('');
}
function setEl(id, text) { const e = document.getElementById(id); if (e) e.textContent = text || ''; }
function setAttr(id, attr, val) { const e = document.getElementById(id); if (e && val) e.setAttribute(attr, val); }
function setImgSrc(id, src) { const e = document.getElementById(id); if (e && src) e.src = src; }

/* ── RENDER ALL SECTIONS ──────────────────────────────────── */
function renderPortfolio(data) {
  if (!data) return;

  /* HERO */
  const h = data.hero || {};
  setEl('heroName',     h.name);
  setEl('heroTagline',  h.tagline);
  setEl('heroSubtitle', h.subtitle);
  if (h.profilePhoto) {
    let photoSrc = h.profilePhoto;
    if (photoSrc.startsWith('assets/') && !photoSrc.includes('?') && window.location.protocol !== 'file:') {
      photoSrc += '?t=' + Date.now();
    }
    setImgSrc('profilePhoto', photoSrc);
  }
  if (h.resumeFile) setAttr('resumeBtn', 'href', h.resumeFile);
  if (h.cta) {
    setAttr('heroGithub',   'href', h.cta.github   || '#');
    setAttr('heroLinkedin', 'href', h.cta.linkedin || '#');
  }

  /* ABOUT */
  const a = data.about || {};
  const aboutEl = document.getElementById('aboutText');
  if (aboutEl && a.paragraphs) {
    aboutEl.innerHTML = a.paragraphs.map(p => `<p>${esc(p)}</p>`).join('');
  }
  const qpEl = document.getElementById('quickProfile');
  if (qpEl && a.quickProfile) {
    qpEl.innerHTML = `<h3 class="qp-heading">Quick Profile</h3>` +
      a.quickProfile.map(item => `
        <div class="qp-item">
          <span class="qp-label">${esc(item.label)}</span>
          <span class="qp-value">${esc(item.value)}</span>
        </div>`).join('');
  }

  /* EXPERIENCE */
  const expEl = document.getElementById('experienceList');
  if (expEl && data.experience) {
    expEl.innerHTML = data.experience.map(exp => `
      <article class="exp-card reveal">
        <div class="exp-header">
          <div>
            <div class="exp-role">${esc(exp.role)}</div>
            <div class="exp-company">${esc(exp.company)}</div>
            <div class="exp-meta">${esc(exp.type)}</div>
          </div>
          <span class="exp-period">${esc(exp.period)}</span>
        </div>
        <p class="exp-desc">${esc(exp.description)}</p>
        ${exp.responsibilities && exp.responsibilities.length ?
          `<ul class="exp-responsibilities">${exp.responsibilities.map(r=>`<li>${esc(r)}</li>`).join('')}</ul>` : ''}
        <div class="tag-row">${renderTags(exp.technologies,'tech-tag')}</div>
      </article>`).join('');
  }

  /* SKILLS */
  const skillsEl = document.getElementById('skillsGrid');
  if (skillsEl && data.skills) {
    skillsEl.innerHTML = data.skills.map((cat, i) => `
      <div class="skill-category reveal" style="transition-delay:${i*.06}s">
        <div class="skill-cat-title">${esc(cat.category)}</div>
        <div class="skill-tag-list">${renderTags(cat.items,'skill-tag')}</div>
      </div>`).join('');
  }

  /* PROJECTS */
  const featured  = (data.projects||[]).find(p=>p.featured);
  const mlProjs   = (data.projects||[]).filter(p=>!p.featured);

  const featEl = document.getElementById('featuredProject');
  if (featEl && featured) {
    featEl.innerHTML = `
      <div class="featured-card">
        <div>
          <div class="featured-badge">Featured Project &mdash; ${esc(featured.type)}</div>
          <h2 class="featured-title">${esc(featured.title)}</h2>
          <p class="featured-desc">${esc(featured.description)}</p>
          ${featured.details ? `<p class="featured-desc">${esc(featured.details)}</p>` : ''}
          <div class="tag-row" style="margin-bottom:1.4rem">${renderTags(featured.technologies,'tech-tag')}</div>
          <div class="card-actions">
            ${featured.githubUrl ? `<a href="${esc(featured.githubUrl)}" target="_blank" rel="noopener" class="card-btn">GitHub</a>` : ''}
            ${featured.liveUrl   ? `<a href="${esc(featured.liveUrl)}"   target="_blank" rel="noopener" class="card-btn filled">Live Demo</a>` : ''}
          </div>
        </div>
        <div class="featured-img-area">
          ${featured.image
            ? `<img src="${esc(featured.image)}" alt="${esc(featured.title)}" />`
            : `<span style="opacity:.5;font-size:.85rem;text-align:center;padding:1.5rem">Add project screenshot<br>via Admin Panel</span>`}
        </div>
      </div>`;
  }

  const mlEl = document.getElementById('mlProjects');
  if (mlEl && mlProjs.length) {
    mlEl.innerHTML = mlProjs.map((p,i)=>`
      <article class="card reveal" style="transition-delay:${i*.08}s">
        <div class="card-type">${esc(p.type)}</div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        <div class="tag-row">${renderTags(p.technologies,'tech-tag')}</div>
        <div class="card-actions">
          ${p.githubUrl ? `<a href="${esc(p.githubUrl)}" target="_blank" rel="noopener" class="card-btn">GitHub</a>` : ''}
          ${p.liveUrl   ? `<a href="${esc(p.liveUrl)}"   target="_blank" rel="noopener" class="card-btn filled">Live Demo</a>` : ''}
        </div>
      </article>`).join('');
  }

  /* TIMELINE */
  const tlEl = document.getElementById('timelineList');
  if (tlEl && data.timeline) {
    tlEl.innerHTML = data.timeline.map(item=>`
      <div class="timeline-item">
        <div class="tl-period">${esc(item.period)}</div>
        <div class="tl-step">${esc(item.step)}</div>
        <p class="tl-desc">${esc(item.description)}</p>
      </div>`).join('');
  }

  /* EDUCATION */
  const eduEl = document.getElementById('educationList');
  if (eduEl && data.education) {
    eduEl.innerHTML = data.education.map(ed=>`
      <article class="edu-card reveal">
        <div class="edu-degree">${esc(ed.degree)}</div>
        <div class="edu-field">${esc(ed.field)}</div>
        <div class="edu-institution">${esc(ed.institution)}</div>
        <div class="edu-period">${esc(ed.period)}</div>
        <div class="edu-tags">${renderTags(ed.focusAreas,'edu-tag')}</div>
      </article>`).join('');
  }

  /* CONTACT */
  const c = data.contact || {};
  const ciEl = document.getElementById('contactInfo');
  if (ciEl) {
    ciEl.innerHTML = [
      c.email    && cDetail(`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`, 'Email',    `<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>`),
      c.linkedin && cDetail(`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>`, 'LinkedIn', `<a href="${esc(c.linkedin)}" target="_blank">View Profile</a>`),
      c.github   && cDetail(`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`, 'GitHub',   `<a href="${esc(c.github)}" target="_blank">View GitHub</a>`),
      c.location && cDetail(`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`, 'Location', esc(c.location))
    ].filter(Boolean).join('');
  }

  /* FOOTER */
  const f = data.footer || {};
  setEl('footerName',    f.name);
  setEl('footerTagline', f.tagline);
  setEl('footerCopy',    f.copyright);
  if (c.github)   setAttr('footerGithub',   'href', c.github);
  if (c.linkedin) setAttr('footerLinkedin', 'href', c.linkedin);
  if (c.email)    setAttr('footerEmail',    'href', 'mailto:' + c.email);

  /* Re-observe newly added elements */
  attachReveal();
}

function cDetail(svg, label, value) {
  return `<div class="contact-detail">${svg}<div>
    <div class="contact-detail-label">${label}</div>
    <div class="contact-detail-value">${value}</div>
  </div></div>`;
}

/* ── LOAD DATA ────────────────────────────────────────────── */
async function loadPortfolio() {
  const customPhoto = localStorage.getItem('ftr_custom_profile_photo');

  // 1. Try localStorage first (reflects any live admin edits immediately)
  const localSaved = localStorage.getItem('ftr_portfolio_custom_data');
  if (localSaved) {
    try {
      const data = JSON.parse(localSaved);
      if (customPhoto && data.hero) data.hero.profilePhoto = customPhoto;
      renderPortfolio(data);
      return;
    } catch(e) {}
  }

  // 2. Try fetching fresh JSON from server (when served via HTTP)
  if (window.location.protocol !== 'file:') {
    try {
      const res = await fetch('portfolio-data.json?v=' + Date.now());
      if (res.ok) {
        const data = await res.json();
        if (customPhoto && data.hero) data.hero.profilePhoto = customPhoto;
        renderPortfolio(data);
        return;
      }
    } catch(e) { /* fall through */ }
  }

  // 3. Fallback to inline data (always available)
  const fallback = window.PORTFOLIO_DATA ? JSON.parse(JSON.stringify(window.PORTFOLIO_DATA)) : null;
  if (fallback && customPhoto && fallback.hero) {
    fallback.hero.profilePhoto = customPhoto;
  }
  renderPortfolio(fallback);
}

/* ── CONTACT FORM ─────────────────────────────────────────── */
function handleContactForm(e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  const name   = document.getElementById('formName').value;
  const email  = document.getElementById('formEmail').value;
  const msg    = document.getElementById('formMsg').value;
  status.textContent = 'Opening your email client...';
  status.className   = 'form-status success';
  const mailto = `mailto:felixthomasroy123@gmail.com?subject=Portfolio%20Message%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(msg + '\n\nFrom: ' + name + '\nEmail: ' + email)}`;
  window.location.href = mailto;
}

/* ── INIT ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  attachReveal();
  loadPortfolio();
});
