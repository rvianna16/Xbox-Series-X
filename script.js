import MenuMobile from './modules/menu-mobile.js';

const menu = new MenuMobile('btn-mobile', 'nav');
menu.init();

const translateImg = () => {
  const controlContainer = document.querySelector('.console__control__grid');
  const windowTop = window.pageYOffset;
  const imgCrop = controlContainer.querySelector('[data-image="crop"]');
  const topSize = imgCrop.getBoundingClientRect().top / 16.8;

  if (windowTop > 3016 && windowTop < 4600) {
    imgCrop.style.transform = `  translate3d(-${topSize + 15}%, 0px, 0px)`;
  }
};

document.addEventListener('scroll', translateImg);
