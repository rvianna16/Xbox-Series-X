export default class MenuMobile {

  constructor(btnMobile, nav) {
    this.btnMobile = document.getElementById(btnMobile);
    this.nav = document.getElementById(nav);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.scrollOutMenu = this.scrollOutMenu.bind(this);
  } 

  toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();    
   
    this.nav.classList.toggle("active");

    const isActive = this.nav.classList.contains("active");

    this.btnMobile.setAttribute("aria-expanded", isActive);

    if (isActive) {
      this.btnMobile.setAttribute("aria-label", "Fechar menu");
      document.addEventListener("scroll", this.scrollOutMenu);
    } else {
      this.btnMobile.setAttribute("aria-label", "Abrir menu");
      document.removeEventListener("scroll", this.scrollOutMenu);
    }
  }

  scrollOutMenu(e) {
    if (this.nav.getBoundingClientRect().top < -300) {
      this.toggleMenu(e);
    }
  }

  init() {   
    this.btnMobile.addEventListener('click', this.toggleMenu);
    this.btnMobile.addEventListener('touchstart', this.toggleMenu);

  }}