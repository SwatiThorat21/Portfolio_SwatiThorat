const projects = [
  {
    name: 'Shortlist Builder', role: 'Creator · Full Stack Developer', index: '01',
    value: 'An AI-powered vendor discovery and comparison platform that turns business requirements into an evidence-backed, ranked shortlist.',
    image: 'images/shortlist-builder.jpg', alt: 'Shortlist Builder requirement form for budget, region, features, team size, and compliance constraints',
    features: ['Discovery → scraping → extraction → scoring → persistence pipeline', 'Public-source evidence, pricing context, risks, and deterministic ranking', 'Shortlist history, caching, validation, rate limiting, and service status monitoring', 'Markdown export plus automated frontend and backend tests'],
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Gemini', 'Supabase', 'Axios', 'Cheerio', 'Zod'],
    github: 'https://github.com/SwatiThorat21/Shortlist-Builder', live: 'https://shortlist-builder-frontend.vercel.app/'
  },
  {
    name: 'Quizzie', role: 'Creator · Full Stack Developer', index: '02',
    value: 'A quiz and poll creation platform with shareable participation flows and question-level analytics.',
    image: 'images/quiz-app.jpg', alt: 'Quizzie analytics dashboard showing quiz, question, and impression summaries',
    features: ['JWT authentication with bcrypt password hashing and protected CRUD APIs', 'Q&A and poll modes with timed questions and text, image, or combined answers', 'Shareable participation links, scoring, option-level voting, and impression tracking', 'Dashboard and question-level correct, incorrect, vote, and engagement analytics'],
    tech: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'Axios'],
    github: 'https://github.com/SwatiThorat21/quizzzie', live: 'https://intellect-quest.netlify.app/'
  },
  {
    name: 'Rate My Style AI', role: 'Full-Stack Development Contributor', index: '03',
    value: 'A production AI outfit-feedback application that turns photos into personalised ratings, colour insights, and styling guidance.',
    image: 'images/rate-my-style.jpg', alt: 'Rate My Style AI mobile result screen with an outfit score and personalised feedback',
    features: ['Contributed React Native screens, reusable UI components, and Supabase-backed workflows', 'Integrated Gemini and OpenAI APIs for contextual outfit analysis and feedback', 'Worked on image submission, result presentation, loading, validation, success, and failure states', 'Collaborated on testing, debugging, usability improvements, and production release support'],
    tech: ['React Native', 'JavaScript', 'Supabase', 'PostgreSQL', 'Gemini API', 'OpenAI API'],
    github: null, live: 'https://ratemystyle.ai/'
  }
];

const skillGroups = {
  'Frontend': ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS', 'Responsive design'],
  'Backend': ['Python', 'Flask', 'Node.js', 'Express', 'REST APIs', 'JWT authentication', 'Role-based authorization'],
  'Databases': ['MySQL', 'MongoDB', 'Supabase / PostgreSQL'],
  'Tools & integrations': ['Git', 'GitHub', 'Payment APIs', 'KYC / document APIs', 'Gemini API', 'Axios']
};

const projectList = document.querySelector('#project-list');
projectList.innerHTML = projects.map(project => `
  <article class="project-card">
    <div class="project-visual"><img src="${project.image}" alt="${project.alt}" width="1400" height="900" loading="lazy"></div>
    <div class="project-content">
      <div class="project-topline"><span>${project.index}</span><p>${project.role}</p></div>
      <h3>${project.name}</h3><p class="project-value">${project.value}</p>
      <ul>${project.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
      <div class="badges">${project.tech.map(tech => `<span>${tech}</span>`).join('')}</div>
      <details><summary>View project details <span aria-hidden="true">+</span></summary><p>${project.value} ${project.features.join('. ')}.</p></details>
      <div class="project-links">${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : '<span aria-label="Repository unavailable">Repository not public</span>'}<a href="${project.live}" target="_blank" rel="noopener noreferrer">${project.name === 'Rate My Style AI' ? 'View product' : 'Live demo'} ↗</a></div>
    </div>
  </article>`).join('');

document.querySelector('#skills-grid').innerHTML = Object.entries(skillGroups).map(([group, skills]) => `<article><h3>${group}</h3><ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul></article>`).join('');

const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');
function syncTheme() {
  const dark = root.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  themeColor.content = dark ? '#111513' : '#f6f7f3';
}
themeToggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', root.dataset.theme);
  syncTheme();
});
syncTheme();

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
function closeMenu() { navToggle.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-open'); }
navToggle.addEventListener('click', () => { const open = navToggle.getAttribute('aria-expanded') === 'true'; navToggle.setAttribute('aria-expanded', String(!open)); document.body.classList.toggle('menu-open', !open); if (!open) navMenu.querySelector('a').focus(); });
navMenu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); navToggle.focus(); } });

const sections = [...document.querySelectorAll('main section[id], header[id]')];
const navLinks = [...document.querySelectorAll('.nav-menu a[href^="#"]')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) navLinks.forEach(link => link.toggleAttribute('aria-current', link.getAttribute('href') === `#${entry.target.id}`)); });
}, { rootMargin: '-25% 0px -65% 0px' });
sections.forEach(section => observer.observe(section));

document.querySelectorAll('details').forEach(details => details.addEventListener('toggle', () => { details.querySelector('summary span').textContent = details.open ? '−' : '+'; }));
document.querySelector('#year').textContent = new Date().getFullYear();
