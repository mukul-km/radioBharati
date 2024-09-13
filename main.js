const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".hero__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".hero__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".hero__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".hero__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".section__description", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".bulletin__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".swiper", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  origin: "left",
  interval: 700,
});

ScrollReveal().reveal(".incubation__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
