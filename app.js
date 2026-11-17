const header = document.querySelector('.site-header');
const navToggle = document.querySelector('#nav-toggle');
const siteNav = document.querySelector('#site-nav');
const themeToggle = document.querySelector('#theme-toggle');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

function setNavOpen(isOpen) {
  header.classList.toggle('nav-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
}

navToggle.addEventListener('click', function () {
  setNavOpen(!header.classList.contains('nav-open'));
});

siteNav.addEventListener('click', function (event) {
  if (event.target.closest('a')) {
    setNavOpen(false);
  }
});

function applyTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  themeToggle.textContent = isDark ? 'Mode terang' : 'Mode gelap';
}

themeToggle.addEventListener('click', function () {
  applyTheme(!document.body.classList.contains('dark'));
});

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const nama = contactForm.nama.value.trim();
  const email = contactForm.email.value.trim();
  const pesan = contactForm.pesan.value.trim();

  formStatus.classList.remove('success', 'error');

  if (!nama || !email || !pesan) {
    formStatus.textContent = 'Lengkapi nama, email, dan pesan terlebih dahulu.';
    formStatus.classList.add('error');
    return;
  }

  if (!isValidEmail(email)) {
    formStatus.textContent = 'Format email belum benar. Contoh: nama@email.com';
    formStatus.classList.add('error');
    contactForm.email.focus();
    return;
  }

  formStatus.textContent = 'Pesan siap dikirim. Terima kasih!';
  formStatus.classList.add('success');
  contactForm.reset();
});
