/* ═══════════════════════════════════════════════════════════════
   ADMIN PORTAL JAVASCRIPT — ctrl-panel.html
   Credentials: felix / Felix@2026
   ═══════════════════════════════════════════════════════════════ */

const ADMIN_USER  = 'felix';
const ADMIN_PASS  = 'Felix@2026';
const SESSION_KEY = 'ftr_admin_sess';
const STORAGE_KEY = 'ftr_portfolio_custom_data';

// Full default data fallback
const DEFAULT_DATA = {
  "hero": {
    "name": "Felix Thomas Roy",
    "tagline": "Building Practical Software. Learning Intelligent Systems.",
    "subtitle": "Computer Science Graduate · Junior Application Developer · AI/ML Enthusiast",
    "intro": "I'm Felix Thomas Roy, a Computer Science graduate and Junior Application Developer with experience working on real-world mobile application development. I enjoy building practical software, solving technical problems, and continuously expanding my skills in Artificial Intelligence and Machine Learning.",
    "profilePhoto": "assets/profile-photo.jpeg",
    "resumeFile": "assets/Felix_resume.pdf",
    "availableText": "Available for work",
    "cta": {
      "viewProjects": "#projects",
      "contact": "#contact",
      "github": "https://github.com/felixthomasroy",
      "linkedin": "https://www.linkedin.com/in/felix-thomas-roy-474329355"
    }
  },
  "about": {
    "heading": "About Me",
    "paragraphs": [
      "I am a Computer Science graduate with a strong interest in software development, mobile application development, and Artificial Intelligence.",
      "I currently work as a Junior Application Developer at Navydo, a ride-hailing company, where I contribute to application feature development, testing, debugging, and collaborative software development.",
      "My development experience includes working with Flutter and Dart for mobile applications, JavaScript and PostgreSQL for application-related development, and Git-based workflows for team collaboration.",
      "Alongside my professional development experience, I am pursuing structured training in Artificial Intelligence and Machine Learning. I have worked through Python, Object-Oriented Programming, data preprocessing, and several fundamental machine learning algorithms including Linear Regression, Logistic Regression, K-Nearest Neighbors, Decision Trees, Support Vector Machines, AdaBoost, and Gradient Boosting.",
      "I am particularly interested in combining software engineering with AI/ML to build useful, practical applications."
    ],
    "quickProfile": [
      { "label": "Education", "value": "B.Tech in Computer Science" },
      { "label": "Current Role", "value": "Junior Application Developer" },
      { "label": "Focus", "value": "Software Development + AI/ML" },
      { "label": "Primary Dev", "value": "Flutter / Dart" },
      { "label": "Database", "value": "PostgreSQL" },
      { "label": "Learning", "value": "Machine Learning & AI" }
    ]
  },
  "experience": [
    {
      "id": "navydo",
      "role": "Junior Application Developer",
      "company": "Navydo",
      "type": "Full-time · Remote",
      "period": "2026 – Present",
      "description": "Working as a Junior Application Developer on a ride-hailing application, contributing to application feature development, testing, debugging, and collaborative software development.",
      "responsibilities": [
        "Contribute to the development and improvement of mobile application features",
        "Work with Flutter and Dart in the development of application interfaces and workflows",
        "Test application functionality and identify issues during development",
        "Debug application issues and investigate unexpected application behavior",
        "Work with JavaScript and PostgreSQL as part of application development",
        "Use Git for version control and collaborative development",
        "Collaborate through branch-based Git workflows and pull requests",
        "Work on real-world workflows involving passengers, drivers, trips, bookings, payments, and related features",
        "Gain experience working within an existing production-oriented codebase"
      ],
      "technologies": ["Flutter", "Dart", "JavaScript", "PostgreSQL", "Git", "Android Studio", "VS Code", "Node.js", "Prisma", "REST APIs"]
    },
    {
      "id": "aiml",
      "role": "AI/ML Trainee",
      "company": "Link Academy India",
      "type": "Internship · Structured Learning",
      "period": "2026",
      "description": "Undertaking a structured AI/ML program with an internship component covering Python, machine learning fundamentals, supervised learning, classification, regression, and ensemble learning.",
      "responsibilities": [
        "Python programming and Object-Oriented Programming",
        "Data preprocessing and Exploratory Data Analysis",
        "Supervised learning: classification and regression algorithms",
        "Machine learning algorithms: Linear Regression, Logistic Regression, KNN, Decision Trees, SVM, AdaBoost, Gradient Boosting",
        "Model training, testing, and evaluation",
        "Feature scaling and feature selection",
        "Building user-facing ML applications with Streamlit"
      ],
      "technologies": ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit", "Joblib"]
    }
  ],
  "skills": [
    { "category": "Programming", "items": ["Python", "Dart", "JavaScript", "SQL"] },
    { "category": "Mobile Development", "items": ["Flutter", "Android Development", "Flutter UI Development"] },
    { "category": "AI / Machine Learning", "items": ["Scikit-learn", "Machine Learning", "Supervised Learning", "Classification", "Regression", "Feature Scaling", "Model Evaluation", "Streamlit"] },
    { "category": "Backend / Database", "items": ["Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs"] },
    { "category": "Developer Tools", "items": ["Git", "GitHub", "VS Code", "Android Studio", "Postman", "npm"] },
    { "category": "Other Technologies", "items": ["Firebase", "Odoo CRM", "Ngrok", "IoT", "ESP32"] }
  ],
  "projects": [
    {
      "id": "food-redistribution",
      "featured": true,
      "title": "IoT-Based Smart Food Surplus Redistribution System",
      "type": "Final Year Project",
      "description": "A final-year project designed to support the redistribution of surplus food using IoT technology and a Flutter-based donor application. The system combines mobile development, IoT sensors, Firebase, and location services.",
      "details": "The system allows food donors to provide information about surplus food while IoT hardware captures measurements such as weight and temperature. Location services associate food donations with geographical information, supporting connections between surplus food and redistribution opportunities.",
      "technologies": ["Flutter", "Firebase", "ESP32", "HX711", "Load Cell", "DS18B20", "Geolocator"],
      "image": "",
      "githubUrl": "",
      "liveUrl": ""
    },
    {
      "id": "food-waste-detection",
      "featured": false,
      "title": "Food Waste Detection",
      "type": "ML Project",
      "description": "A machine learning project focused on identifying patterns related to food waste using a real-world dataset. Explores data preprocessing, feature analysis, model training, evaluation, and prediction.",
      "details": "",
      "technologies": ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit"],
      "image": "",
      "githubUrl": "",
      "liveUrl": ""
    },
    {
      "id": "svm-classifier",
      "featured": false,
      "title": "SVM Classification Web App",
      "type": "ML Project",
      "description": "A machine learning classification project using Support Vector Machines. Demonstrates feature scaling, SVM classification, and model prediction through a simple Streamlit interface.",
      "details": "",
      "technologies": ["Python", "Scikit-learn", "Pandas", "Streamlit"],
      "image": "",
      "githubUrl": "",
      "liveUrl": ""
    },
    {
      "id": "titanic-prediction",
      "featured": false,
      "title": "Titanic Survival Prediction",
      "type": "ML Project",
      "description": "A machine learning classification project based on the Titanic dataset. Processes passenger information and predicts survival using a trained ML model with an interactive Streamlit UI.",
      "details": "",
      "technologies": ["Python", "Pandas", "Scikit-learn", "Joblib", "Streamlit"],
      "image": "",
      "githubUrl": "",
      "liveUrl": ""
    }
  ],
  "timeline": [
    { "step": "Computer Science Education", "description": "Built foundational knowledge in programming, databases, software engineering, and computer science at TKM Institute of Technology.", "period": "2022 – 2026" },
    { "step": "Flutter & Mobile Development", "description": "Started working with Flutter and Dart, building mobile application interfaces and workflows.", "period": "2024" },
    { "step": "Junior Application Developer — Navydo", "description": "Joined Navydo and gained real-world experience working on a ride-hailing application with Flutter, Dart, JavaScript, and PostgreSQL.", "period": "2026" },
    { "step": "AI/ML Structured Training", "description": "Started structured learning in Python, machine learning fundamentals, supervised learning, and ensemble methods at Link Academy India.", "period": "2026" },
    { "step": "Practical ML Projects", "description": "Built classification and prediction applications using Python, Scikit-learn, and Streamlit to apply machine learning concepts.", "period": "2026" },
    { "step": "Future Direction", "description": "Combining software development and AI/ML to build practical intelligent applications.", "period": "Next →" }
  ],
  "education": [
    {
      "degree": "Bachelor of Technology",
      "field": "Computer Science and Engineering",
      "institution": "TKM Institute of Technology",
      "period": "2022 – 2026",
      "focusAreas": ["Programming", "Software Development", "Database Systems", "Computer Science Fundamentals", "Application Development", "IoT", "Software Engineering"]
    },
    {
      "degree": "AI/ML Training Program",
      "field": "Artificial Intelligence & Machine Learning",
      "institution": "Link Academy India",
      "period": "2026",
      "focusAreas": ["Python", "Machine Learning", "Data Preprocessing", "Supervised Learning", "Model Evaluation", "Streamlit"]
    }
  ],
  "contact": {
    "heading": "Let's Connect",
    "subtext": "I'm open to connecting with developers, companies, recruiters, and people working on interesting software and AI/ML projects.",
    "email": "felixthomasroy123@gmail.com",
    "linkedin": "https://www.linkedin.com/in/felix-thomas-roy-474329355",
    "github": "https://github.com/felixthomasroy",
    "instagram": "https://www.instagram.com/felixthomasroy_",
    "location": "Kerala, India"
  },
  "footer": {
    "name": "Felix Thomas Roy",
    "tagline": "Computer Science Graduate · Junior Application Developer · AI/ML Learner",
    "copyright": "© 2026 Felix Thomas Roy. All rights reserved."
  }
};

let portfolioData = null;

/* ─── AUTH & SESSION ───────────────────────────────────────── */
function handleLogin(e) {
  e.preventDefault();
  const user = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value;
  const errEl = document.getElementById('loginError');

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    sessionStorage.setItem(SESSION_KEY, btoa(user + ':' + Date.now()));
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('adminPanel').classList.remove('hidden');
    loadData();
  } else {
    errEl.textContent = 'Invalid credentials. Please verify your username and password.';
    document.getElementById('loginPass').value = '';
  }
}

function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  document.getElementById('adminPanel').classList.add('hidden');
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('loginUser').value = '';
  document.getElementById('loginPass').value = '';
}

function checkSession() {
  const sess = sessionStorage.getItem(SESSION_KEY);
  if (sess) {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('adminPanel').classList.remove('hidden');
    loadData();
  }
}

/* ─── TABS ─────────────────────────────────────────────────── */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => {
      t.classList.remove('active');
      t.classList.add('hidden');
    });
    btn.classList.add('active');
    const tabEl = document.getElementById('tab-' + btn.dataset.tab);
    if (tabEl) { tabEl.classList.remove('hidden'); tabEl.classList.add('active'); }
  });
});

/* ─── LOAD DATA ────────────────────────────────────────────── */
async function loadData() {
  const customPhoto = localStorage.getItem('ftr_custom_profile_photo');

  // Check localStorage first
  const localSaved = localStorage.getItem(STORAGE_KEY);
  if (localSaved) {
    try {
      portfolioData = JSON.parse(localSaved);
      if (customPhoto && portfolioData.hero) {
        portfolioData.hero.profilePhoto = customPhoto;
      }
      populateAllTabs();
    } catch(e) {}
  }

  // If running on HTTP server, attempt to fetch fresh JSON
  if (window.location.protocol !== 'file:') {
    try {
      const res = await fetch('portfolio-data.json?v=' + Date.now());
      if (res.ok) {
        portfolioData = await res.json();
        if (customPhoto && portfolioData.hero) {
          portfolioData.hero.profilePhoto = customPhoto;
        }
        populateAllTabs();
        return;
      }
    } catch(e) {}
  }

  // Fallback to default data
  if (!portfolioData) {
    portfolioData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    if (customPhoto && portfolioData.hero) {
      portfolioData.hero.profilePhoto = customPhoto;
    }
    populateAllTabs();
  }
}

/* ─── POPULATE TABS ────────────────────────────────────────── */
function populateAllTabs() {
  const d = portfolioData;
  populateHero(d.hero);
  populateAbout(d.about);
  populateExperience(d.experience);
  populateSkills(d.skills);
  populateProjects(d.projects);
  populateTimeline(d.timeline);
  populateEducation(d.education);
  populateContact(d.contact, d.footer);
  updateSaveMsg('Loaded details successfully. Ready to edit.');
}

function populateHero(h) {
  if (!h) return;
  setVal('h-name',      h.name);
  setVal('h-tagline',   h.tagline);
  setVal('h-subtitle',  h.subtitle);
  setVal('h-intro',     h.intro);
  setVal('h-github',    h.cta?.github);
  setVal('h-linkedin',  h.cta?.linkedin);
  setVal('h-resume',    h.resumeFile);
  setVal('h-available', h.availableText);
  if (h.profilePhoto) {
    const preview = document.getElementById('previewProfile');
    if (preview) preview.src = h.profilePhoto;
  }
}

function collectHero() {
  return {
    name:          getVal('h-name'),
    tagline:       getVal('h-tagline'),
    subtitle:      getVal('h-subtitle'),
    intro:         getVal('h-intro'),
    profilePhoto:  portfolioData.hero?.profilePhoto || 'assets/profile-photo.jpeg',
    resumeFile:    getVal('h-resume'),
    availableText: getVal('h-available'),
    cta: {
      viewProjects: '#projects',
      contact:      '#contact',
      github:       getVal('h-github'),
      linkedin:     getVal('h-linkedin')
    }
  };
}

/* ─── ABOUT ────────────────────────────────────────────────── */
function populateAbout(a) {
  if (!a) return;
  const paragEl = document.getElementById('aboutParagraphs');
  paragEl.innerHTML = '';
  (a.paragraphs || []).forEach((p, i) => paragEl.appendChild(makeTextareaCard('Paragraph ' + (i+1), p, 'ap-' + i, removeAboutParagraph)));

  const qpEl = document.getElementById('quickProfileItems');
  qpEl.innerHTML = '';
  (a.quickProfile || []).forEach((item, i) => qpEl.appendChild(makeQpCard(item, i)));
}

function addAboutParagraph() {
  if (!portfolioData.about) portfolioData.about = { paragraphs: [], quickProfile: [] };
  portfolioData.about.paragraphs.push('');
  populateAbout(portfolioData.about);
}
function removeAboutParagraph(i) {
  portfolioData.about.paragraphs.splice(i, 1);
  populateAbout(portfolioData.about);
}
function addQuickProfileItem() {
  portfolioData.about.quickProfile.push({ label: 'Label', value: 'Value' });
  populateAbout(portfolioData.about);
}
function removeQp(i) {
  portfolioData.about.quickProfile.splice(i, 1);
  populateAbout(portfolioData.about);
}

function collectAbout() {
  const paragraphs = [];
  document.querySelectorAll('[id^="ap-"]').forEach(ta => paragraphs.push(ta.value));
  const quickProfile = [];
  document.querySelectorAll('[data-qp-idx]').forEach(wrap => {
    const idx = wrap.dataset.qpIdx;
    quickProfile.push({
      label: document.getElementById('qp-label-' + idx)?.value || '',
      value: document.getElementById('qp-value-' + idx)?.value || ''
    });
  });
  return { ...portfolioData.about, paragraphs, quickProfile };
}

/* ─── EXPERIENCE ───────────────────────────────────────────── */
function populateExperience(list) {
  const el = document.getElementById('experienceItems');
  el.innerHTML = '';
  (list || []).forEach((exp, i) => el.appendChild(makeExpCard(exp, i)));
}
function addExperience() {
  portfolioData.experience.push({ id: 'new-' + Date.now(), role: 'New Role', company: 'Company', type: '', period: '', description: '', responsibilities: [], technologies: [] });
  populateExperience(portfolioData.experience);
}
function removeExperience(i) {
  portfolioData.experience.splice(i, 1);
  populateExperience(portfolioData.experience);
}

function collectExperience() {
  return (portfolioData.experience || []).map((_, i) => ({
    id:               portfolioData.experience[i].id,
    role:             getVal('exp-role-' + i),
    company:          getVal('exp-company-' + i),
    type:             getVal('exp-type-' + i),
    period:           getVal('exp-period-' + i),
    description:      getVal('exp-desc-' + i),
    responsibilities: getTextareaLines('exp-resp-' + i),
    technologies:     getTagList('exp-tech-' + i)
  }));
}

/* ─── SKILLS ───────────────────────────────────────────────── */
function populateSkills(list) {
  const el = document.getElementById('skillCategories');
  el.innerHTML = '';
  (list || []).forEach((cat, i) => el.appendChild(makeSkillCatCard(cat, i)));
}
function addSkillCategory() {
  portfolioData.skills.push({ category: 'New Category', items: [] });
  populateSkills(portfolioData.skills);
}
function removeSkillCategory(i) {
  portfolioData.skills.splice(i, 1);
  populateSkills(portfolioData.skills);
}

function collectSkills() {
  return (portfolioData.skills || []).map((_, i) => ({
    category: getVal('skill-cat-' + i),
    items:    getTagList('skill-items-' + i)
  }));
}

/* ─── PROJECTS ─────────────────────────────────────────────── */
function populateProjects(list) {
  const el = document.getElementById('projectItems');
  el.innerHTML = '';
  (list || []).forEach((p, i) => el.appendChild(makeProjectCard(p, i)));
}
function addProject() {
  portfolioData.projects.push({ id: 'proj-' + Date.now(), featured: false, title: 'New Project', type: 'ML Project', description: '', details: '', technologies: [], image: '', githubUrl: '', liveUrl: '' });
  populateProjects(portfolioData.projects);
}
function removeProject(i) {
  portfolioData.projects.splice(i, 1);
  populateProjects(portfolioData.projects);
}

function collectProjects() {
  return (portfolioData.projects || []).map((_, i) => ({
    id:           portfolioData.projects[i].id,
    featured:     document.getElementById('proj-feat-' + i)?.checked || false,
    title:        getVal('proj-title-' + i),
    type:         getVal('proj-type-' + i),
    description:  getVal('proj-desc-' + i),
    details:      getVal('proj-details-' + i),
    technologies: getTagList('proj-tech-' + i),
    image:        portfolioData.projects[i].image || '',
    githubUrl:    getVal('proj-github-' + i),
    liveUrl:      getVal('proj-live-' + i)
  }));
}

/* ─── TIMELINE ─────────────────────────────────────────────── */
function populateTimeline(list) {
  const el = document.getElementById('timelineItems');
  el.innerHTML = '';
  (list || []).forEach((item, i) => el.appendChild(makeTlCard(item, i)));
}
function addTimelineItem() {
  portfolioData.timeline.push({ step: 'New Step', description: '', period: '' });
  populateTimeline(portfolioData.timeline);
}
function removeTimelineItem(i) {
  portfolioData.timeline.splice(i, 1);
  populateTimeline(portfolioData.timeline);
}

function collectTimeline() {
  return (portfolioData.timeline || []).map((_, i) => ({
    step:        getVal('tl-step-' + i),
    description: getVal('tl-desc-' + i),
    period:      getVal('tl-period-' + i)
  }));
}

/* ─── EDUCATION ────────────────────────────────────────────── */
function populateEducation(list) {
  const el = document.getElementById('educationItems');
  el.innerHTML = '';
  (list || []).forEach((ed, i) => el.appendChild(makeEduCard(ed, i)));
}
function addEducation() {
  portfolioData.education.push({ degree: '', field: '', institution: '', period: '', focusAreas: [] });
  populateEducation(portfolioData.education);
}
function removeEducation(i) {
  portfolioData.education.splice(i, 1);
  populateEducation(portfolioData.education);
}

function collectEducation() {
  return (portfolioData.education || []).map((_, i) => ({
    degree:      getVal('edu-degree-' + i),
    field:       getVal('edu-field-' + i),
    institution: getVal('edu-inst-' + i),
    period:      getVal('edu-period-' + i),
    focusAreas:  getTagList('edu-focus-' + i)
  }));
}

/* ─── CONTACT ──────────────────────────────────────────────── */
function populateContact(c, f) {
  if (c) {
    setVal('c-heading',   c.heading);
    setVal('c-subtext',   c.subtext);
    setVal('c-email',     c.email);
    setVal('c-location',  c.location);
    setVal('c-linkedin',  c.linkedin);
    setVal('c-github',    c.github);
    setVal('c-instagram', c.instagram);
  }
  if (f) {
    setVal('f-name',    f.name);
    setVal('f-tagline', f.tagline);
    setVal('f-copy',    f.copyright);
  }
}

function collectContact() {
  return {
    heading:   getVal('c-heading'),
    subtext:   getVal('c-subtext'),
    email:     getVal('c-email'),
    location:  getVal('c-location'),
    linkedin:  getVal('c-linkedin'),
    github:    getVal('c-github'),
    instagram: getVal('c-instagram')
  };
}

function collectFooter() {
  return {
    name:      getVal('f-name'),
    tagline:   getVal('f-tagline'),
    copyright: getVal('f-copy')
  };
}

/* ─── SAVE ALL ─────────────────────────────────────────────── */
async function saveData() {
  const newData = {
    hero:        collectHero(),
    about:       collectAbout(),
    experience:  collectExperience(),
    skills:      collectSkills(),
    projects:    collectProjects(),
    timeline:    collectTimeline(),
    education:   collectEducation(),
    contact:     collectContact(),
    footer:      collectFooter()
  };

  updateSaveMsg('Saving changes...');

  // Save to localStorage so edits persist across file:// sessions immediately
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));

  // If server is available, save to file
  if (window.location.protocol !== 'file:') {
    try {
      const res = await fetch('/save-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Token': btoa(ADMIN_USER + ':' + ADMIN_PASS)
        },
        body: JSON.stringify(newData)
      });
      if (res.ok) {
        portfolioData = newData;
        showToast('Changes saved directly to portfolio-data.json ✓', 'success');
        updateSaveMsg('Saved to server at ' + new Date().toLocaleTimeString() + ' ✓');
        return;
      }
    } catch(e) {}
  }

  // Fallback if offline
  portfolioData = newData;
  showToast('Changes saved locally to browser storage ✓', 'success');
  updateSaveMsg('Saved locally at ' + new Date().toLocaleTimeString() + ' ✓');
}

/* ─── FILE UPLOAD ──────────────────────────────────────────── */
async function uploadFile(input, filename, previewId, dataField) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async (e) => {
    const dataUrl = e.target.result;

    // 1. Immediately update UI preview
    if (previewId) {
      const img = document.getElementById(previewId);
      if (img) img.src = dataUrl;
    }

    // 2. Set into portfolioData
    if (filename.includes('profile-photo')) {
      if (!portfolioData.hero) portfolioData.hero = {};
      portfolioData.hero.profilePhoto = dataUrl;
      localStorage.setItem('ftr_custom_profile_photo', dataUrl);
    } else if (filename.toLowerCase().includes('resume')) {
      if (!portfolioData.hero) portfolioData.hero = {};
      portfolioData.hero.resumeFile = 'assets/' + filename;
      setVal('h-resume', 'assets/' + filename);
      const curr = document.getElementById('currentResume');
      if (curr) curr.textContent = 'Current: assets/' + filename;
    }

    // 3. Save to localStorage immediately so refresh never loses it
    localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolioData));

    // 4. If running on HTTP server, also upload to server assets and update portfolio-data.json
    if (window.location.protocol !== 'file:') {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('filename', filename);
      formData.append('token', btoa(ADMIN_USER + ':' + ADMIN_PASS));

      try {
        const res = await fetch('/upload-image', { method: 'POST', body: formData });
        if (res.ok) {
          const timestampedPath = 'assets/' + filename + '?t=' + Date.now();
          if (filename.includes('profile-photo')) {
            portfolioData.hero.profilePhoto = timestampedPath;
          }
          // Save updated portfolioData to server
          await fetch('/save-data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Admin-Token': btoa(ADMIN_USER + ':' + ADMIN_PASS)
            },
            body: JSON.stringify(portfolioData)
          });
          localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolioData));
          showToast('File uploaded and saved permanently ✓', 'success');
          updateSaveMsg('File saved permanently at ' + new Date().toLocaleTimeString() + ' ✓');
          return;
        }
      } catch(err) {}
    }

    showToast('File updated and saved locally ✓', 'success');
    updateSaveMsg('Saved locally at ' + new Date().toLocaleTimeString() + ' ✓');
  };
  reader.readAsDataURL(file);
}

async function uploadProjectImage(input) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async (e) => {
    const dataUrl = e.target.result;

    const wrap = document.getElementById('featImgWrap');
    if (wrap) wrap.innerHTML = `<img src="${dataUrl}" class="img-preview" alt="Featured project" />`;

    const featIdx = (portfolioData.projects || []).findIndex(p => p.featured);
    if (featIdx > -1) {
      portfolioData.projects[featIdx].image = dataUrl;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolioData));

    if (window.location.protocol !== 'file:') {
      const ext = file.name.split('.').pop();
      const fname = 'project-featured.' + ext;
      const formData = new FormData();
      formData.append('file', file);
      formData.append('filename', fname);
      formData.append('folder', 'uploads');
      formData.append('token', btoa(ADMIN_USER + ':' + ADMIN_PASS));

      try {
        const res = await fetch('/upload-image', { method: 'POST', body: formData });
        if (res.ok) {
          const path = 'assets/uploads/' + fname + '?t=' + Date.now();
          if (featIdx > -1) portfolioData.projects[featIdx].image = path;
          await fetch('/save-data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Admin-Token': btoa(ADMIN_USER + ':' + ADMIN_PASS)
            },
            body: JSON.stringify(portfolioData)
          });
          localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolioData));
          showToast('Featured project image saved permanently ✓', 'success');
          return;
        }
      } catch(err) {}
    }

    showToast('Project image saved locally ✓', 'success');
  };
  reader.readAsDataURL(file);
}

/* ─── CARD BUILDERS ────────────────────────────────────────── */
function makeTextareaCard(label, value, id, removeFn) {
  const div = document.createElement('div');
  div.className = 'repeat-card';
  const idx = id.split('-')[1];
  div.innerHTML = `
    <div class="repeat-card-header">
      <span class="repeat-card-title">${label}</span>
      <button class="btn-remove" onclick="removeAboutParagraph(${idx})">Remove</button>
    </div>
    <div class="field-group">
      <textarea id="${id}" rows="3">${esc(value)}</textarea>
    </div>`;
  return div;
}

function makeQpCard(item, i) {
  const div = document.createElement('div');
  div.className = 'repeat-card';
  div.dataset.qpIdx = i;
  div.innerHTML = `
    <div class="repeat-card-header">
      <span class="repeat-card-title">Profile Metric #${i+1}</span>
      <button class="btn-remove" onclick="removeQp(${i})">Remove</button>
    </div>
    <div class="field-grid">
      <div class="field-group"><label>Field Label</label><input type="text" id="qp-label-${i}" value="${esc(item.label)}" /></div>
      <div class="field-group"><label>Field Value</label><input type="text" id="qp-value-${i}" value="${esc(item.value)}" /></div>
    </div>`;
  return div;
}

function makeExpCard(exp, i) {
  const div = document.createElement('div');
  div.className = 'repeat-card';
  div.innerHTML = `
    <div class="repeat-card-header">
      <span class="repeat-card-title">${esc(exp.role)} @ ${esc(exp.company)}</span>
      <button class="btn-remove" onclick="removeExperience(${i})">Remove</button>
    </div>
    <div class="field-grid">
      <div class="field-group"><label>Role / Designation</label><input type="text" id="exp-role-${i}" value="${esc(exp.role)}" /></div>
      <div class="field-group"><label>Organization / Company</label><input type="text" id="exp-company-${i}" value="${esc(exp.company)}" /></div>
      <div class="field-group"><label>Work Type</label><input type="text" id="exp-type-${i}" value="${esc(exp.type)}" /></div>
      <div class="field-group"><label>Period / Duration</label><input type="text" id="exp-period-${i}" value="${esc(exp.period)}" /></div>
      <div class="field-group full"><label>Overview Description</label><textarea id="exp-desc-${i}" rows="3">${esc(exp.description)}</textarea></div>
      <div class="field-group full"><label>Key Responsibilities (one per line)</label><textarea id="exp-resp-${i}" rows="5">${esc((exp.responsibilities||[]).join('\n'))}</textarea></div>
    </div>
    <div class="field-group" style="margin-top:.9rem">
      <label>Technologies Used</label>
      ${makeTagEditor('exp-tech-' + i, exp.technologies || [])}
    </div>`;
  return div;
}

function makeSkillCatCard(cat, i) {
  const div = document.createElement('div');
  div.className = 'repeat-card';
  div.innerHTML = `
    <div class="repeat-card-header">
      <span class="repeat-card-title">${esc(cat.category)}</span>
      <button class="btn-remove" onclick="removeSkillCategory(${i})">Remove</button>
    </div>
    <div class="field-group"><label>Category Title</label><input type="text" id="skill-cat-${i}" value="${esc(cat.category)}" /></div>
    <div class="field-group" style="margin-top:.8rem"><label>Skills List</label>${makeTagEditor('skill-items-' + i, cat.items || [])}</div>`;
  return div;
}

function makeProjectCard(p, i) {
  const div = document.createElement('div');
  div.className = 'repeat-card';
  div.innerHTML = `
    <div class="repeat-card-header">
      <span class="repeat-card-title">${esc(p.title)}</span>
      <button class="btn-remove" onclick="removeProject(${i})">Remove</button>
    </div>
    <div class="field-group" style="margin-bottom:.9rem">
      <label style="display:flex;align-items:center;gap:.6rem;cursor:pointer">
        <input type="checkbox" id="proj-feat-${i}" ${p.featured ? 'checked' : ''} style="width:18px;height:18px;accent-color:var(--cyan-bright)" />
        Featured Project (large showcase card)
      </label>
    </div>
    <div class="field-grid">
      <div class="field-group"><label>Project Title</label><input type="text" id="proj-title-${i}" value="${esc(p.title)}" /></div>
      <div class="field-group"><label>Category Tag</label><input type="text" id="proj-type-${i}" value="${esc(p.type)}" /></div>
      <div class="field-group full"><label>Summary Description</label><textarea id="proj-desc-${i}" rows="3">${esc(p.description)}</textarea></div>
      <div class="field-group full"><label>Additional Details (Featured card only)</label><textarea id="proj-details-${i}" rows="3">${esc(p.details||'')}</textarea></div>
      <div class="field-group"><label>GitHub Repository URL</label><input type="url" id="proj-github-${i}" value="${esc(p.githubUrl||'')}" /></div>
      <div class="field-group"><label>Live Demo URL</label><input type="url" id="proj-live-${i}" value="${esc(p.liveUrl||'')}" /></div>
    </div>
    <div class="field-group" style="margin-top:.9rem"><label>Technology Tags</label>${makeTagEditor('proj-tech-' + i, p.technologies || [])}</div>`;
  return div;
}

function makeTlCard(item, i) {
  const div = document.createElement('div');
  div.className = 'repeat-card';
  div.innerHTML = `
    <div class="repeat-card-header">
      <span class="repeat-card-title">Step ${i+1}: ${esc(item.step)}</span>
      <button class="btn-remove" onclick="removeTimelineItem(${i})">Remove</button>
    </div>
    <div class="field-grid">
      <div class="field-group"><label>Milestone Title</label><input type="text" id="tl-step-${i}" value="${esc(item.step)}" /></div>
      <div class="field-group"><label>Time Period</label><input type="text" id="tl-period-${i}" value="${esc(item.period)}" /></div>
      <div class="field-group full"><label>Milestone Description</label><textarea id="tl-desc-${i}" rows="2">${esc(item.description)}</textarea></div>
    </div>`;
  return div;
}

function makeEduCard(ed, i) {
  const div = document.createElement('div');
  div.className = 'repeat-card';
  div.innerHTML = `
    <div class="repeat-card-header">
      <span class="repeat-card-title">${esc(ed.degree)} — ${esc(ed.institution)}</span>
      <button class="btn-remove" onclick="removeEducation(${i})">Remove</button>
    </div>
    <div class="field-grid">
      <div class="field-group"><label>Degree / Certificate</label><input type="text" id="edu-degree-${i}" value="${esc(ed.degree)}" /></div>
      <div class="field-group"><label>Field of Study</label><input type="text" id="edu-field-${i}" value="${esc(ed.field)}" /></div>
      <div class="field-group"><label>Institution / University</label><input type="text" id="edu-inst-${i}" value="${esc(ed.institution)}" /></div>
      <div class="field-group"><label>Duration Period</label><input type="text" id="edu-period-${i}" value="${esc(ed.period)}" /></div>
    </div>
    <div class="field-group" style="margin-top:.9rem"><label>Core Focus Areas</label>${makeTagEditor('edu-focus-' + i, ed.focusAreas || [])}</div>`;
  return div;
}

/* ─── TAG EDITOR ───────────────────────────────────────────── */
function makeTagEditor(id, items) {
  const tagsHtml = items.map((t, ti) =>
    `<span class="list-tag"><span class="tag-val">${esc(t)}</span> <button type="button" onclick="removeTag('${id}',${ti})" title="Remove">×</button></span>`
  ).join('');
  return `
    <div id="${id}-tags" class="list-input-row">${tagsHtml}</div>
    <div class="tag-input-wrap">
      <input type="text" id="${id}-input" placeholder="Type new item and click Add..." onkeydown="if(event.key==='Enter'){event.preventDefault();addTag('${id}')}" />
      <button type="button" onclick="addTag('${id}')">+ Add</button>
    </div>`;
}

function addTag(id) {
  const input = document.getElementById(id + '-input');
  const val   = input.value.trim();
  if (!val) return;
  const tagsEl = document.getElementById(id + '-tags');
  const idx    = tagsEl.querySelectorAll('.list-tag').length;
  const span   = document.createElement('span');
  span.className = 'list-tag';
  span.innerHTML = `<span class="tag-val">${esc(val)}</span> <button type="button" onclick="removeTag('${id}',${idx})" title="Remove">×</button>`;
  tagsEl.appendChild(span);
  input.value = '';
}

function removeTag(id, idx) {
  const tagsEl = document.getElementById(id + '-tags');
  const tags   = tagsEl.querySelectorAll('.list-tag');
  if (tags[idx]) tags[idx].remove();
  tagsEl.querySelectorAll('.list-tag').forEach((tag, i) => {
    const btn = tag.querySelector('button');
    if (btn) btn.setAttribute('onclick', `removeTag('${id}',${i})`);
  });
}

function getTagList(id) {
  const tagsEl = document.getElementById(id + '-tags');
  if (!tagsEl) return [];
  const tagVals = tagsEl.querySelectorAll('.tag-val');
  if (tagVals.length > 0) {
    return Array.from(tagVals).map(el => el.textContent.trim()).filter(Boolean);
  }
  return Array.from(tagsEl.querySelectorAll('.list-tag')).map(el => el.textContent.replace(/×/g, '').trim()).filter(Boolean);
}

function getTextareaLines(id) {
  const el = document.getElementById(id);
  if (!el) return [];
  return el.value.split('\n').map(l => l.trim()).filter(Boolean);
}

/* ─── HELPERS ──────────────────────────────────────────────── */
function setVal(id, val) { const el = document.getElementById(id); if (el) el.value = val || ''; }
function getVal(id) { const el = document.getElementById(id); return el ? el.value.trim() : ''; }
function esc(str) { return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function updateSaveMsg(msg) { const el = document.getElementById('saveMsg'); if (el) el.textContent = msg; }

function showToast(msg, type = 'success') {
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 4000);
}

/* ─── INIT ─────────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', checkSession);
