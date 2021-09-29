export default class Accordion {
  constructor(accordionList) {
    this.accordionList = document.querySelectorAll(accordionList);
  }

  activeAccordion() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  }

  init() {
    this.accordionList.forEach((list) => {
      list.addEventListener('click', this.activeAccordion);
    });
  }
}
