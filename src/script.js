const menuSwitchBtn = document.querySelector(".nav__menu-btn");

menuSwitchBtn.addEventListener("click", () => {
  const menu = document.querySelector(".nav__menu");
  //const menuLinks = document.querySelectorAll(".nav__menu-link");
  const menuSwitchBtnIcons = document.querySelectorAll(".nav__menu-btn-icon");
  
  menu.classList.toggle("nav__menu--open");
  menuSwitchBtnIcons.forEach(icon => {
    icon.classList.toggle("nav__menu-btn-icon--hide");
  });
//   menuLinks.forEach(link => {
//     if (menu.classList.contains('nav__menu--open')) {
//         link.removeAttribute('tabindex', '-1');
//     } else {
//         link.setAttribute('tabindex', '-1');
//     }
//   });
});
