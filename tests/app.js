$(document).ready(function () {
  //change navbar when scrolling
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".nav").css("background", "#FFF");
      $(".nav").css("box-shadow", "0 4px 12px rgba(0, 0, 0, 0.1)");
    } else {
      $(".nav").css("background", "transparent");
      $(".nav").css("box-shadow", "none");
    }
  });

  // Mobile Navbar

  const mobile = document.querySelector(".burger-btn");
  const mobileLink = document.querySelector(".nav-menus");
  mobile.addEventListener("click", function () {
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
  });

  // close menu when click

  mobileLink.addEventListener("click", function () {
    const menuBars = document.querySelector(".is-active");
    if (window.innerWidth <= 768 && menuBars) {
      mobile.classList.toggle("is-active");
      mobileLink.classList.remove("active");
    }
  });

  // heart
  $(".heart").on("click", function () {
    $(this).toggleClass("is-active");
  });

  //   filter
  var mixer = mixitup(".product-list", {
    selectors: {
      target: ".product-card",
    },
    animation: {
      duration: 700,
    },
  });

  // swiper

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
});
