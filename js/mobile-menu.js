
(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header-open-btn"),
    closeMenuBtn: document.querySelector(".mob-close-btn"),
    menu: document.querySelector(".mob"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();