const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// BULLETIN SECTION SWIPER
const API_KEY = "AIzaSyDpqvc7ryllo2C_yaIevPe04An8LNWK0WU";
const bulletinSlides = document.querySelector(".swiper-wrapper");

addVideo();

function addVideo() {
  fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLMa4o2xyZE9jGKYrwBuUPAucfKifWnU_p&key=${API_KEY}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok " + res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      const dataItems = data.items;
      let videoHtml = "";

      dataItems.forEach((item, index) => {
        videoHtml += `<iframe
            class="swiper-slide"
            role="group"
            aria-label="${index + 1}/${data.items.length}"
            data-swiper-slide-index="${index + 1}"
            src="https://www.youtube.com/embed/${
              item.snippet.resourceId.videoId
            }"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>`;
      });

      bulletinSlides.innerHTML += videoHtml;

      // Reinitialize Swiper after adding new slides
      if (typeof Swiper !== "undefined") {
        new Swiper(".bulletin__swiper", {
          loop: true,
          pagination: {
            el: ".swiper-pagination",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

// Program Swiper
const progrmaSwiper = new Swiper(".program__swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    slideShadows: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
  },
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "100px",
  duration: 1500,
  delay: 1000,
};

ScrollReveal().reveal(".hero__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".hero__content h1", {
  ...scrollRevealOption,
  delay: 750,
});
ScrollReveal().reveal(".hero__btn", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".hero__image", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".section__description", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__image", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__image", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1250,
  interval: 600,
});
ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  origin: "left",
  interval: 800,
  distance: "392px",
});

ScrollReveal().reveal(".incubation__grid", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".hero__breadcrumb h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".hero__breadcrumb p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".contact__content", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".contact__img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".contact__form", {
  ...scrollRevealOption,
  origin: "right",
});
