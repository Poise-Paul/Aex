$(document).ready(function () {
  var basicTimeline = anime.timeline(),
    doneTimeline = anime.timeline();
  var trigger = true;

  $("form .btns").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("first")) {
      trigger = false;
      $(this).removeClass("first").addClass("active");
      basicTimeline
        .add({
          targets: ".btns",
          width: 65,
          paddingLeft: 17,
          paddingRight: 17,
          translateX: 97,
          scale: 1.2,
          duration: 1500,
        })
        .add({
          targets: ".send-track-form input",
          width: 370,
          opacity: 1,
          duration: 2000,
          offset: "-=1500",
        })
        .add({
          targets: ".send-track-form button img",
          opacity: 1,
          translateX: 15,
          duration: 2000,
          offset: "-=1700",
          complete: function (anim) {
            trigger = true;
          },
        });
    } else if ($(this).hasClass("active") && trigger) {
      $(this).removeClass("active").addClass("done");
      doneTimeline
        .add({
          targets: ".btns",
          translateX: 180,
          duration: 1500,
          scale: 1.2,
        })
        .add({
          targets: ".btns img",
          opacity: 0,
          duration: 1000,
          offset: "-=1200",
        })
        .add({
          targets: ".btns",
          width: 187,
          scale: 1.2,
          translateX: -23,
          duration: 1500,
          offset: "-=1000",
        })
        .add({
          targets: ".send-track-form input",
          width: 0,
          translateX: -193,
          duration: 1500,
          offset: "-=1500",
        })
        .add({
          targets: ".send-track-form button .done",
          opacity: 1,
          duration: 1000,
          offset: "-=1500",
        });
      S;
    }
  });
});

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Toggle .navbar-reduce
   */
  let selectHNavbar = select(".navbar-default");
  if (selectHNavbar) {
    onscroll(document, () => {
      if (window.scrollY > 100) {
        selectHNavbar.classList.add("navbar-reduce");
        selectHNavbar.classList.remove("navbar-trans");
      } else {
        selectHNavbar.classList.remove("navbar-reduce");
        selectHNavbar.classList.add("navbar-trans");
      }
    });
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Search window open/close
   */
  let body = select("body");
  on("click", ".navbar-toggle-box", function (e) {
    e.preventDefault();
    body.classList.add("box-collapse-open");
    body.classList.remove("box-collapse-closed");
  });

  on("click", ".close-box-collapse", function (e) {
    e.preventDefault();
    body.classList.remove("box-collapse-open");
    body.classList.add("box-collapse-closed");
  });

  /**
   * Intro Carousel
   */
  new Swiper(".intro-carousel", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Property carousel
   */
  new Swiper("#property-carousel", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".propery-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * News carousel
   */
  new Swiper("#news-carousel", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".news-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Testimonial carousel
   */
  new Swiper("#testimonial-carousel", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".testimonial-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Property Single carousel
   */
  new Swiper("#property-single-carousel", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".property-single-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
  });
})();
