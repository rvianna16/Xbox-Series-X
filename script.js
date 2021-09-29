import MenuMobile from './modules/menu-mobile.js';
import Accordion from './modules/accordion.js';

const menu = new MenuMobile('btn-mobile', 'nav');
menu.init();

const faq = new Accordion('.questions__list dt');
faq.init();

const translateImg = () => {
  const controlContainer = document.querySelector('.control__grid');
  const windowTop = window.pageYOffset;
  const imgCrop = controlContainer.querySelector('[data-image="crop"]');
  const topSize = imgCrop.getBoundingClientRect().top / 16.8;

  if (topSize > 37) {
    topSize = 37;
  }

  if (windowTop > 3016 && windowTop < 4600) {
    imgCrop.style.transform = `  translate3d(-${topSize + 8}%, 0px, 0px)`;
  }
};

document.addEventListener('scroll', translateImg);
