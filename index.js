/* =============================================
   CANVAS PARTICLE CONSTELLATION
   ============================================= */
const canvas = document.getElementById('hero-canvas');
const ctx    = canvas.getContext('2d');
let particles = [], W, H;
function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
resize();
window.addEventListener('resize', () => { resize(); initParticles(); });
function Particle() { this.x=Math.random()*W; this.y=Math.random()*H; this.vx=(Math.random()-0.5)*0.3; this.vy=(Math.random()-0.5)*0.3; this.r=Math.random()*1.5+0.5; this.a=Math.random(); }
function initParticles() { const c=Math.min(120,Math.floor(W*H/11000)); particles=Array.from({length:c},()=>new Particle()); }
initParticles();
function drawParticles() {
  ctx.clearRect(0,0,W,H);
  const D=130;
  particles.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=`rgba(108,99,255,${p.a*0.7})`; ctx.fill(); });
  for(let i=0;i<particles.length;i++) for(let j=i+1;j<particles.length;j++) { const dx=particles[i].x-particles[j].x,dy=particles[i].y-particles[j].y,d=Math.sqrt(dx*dx+dy*dy); if(d<D){ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.strokeStyle=`rgba(108,99,255,${(1-d/D)*0.22})`;ctx.lineWidth=0.8;ctx.stroke();} }
  requestAnimationFrame(drawParticles);
}
drawParticles();

/* =============================================
   TRANSLATIONS
   ============================================= */
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.exp': 'Experience',
    'nav.projects': 'Projects',
    'nav.certs': 'Certs',
    'nav.contact': 'Contact',
    'hire': 'Hire Me',
    'status': 'Open to Opportunities',
    'hero.eyebrow': "Hello, I'm",
    'hero.role': 'Fresh Graduate & ',
    'hero.degree': 'BCS (Hons) Artificial Intelligence · MMU · CGPA 3.21',
    'hero.bio': 'Freshly graduated from <strong>Multimedia University</strong>, Malacca. Passionate about building intelligent systems — from machine learning pipelines and computer vision to secure, beautiful web applications.',
    'hero.cta1': 'View My Work',
    'hero.cta2': 'Get In Touch',
    'about.eyebrow': 'Get to know me',
    'about.title': 'About <span class="accent">Me</span>',
    'about.heading': 'Turning Data & Code into Intelligent Solutions',
    'about.text1': 'I\'m <strong>Abdullah Zeyed Kawadis</strong>, a fresh graduate with a <strong>Bachelor of Computer Science (Hons) in Artificial Intelligence</strong> from <strong>Multimedia University (MMU)</strong>, Malacca — achieving a CGPA of <strong>3.21</strong>.',
    'about.text2': 'Throughout my degree I\'ve worked across AI & machine learning, computer vision, natural language processing, cybersecurity, cloud computing, full-stack web development, and data analytics. I completed my <strong>Industrial Training</strong> in 2025, gaining real-world software engineering experience.',
    'about.text3': "I'm passionate about building things that matter — from predictive ML models to secure web systems and intelligent computer vision pipelines.",
    'about.stat1': 'CGPA',
    'about.stat2': 'Projects',
    'about.stat3': 'Courses',
    'about.stat4': 'Years Study',
    'about.edu1': 'MMU — BCS (Hons) Artificial Intelligence',
    'about.edu1p': '2022 – 2025 · CGPA 3.21',
    'about.edu2': 'Al-Kon International School',
    'about.edu2p': 'Pre-University',
    'skills.eyebrow': 'Built from 20+ university courses',
    'skills.title': 'My <span class="accent">Skills</span>',
    'tab.all': 'All',
    'tab.ai': 'AI & ML',
    'tab.prog': 'Programming',
    'tab.web': 'Web & Data',
    'tab.sec': 'Security & Cloud',
    'exp.eyebrow': 'Real-world background',
    'exp.title': 'My <span class="accent">Experience</span>',
    'exp1.role': 'Institutional Resources & Projects Trainee',
    'exp1.company': 'Rawaf Mina For Pilgrims Services',
    'exp1.collab': 'in collaboration with GLOBE Logistics, Jeddah',
    'exp1.loc': 'Makkah, Saudi Arabia',
    'exp1.date': 'Jul 2025 – Oct 2025',
    'exp1.badge': 'MMU Industrial Training Program &nbsp;·&nbsp; Ref: EEC02163',
    'exp1.desc': 'Completed industrial training as part of the <strong>MMU Industrial Training Program</strong>. The training was officially coordinated through <strong>GLOBE Logistics (Jeddah)</strong> and conducted at <strong>Rawaf Mina</strong> in Makkah, where I gained hands-on experience in real-world systems, data handling, and project workflows within the Institutional Resources & Projects department.',
    'exp2.role': 'Final Year Project — AI Research',
    'exp2.company': 'Multimedia University &nbsp;·&nbsp; Melaka Campus',
    'exp2.date': '2024 – 2025',
    'exp2.desc': 'Conducted two independent AI/CS research projects (FYP1 & FYP2) spanning two trimesters — covering diabetes risk prediction via ML and breast cancer detection via deep learning + XAI. Developed full research methodology, implemented working systems, and produced formal theses.',
    'exp3.role': 'Freelance & Personal Projects',
    'exp3.company': 'Self-Directed',
    'exp3.date': '2022 – Present',
    'exp3.desc': 'Independently designed and built 6+ projects spanning educational platforms, ML predictive models, Discord bots with AI features, industrial vision systems, data dashboards, and interactive CSS simulations.',
    'projects.eyebrow': "What I've built",
    'projects.title': 'Featured <span class="accent">Projects</span>',
    'fyp1.title': 'Early Diabetes Risk Prediction Using Machine Learning: An Interpretable and User-Friendly Web-Based Approach',
    'fyp1.desc': 'Developed a machine learning system to predict early diabetes risk with interpretable outputs and a user-friendly web interface designed for non-technical users.',
    'fyp2.title': 'AI-Based Breast Cancer Detection Using Deep Learning and Explainable AI on Histopathological Images',
    'fyp2.desc': 'Built a deep learning model for breast cancer detection on histopathological images, integrating explainable AI techniques to improve interpretability, transparency, and clinical trust.',
    'certs.eyebrow': 'Achievements & Recognition',
    'certs.title': 'Certifi<span class="accent">cations</span>',
    'contact.eyebrow': "Let's connect",
    'contact.title': 'Get In <span class="accent">Touch</span>',
    'contact.tagline': 'Open to full-time roles, internships, freelance projects, or just a good conversation about AI and tech.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.send': 'Send Message',
    'footer.copy': '© 2026 Abdullah Zeyed Kawadis · BCS (Hons) AI Graduate · MMU',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.skills': 'المهارات',
    'nav.exp': 'الخبرات',
    'nav.projects': 'المشاريع',
    'nav.certs': 'الشهادات',
    'nav.contact': 'تواصل معي',
    'hire': 'وظّفني',
    'status': 'متاح للفرص',
    'hero.eyebrow': 'مرحباً، أنا',
    'hero.role': 'خريج حديث & ',
    'hero.degree': 'بكالوريوس علوم الحاسوب (مع مرتبة الشرف) ذكاء اصطناعي · MMU · المعدل 3.21',
    'hero.bio': 'خريج حديث من <strong>جامعة مولتيميديا</strong>، مالاكا. شغوف ببناء الأنظمة الذكية — من نماذج التعلم الآلي ورؤية الحاسوب إلى تطبيقات الويب الآمنة والجميلة.',
    'hero.cta1': 'عرض أعمالي',
    'hero.cta2': 'تواصل معي',
    'about.eyebrow': 'تعرّف عليّ',
    'about.title': 'نبذة <span class="accent">عني</span>',
    'about.heading': 'تحويل البيانات والكود إلى حلول ذكية',
    'about.text1': 'أنا <strong>عبدالله زيد قواديس</strong>، خريج حديث حاصل على <strong>بكالوريوس علوم الحاسوب (مع مرتبة الشرف) في الذكاء الاصطناعي</strong> من <strong>جامعة مولتيميديا (MMU)</strong>، مالاكا — بمعدل تراكمي <strong>3.21</strong>.',
    'about.text2': 'خلال دراستي تناولت مجالات متعددة: الذكاء الاصطناعي، التعلم الآلي، رؤية الحاسوب، معالجة اللغة الطبيعية، الأمن السيبراني، الحوسبة السحابية، تطوير الويب، وتحليل البيانات. أتممت <strong>التدريب الميداني</strong> عام 2025.',
    'about.text3': 'أسعى لبناء أشياء ذات أثر — من نماذج التنبؤ إلى أنظمة الويب الآمنة وخطوط معالجة الرؤة الحاسوبية.',
    'about.stat1': 'المعدل',
    'about.stat2': 'مشاريع',
    'about.stat3': 'مادة',
    'about.stat4': 'سنوات دراسة',
    'about.edu1': 'MMU — بكالوريوس علوم الحاسوب (مع مرتبة الشرف) ذكاء اصطناعي',
    'about.edu1p': '2022 – 2025 · المعدل 3.21',
    'about.edu2': 'مدرسة الكون الدولية',
    'about.edu2p': 'مرحلة ما قبل الجامعة',
    'skills.eyebrow': 'مبنية على أكثر من 20 مادة جامعية',
    'skills.title': '<span class="accent">مهاراتي</span>',
    'tab.all': 'الكل',
    'tab.ai': 'الذكاء الاصطناعي',
    'tab.prog': 'البرمجة',
    'tab.web': 'الويب والبيانات',
    'tab.sec': 'الأمن والسحابة',
    'exp.eyebrow': 'خبرة في عالم العمل',
    'exp.title': '<span class="accent">خبرتي</span>',
    'exp1.role': 'متدرب — الموارد المؤسسية والمشاريع',
    'exp1.company': 'رواف منى لخدمات الحجاج',
    'exp1.collab': 'بالتعاون مع GLOBE Logistics، مدينة جدة',
    'exp1.loc': 'مكة المكرمة، المملكة العربية السعودية',
    'exp1.date': 'يوليو 2025 – أكتوبر 2025',
    'exp1.badge': 'برنامج التدريب الصناعي لجامعة ملتيميديا &nbsp;·&nbsp; مرجع: EEC02163',
    'exp1.desc': 'أكملت التدريب الصناعي كجزء من <strong>برنامج التدريب الصناعي لجامعة ملتيميديا (MMU)</strong>. تم تنسيق التدريب رسمياً من خلال <strong>GLOBE Logistics (جدة)</strong> وأُقيم في <strong>رواف منى</strong> في مكة المكرمة، حيث اكتسبت خبرة عملية في التعامل مع الأنظمة الواقعية، إدارة البيانات، وسير العمل ضمن قسم الموارد المؤسسية والمشاريع.',
    'exp2.role': 'مشروع التخرج — بحث في الذكاء الاصطناعي',
    'exp2.company': 'جامعة ملتيميديا &nbsp;·&nbsp; فرع ملقا',
    'exp2.date': '2024 – 2025',
    'exp2.desc': 'أجريت مشروعي بحث مستقلين في الذكاء الاصطناعي وعلوم الحاسوب (FYP1 و FYP2) على مدار فصلين دراسيين — شمل التنبؤ بمخاطر السكري باستخدام التعلم الآلي، والكشف عن سرطان الثدي عبر التعلم العميق والذكاء الاصطناعي القابل للتفسير. قمت بتطوير منهجية البحث، وتنفيذ الأنظمة، وإعداد رسائل البحث الرسمية.',
    'exp3.role': 'مشاريع شخصية ومستقلة',
    'exp3.company': 'مستقل',
    'exp3.date': '2022 – الحاضر',
    'exp3.desc': 'صممت وبنيت 6+ مشاريع تشمل منصات تعليمية، نماذج تنبؤ بالتعلم الآلي، بوتات ديسكورد ذكية، أنظمة رؤية صناعية، لوحات بيانات، ومحاكاة CSS تفاعلية.',
    'projects.eyebrow': 'ما قمت ببنائه',
    'projects.title': 'مشاريع <span class="accent">مميزة</span>',
    'fyp1.title': 'التنبؤ المبكر بخطر الإصابة بالسكري باستخدام التعلم الآلي: نهج قابل للتفسير وسهل الاستخدام عبر الويب',
    'fyp1.desc': 'طوّرت نظاماً للتعلم الآلي للتنبؤ المبكر بخطر الإصابة بالسكري مع مخرجات قابلة للتفسير وواجهة ويب سهلة للمستخدمين غير التقنيين.',
    'fyp2.title': 'كشف سرطان الثدي بالذكاء الاصطناعي باستخدام التعلم العميق والذكاء الاصطناعي القابل للتفسير على الصور النسيجية',
    'fyp2.desc': 'بنيت نموذج تعلم عميق لكشف سرطان الثدي في الصور النسيجية، مع دمج تقنيات الذكاء الاصطناعي القابل للتفسير لتعزيز الشفافية والثقة السريرية.',
    'certs.eyebrow': 'الإنجازات والتقدير',
    'certs.title': 'الشها<span class="accent">دات</span>',
    'contact.eyebrow': 'تواصل معي',
    'contact.title': 'ابقَ <span class="accent">على تواصل</span>',
    'contact.tagline': 'منفتح على الوظائف الكاملة، التدريب، العمل الحر، أو مجرد حديث عن الذكاء الاصطناعي والتقنية.',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.location': 'الموقع',
    'contact.send': 'إرسال الرسالة',
    'footer.copy': '© 2026 عبدالله زيد قواديس · خريج بكالوريوس ذكاء اصطناعي · MMU',
  }
};

/* Typewriter roles per language */
const rolesEn = ['AI Engineer','ML Developer','Full-Stack Dev','Computer Vision Engineer','Cybersec Enthusiast'];
const rolesAr = ['مهندس ذكاء اصطناعي','مطور تعلم آلي','مطور ويب متكامل','مهندس رؤية حاسوب','متحمس للأمن السيبراني'];

/* =============================================
   LANGUAGE TOGGLE
   ============================================= */
let currentLang = 'en';
const langToggleBtn = document.getElementById('lang-toggle');
const langLabel     = document.getElementById('lang-label');
const langLabels    = langToggleBtn ? langToggleBtn.querySelectorAll('.lang-toggle__label') : [];

function setActiveLangLabel(lang) {
  langLabels.forEach((el, i) => {
    el.classList.toggle('active-lang', (lang === 'en' && i === 0) || (lang === 'ar' && i === 1));
  });
}

function translatePage(lang) {
  const t = translations[lang];
  // Simple text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (t[el.dataset.i18n] !== undefined) el.textContent = t[el.dataset.i18n];
  });
  // HTML content
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    if (t[el.dataset.i18nHtml] !== undefined) el.innerHTML = t[el.dataset.i18nHtml];
  });
}

function switchLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  document.documentElement.setAttribute('dir',  currentLang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', currentLang);
  translatePage(currentLang);
  setActiveLangLabel(currentLang);
  // Reset typewriter for new language
  ri = 0; ci = 0; deleting = false;
  currentRoles = currentLang === 'ar' ? rolesAr : rolesEn;
}

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', switchLanguage);
  setActiveLangLabel('en');
}

/* =============================================
   SCROLL-REVEAL
   ============================================= */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealEls.forEach(el => revealObs.observe(el));

/* =============================================
   COUNTER ANIMATION
   ============================================= */
const counters = document.querySelectorAll('.counter');
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target, target = +el.dataset.target, isGpa = target === 321;
    const steps = 1400 / (1000/60);
    let cur = 0;
    const timer = setInterval(() => {
      cur += target / steps;
      if (cur >= target) { cur = target; clearInterval(timer); }
      el.textContent = isGpa ? (cur/100).toFixed(2) : Math.floor(cur) + (target > 3 ? '+' : '');
    }, 1000/60);
    counterObs.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObs.observe(c));

/* =============================================
   NAVBAR
   ============================================= */
const header    = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu   = document.getElementById('nav-menu');
const navLinks  = document.querySelectorAll('.nav__link');
const scrollTop = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  scrollTop.classList.toggle('visible', window.scrollY > 500);
  updateActiveLink();
}, { passive: true });
navToggle.addEventListener('click', () => { navToggle.classList.toggle('open'); navMenu.classList.toggle('open'); });
navLinks.forEach(l => l.addEventListener('click', () => { navToggle.classList.remove('open'); navMenu.classList.remove('open'); }));
function updateActiveLink() {
  const secs = document.querySelectorAll('section[id]'), sy = window.scrollY + 120;
  secs.forEach(s => { const link = document.querySelector(`.nav__link[href="#${s.id}"]`); if(!link) return; if(sy>=s.offsetTop&&sy<s.offsetTop+s.offsetHeight){navLinks.forEach(l=>l.classList.remove('active-link'));link.classList.add('active-link');}});
}
updateActiveLink();
scrollTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

/* =============================================
   TYPEWRITER
   ============================================= */
let currentRoles = rolesEn;
let ri = 0, ci = 0, deleting = false;
const twEl = document.getElementById('typewriter');
function type() {
  const cur = currentRoles[ri % currentRoles.length];
  twEl.textContent = deleting ? cur.substring(0, ci-1) : cur.substring(0, ci+1);
  deleting ? ci-- : ci++;
  if (!deleting && ci === cur.length) { deleting = true; setTimeout(type, 1600); return; }
  if (deleting && ci === 0) { deleting = false; ri = (ri+1) % currentRoles.length; }
  setTimeout(type, deleting ? 38 : 68);
}
type();

/* =============================================
   SKILL TABS
   ============================================= */
const tabs       = document.querySelectorAll('.skill-tab');
const skillCards = document.querySelectorAll('.skill-card[data-category]');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    skillCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.display = match ? '' : 'none';
      if (match) { card.classList.remove('visible'); setTimeout(() => card.classList.add('visible'), 50); }
    });
  });
});
