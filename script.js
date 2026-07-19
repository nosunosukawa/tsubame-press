// TSUBAME PRESS & CO. — shared site behavior

document.addEventListener('DOMContentLoaded', () => {
  initMegaNav();
  initMobileNav();
  initHero();
  initCardCarousels();
});

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const navMain = document.querySelector('.nav-main');
  if (!toggle || !navMain) return;
  toggle.addEventListener('click', () => {
    const open = navMain.classList.toggle('is-open');
    toggle.classList.toggle('is-active', open);
  });
  navMain.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      navMain.classList.remove('is-open');
      toggle.classList.remove('is-active');
    });
  });
}

function initMegaNav() {
  const items = document.querySelectorAll('.nav-main__item');
  items.forEach((item) => {
    const panel = item.querySelector('.mega-panel');
    if (!panel) return;
    let closeTimer;
    const open = () => { clearTimeout(closeTimer); item.classList.add('is-open'); };
    const close = () => { closeTimer = setTimeout(() => item.classList.remove('is-open'), 120); };
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', close);
    item.addEventListener('focusin', open);
    item.addEventListener('focusout', close);
  });
}

function initHero() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const slides = hero.querySelectorAll('.hero-slide');
  const dots = hero.querySelectorAll('.hero-dot');
  const prev = hero.querySelector('.hero-arrow--prev');
  const next = hero.querySelector('.hero-arrow--next');
  let index = 0;
  let timer;

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle('is-active', n === index));
    dots.forEach((d, n) => d.classList.toggle('is-active', n === index));
  }

  function restartAutoplay() {
    clearInterval(timer);
    timer = setInterval(() => show(index + 1), 5500);
  }

  dots.forEach((d, n) => d.addEventListener('click', () => { show(n); restartAutoplay(); }));
  if (prev) prev.addEventListener('click', () => { show(index - 1); restartAutoplay(); });
  if (next) next.addEventListener('click', () => { show(index + 1); restartAutoplay(); });

  show(0);
  restartAutoplay();
}

function initCardCarousels() {
  document.querySelectorAll('.carousel').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const prev = carousel.querySelector('.carousel-nav .carousel-prev');
    const next = carousel.querySelector('.carousel-nav .carousel-next');
    if (!track) return;
    const scrollBy = () => track.firstElementChild ? track.firstElementChild.getBoundingClientRect().width + 24 : 320;
    if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -scrollBy(), behavior: 'smooth' }));
    if (next) next.addEventListener('click', () => track.scrollBy({ left: scrollBy(), behavior: 'smooth' }));
  });
}
