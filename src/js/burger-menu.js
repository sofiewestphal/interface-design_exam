var burgerMenu = {
  el: {},
  open: function() {
    burgerMenu.el.navBarContainer.classList.add("burger-menu-active");
  },
  close: function() {
    burgerMenu.el.navBarContainer.classList.remove("burger-menu-active");
  },
  init: function() {
    burgerMenu.el.navBarContainer = document.querySelector(".nav-bar");
    burgerMenu.el.btnToggleOpen = document.querySelector(
      ".burger-menu-toggle.open"
    );
    burgerMenu.el.btnToggleClose = document.querySelector(
      ".burger-menu-toggle.close"
    );
    burgerMenu.el.btnToggleOpen.addEventListener("click", burgerMenu.open);
    burgerMenu.el.btnToggleClose.addEventListener("click", burgerMenu.close);
  }
};
window.addEventListener("DOMContentLoaded", burgerMenu.init);
