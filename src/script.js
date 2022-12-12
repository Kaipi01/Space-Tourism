import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const menuSwitchBtn = document.querySelector(".nav__menu-btn");
const destinationNavBtns = document.querySelectorAll(".destination__nav-btn");
const menu = document.querySelector(".nav__menu");
const menuLinks = document.querySelectorAll(".nav__menu-link");
const swiper = new Swiper(".swiper", {
  loop: false,
  speed: 1000,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

removeAddMenuTabindex();

menuSwitchBtn.addEventListener("click", openCloseMenu);

destinationNavBtns.forEach((btn) => {
  setFirstSlideBtnActive(btn);

  btn.addEventListener("click", () => {
    changeSlide(btn);
  });
});

window.addEventListener("resize", removeAddMenuTabindex);

function openCloseMenu() {
  const menuSwitchBtnIcons = document.querySelectorAll(".nav__menu-btn-icon");
  menu.classList.toggle("nav__menu--open");
  menuSwitchBtnIcons.forEach((icon) => {
    icon.classList.toggle("nav__menu-btn-icon--hide");
  });

  removeAddMenuTabindex();
}

function changeSlide(btn) {
  destinationNavBtns.forEach((btn) =>
    btn.classList.remove("destination__nav-btn--active")
  );
  swiper.slideTo(btn.dataset.slide, 1000);
  btn.classList.add("destination__nav-btn--active");
}

function setFirstSlideBtnActive(btn) {
  if (btn.dataset.slide === "0") {
    btn.classList.add("destination__nav-btn--active");
  }
}

function removeAddMenuTabindex() {
  menuLinks.forEach((link) => {
    if (
      menu.classList.contains("nav__menu--open") ||
      window.innerWidth >= 650
    ) {
      link.removeAttribute("tabindex", "-1");
    } else {
      link.setAttribute("tabindex", "-1");
    }
  });
}
