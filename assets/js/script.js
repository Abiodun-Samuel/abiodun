!(function ($) {
  ("use strict");
})(jQuery);

const burger = document.querySelector(".burger");
const navmenu = document.querySelector(".navbar-nav");
const burgerborder = document.querySelector(".burger");

// toggle nav
burger.addEventListener("click", () => {
  navmenu.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
  burgerborder.classList.toggle("burg");
});

// ========== Navbar scroll effects ==========
window.onscroll = function () {
  myFunction();
};
var nav = document.getElementById("navie");
var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

//  hero section slider
var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: { delay: 400 },
  speed: 1000,
});

gsap.registerPlugin(ScrollTrigger);
gsap.to(".btn-head", {
  x: 140,
  duration: 1,
  scrollTrigger: {
    trigger: "body",
    start: "top  center",
    end: "bottom  center",
    markers: true,
  },
});
