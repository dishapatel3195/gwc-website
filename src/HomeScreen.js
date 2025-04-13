const track = document.querySelector('.carousel-track'); 
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;
let totalSlides = 26;
const visibleSlides = 3;

function loadImages() {
  for (let i = 1; i <= totalSlides; i++) {
    const img = document.createElement('img');
    img.src = `images/pic${i}.png`;
    img.alt = `Group ${i}`;
    track.appendChild(img);
  }
}

function updateCarousel() {
  const slideWidth = track.children[0].offsetWidth;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  index = Math.min(index + visibleSlides, totalSlides - visibleSlides);
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = Math.max(index - visibleSlides, 0);
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);

window.addEventListener('load', () => {
  loadImages();
  updateCarousel();
});

// to change the content of pages alongside header page changes
const navLinks = document.querySelectorAll('.nav-link');
const pageContent = document.getElementById('page-content');

const pages = {
    home: ``,
    calendar: ``,
    showcase: ``,
    about: ``,
    resources: ``
  };

  function loadPage(page) {
    pageContent.innerHTML = pages[page] || ``;
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`.nav-link[data-page="${page}"]`)?.classList.add('active');
  }
  

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const page = link.getAttribute('data-page');
    loadPage(page);
  });
});

// Load 'home' by default
loadPage('home');
