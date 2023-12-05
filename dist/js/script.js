// Navbar Fixed
// window.onscroll = function () {
//   const header = document.querySelector("header");
//   const fixedNav = header.offsetTop;

//   if (window.pageYOffset > fixedNav) {
//     header.classList.add("navbar-fixed");
//   } else {
//     header.classList.remove("navbar-fixed");
//   }
// };

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

// const menuOpenBtn = document.querySelector(".menu-open-btn");
// const menuCloseBtn = document.querySelector(".menu-close-btn");
// const offcanvasMenu = document.querySelector(".offcanvas-menu");

// menuCloseBtn.addEventListener("click", function () {
//   offcanvasMenu.classList.remove("translate-x-0");
//   offcanvasMenu.classList.add("translate-x-full");
// });

// menuOpenBtn.addEventListener("click", function () {
//   offcanvasMenu.classList.remove("translate-x-full");
//   offcanvasMenu.classList.add("translate-x-0");
// });

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  // navMenu.classList.toggle("hidden");
});
