const GITHUB_USER = "dyantrsna"; 
const dv = (n) => `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${n}/${n}-original.svg`;
const SKILLS = {
  lang: [
    ["HTML", dv("html5")], ["CSS", dv("css3")], ["JavaScript", dv("javascript")],
    ["PHP", dv("php")], ["SQL", dv("mysql")], ["Python", dv("python")],
    ["C++", dv("cplusplus")], ["Java", dv("java")]
  ], 

  software: [
    ["VS Code", dv("vscode")], ["XAMPP", "https://upload.wikimedia.org/wikipedia/commons/0/03/Xampp_logo.svg"], ["Word", ""],
    ["Excel", ""]
  ]
};

const CERTIFICATES = [
  {
    title: "Sertifikat PKKMB",
    issuer: "Universitas Almuslim",
    year: "2026",
    image: "pkkmb.jpg", 
  },
  {
    title: "Pelatihan Web Development",
    issuer: "Universitas Almuslim",
    year: "2026",
    image: "web1.jpg",
  }
];

const CODING_WORKS = [
  {
  name: "Digital Birthday Card fira",
  type: "coding",
  lang: "HTML5, CSS3, JavaScript",
  desc: "Kartu ucapan digital estetik dengan efek transisi halaman, galeri foto kenangan, dan pesan ucapan personal.",
  link: "https://bdaymagfitarunnisa.netlify.app"
},
  {
   name: "Digital Birthday Card knur",
  type: "coding",
  lang: "HTML5, CSS3, JavaScript",
  desc: "Kartu ucapan digital estetik dengan efek transisi halaman, galeri foto kenangan, dan pesan ucapan personal.",
  link: "https://birthdaykaknurina.netlify.app"
},
 {
   name: "Digital Birthday Card mkpiii",
  type: "coding",
  lang: "HTML5, CSS3, JavaScript",
  desc: "Kartu ucapan digital estetik dengan efek transisi halaman, galeri foto kenangan, dan pesan ucapan personal.",
  link: "https://bdaymakpiii.netlify.app"
},
{
   name: "Animated Lyrics & Music Player 2",
  type: "coding",
  lang: "JavaScript, CSS Animation, HTML",
  desc: "Aplikasi pemutar musik web dengan efek lirik berjalan yang tersinkronisasi otomatis dengan audio, dilengkapi efek visual dan animasi transisi halus.",
  link: "https://merrychrismast.netlify.app", 
},
{
   name: "Terminal ASCII Animation lampu ambulance",
  type: "coding",
  lang: "Python (CLI & OS Module)",
  desc: "Animasi visual berbasis teks (ASCII art) di terminal console dengan manipulasi delay waktu dan efek rendering real-time.",
  link: "https://https://lampuambulance.netlify.app"
},
{
name: "Fingerprint Scan & Photo Reveal",
    type: "coding",
    lang: "JavaScript & CSS Animation",
    desc: "Aplikasi web interaktif dengan animasi sensor sidik jari dan efek transisi unblur foto yang dinamis.",
    link: "https://fotoblurwarnawarni.netlify.app",
},
{
name: "Fingerprint Scan & Photo Reveal",
    type: "coding",
    lang: "JavaScript & CSS Animation",
    desc: "Aplikasi web interaktif dengan animasi sensor sidik jari dan efek transisi unblur foto yang dinamis.",
    link: "https://fingeranimation.netlify.app",
}
];

const DESIGN_WORKS = [

];

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

(function initTyping() {
  const el = $("#typed");
  if (!el) return;
  
  const text = "student informatic engineering at Almuslim University";
  let index = 0;
  let isDeleting = false;

  function typeTick() {
    el.textContent = text.substring(0, index);

    if (!isDeleting && index === text.length) {
      setTimeout(() => { isDeleting = true; typeTick(); }, 2000);
      return;
    }

    if (isDeleting && index === 0) {
      isDeleting = false;
      setTimeout(typeTick, 500);
      return;
    }

    index += isDeleting ? -1 : 1;
    const speed = isDeleting ? 40 : 90;
    setTimeout(typeTick, speed);
  }

  typeTick();
})();

const root = document.documentElement;
const themeBtn = $("#themeBtn");
const themeIcon = $("#themeIcon");

function applyTheme(theme) {
  root.dataset.theme = theme;
  try { localStorage.setItem("theme", theme); } catch (e) {}

  if (theme === "light") {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
}

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

themeBtn.onclick = () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
};

const menuBtn = $("#menuBtn");
const navMenu = $("#navMenu");

if (menuBtn && navMenu) {
  menuBtn.onclick = () => navMenu.classList.toggle("open");
  $$(".nav-link").forEach(link => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
  });
}

const navLinks = $$(".nav-link");
const sections = $$("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach((sec) => observer.observe(sec));

Object.entries(SKILLS).forEach(([key, items]) => {
  const container = $("#" + key);
  if (!container) return;
  container.innerHTML = items.map(([name, icon]) => `
    <div class="chip">
      ${icon ? `<img src="${icon}" alt="${name}" loading="lazy">` : `<i class="fa-solid fa-cube accent-text"></i>`}
      <span>${name}</span>
    </div>
  `).join("");
});


const certContainer = $("#certList");
const certModal = $("#certModal");
const modalImg = $("#modalImg");
const modalTitle = $("#modalTitle");
const modalIssuer = $("#modalIssuer");
const modalClose = $("#modalClose");
const modalOverlay = $("#modalOverlay");

function renderCertificates() {
  if (!certContainer) return;

  certContainer.innerHTML = CERTIFICATES.map((cert, index) => `
    <article class="glass cert-card" data-index="${index}">
      <div class="cert-img-wrapper">
        <img 
          src="${cert.image}" 
          alt="${cert.title || 'Sertifikat'}" 
          loading="lazy" 
          onerror="this.onerror=null; this.src='pkkmb.jpg';"
        >
        <div class="cert-overlay">
          <i class="fa-solid fa-expand"></i>
        </div>
      </div>
      <div class="cert-info">
        <div class="cert-meta">
          <span>${cert.issuer}</span>
          <span>${cert.year}</span>
        </div>
        <h4>${cert.title || 'Sertifikat'}</h4>
      </div>
    </article>
  `).join("");

  $$(".cert-card").forEach((card) => {
    card.onclick = () => {
      const idx = card.dataset.index;
      const data = CERTIFICATES[idx];
      modalImg.src = data.image;
      modalTitle.textContent = data.title || 'Sertifikat';
      modalIssuer.textContent = `${data.issuer} • ${data.year}`;
      certModal.classList.add("active");
    };
  });
}

function closeModal() {
  if (certModal) certModal.classList.remove("active");
}

if (modalClose) modalClose.onclick = closeModal;
if (modalOverlay) modalOverlay.onclick = closeModal;

renderCertificates();

let works = [];

function renderWorks(filter = "all") {
  const container = $("#works");
  if (!container) return;

  const filtered = works.filter((w) => filter === "all" || w.type === filter);

  if (filtered.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; color: var(--text-muted); text-align: center;">Belum ada proyek untuk kategori ini.</p>`;
    return;
  }

  container.innerHTML = filtered.map((w) => `
    <article class="glass work-card">
      <div class="work-top">
        <div class="work-icon">
          <i class="fa-brands ${w.type === "coding" ? "fa-github" : "fa-figma"}"></i>
        </div>
        <div>
          <h4>${w.name}</h4>
          <small>${w.lang || "Code"} • ${w.type === "coding" ? "Coding" : "Desain"}</small>
        </div>
      </div>
      <p class="work-desc">${w.desc || "Tidak ada deskripsi yang tersedia untuk proyek ini."}</p>
      
      <div class="work-actions" style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: auto;">
        ${w.link && w.link !== "#" ? `
          <a class="work-link" href="${w.link}" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i> Source Code
          </a>
        ` : ""}
        ${w.demo ? `
          <a class="work-link" href="${w.demo}" target="_blank" rel="noopener noreferrer" style="background: var(--accent); color: var(--on-accent); border-color: var(--accent);">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo
          </a>
        ` : ""}
      </div>
    </article>
  `).join("");
}


works = [...CODING_WORKS, ...DESIGN_WORKS];
renderWorks();

if (GITHUB_USER) {
  fetch(`https://api.github.com/users/${dytrsna}/repos?sort=updated&per_page=6`)
    .then((res) => {
      if (!res.ok) throw new Error("Gagal mengambil repositori GitHub");
      return res.json();
    })
    .then((repos) => {
      const gitProjects = repos.map((r) => ({
        name: r.name,
        type: "coding",
        lang: r.language || "Code",
        desc: r.description,
        link: r.html_url
      }));

      const existingNames = new Set(CODING_WORKS.map(p => p.name.toLowerCase()));
      const uniqueGitProjects = gitProjects.filter(p => !existingNames.has(p.name.toLowerCase()));

      works = [...CODING_WORKS, ...uniqueGitProjects, ...DESIGN_WORKS];
      renderWorks($(".pill.active") ? $(".pill.active").dataset.filter : "all");
    })
    .catch(() => {
      console.log("Menggunakan data proyek lokal.");
    });
}

$$(".pill").forEach((btn) => {
  btn.onclick = () => {
    $$(".pill").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderWorks(btn.dataset.filter);
  };
});