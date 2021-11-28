document.addEventListener('DOMContentLoaded', () => {
   const burgerButton = document.querySelector('.burger');
   const closeButton = document.querySelector('.header__cross-menu');
   const menu = document.querySelector('.header__inner');
   const feetBackButton = document.querySelector('.header__btn-cooperation');
   const feetBackClose = document.querySelector('.cooperation__close');
   const feetBackForm = document.querySelector('.cooperation__menu');
   const aboutBtn = document.querySelector('.about__btn-link');
   const aboutUs = document.querySelector('.about-us');
   const aboutClose = document.querySelector('.cross-about');

   window.addEventListener('scroll', () => {
      const topButton = document.querySelector('.footer__arrow');
      let headerHeight = document.querySelector('.header').offsetHeight / 2;
      let scrollHeight = window.scrollY;

      if (headerHeight < scrollHeight) {
         topButton.classList.add('active');
         menu.classList.remove('active-menu');
      } else {
         topButton.classList.remove('active');
      }
   });

   aboutBtn.addEventListener('click', () => {
      aboutUs.classList.add('active-about');
   });

   aboutClose.addEventListener('click', () => {
      aboutUs.classList.remove('active-about');
   });

   const toggleMenu = function () {
      feetBackForm.classList.toggle('active');
   };

   feetBackClose.addEventListener('click', function () {
      toggleMenu();
   });

   feetBackButton.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMenu();
   });

   document.addEventListener('click', function (e) {
      const target = e.target;
      const its_feetBackForm = target == feetBackForm || feetBackForm.contains(target);
      const its_feetBackButton = target == feetBackButton;
      const feetBack_is_active = feetBackForm.classList.contains('active');

      if (!its_feetBackForm && !its_feetBackButton && feetBack_is_active) {
         toggleMenu();
      }
   });

   burgerButton.addEventListener('click', () => {
      menu.classList.add('active-menu');
   });

   closeButton.addEventListener('click', () => {
      menu.classList.remove('active-menu');
   });
});

new fullpage('#fullpage', {
   //options here
   autoScrolling: false,
   scrollHorizontally: false,
   autoScrolling: false,
   responsiveWidth: 767,
});

fullpage_api.setFitToSection(true);
fullpage_api.setScrollingSpeed(700);



const swiper = new Swiper('.box__inner', {
   slidesPerView: 1,
   grid: {
      rows: 1,
   },

   navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
   },

   breakpoints: {
      1600: {
         slidesPerView: 3,
         grid: {
            rows: 2,
         },
         spaceBetween: 20,
      },

      768: {
         slidesPerView: 4,
         grid: {
            rows: 2,
         },
         spaceBetween: 20,
      }
   },
});

const sliderSecondMain = document.querySelectorAll('.slider-main');
const sliderSecondInner = document.querySelectorAll('.slider-wrapper');
const sliderSecondSlide = document.querySelectorAll('.slider-slide');

function secondSlider() {
   sliderSecondMain.forEach(el => {
      el.classList.add('swiper');
   });
   sliderSecondInner.forEach(el => {
      el.classList.add('swiper-wrapper');
   });

   sliderSecondSlide.forEach(el => {
      el.classList.add('swiper-slide');
   });
}

function slideCheck() {
   let innerWidth = window.innerWidth;
   if (innerWidth > 767) {

   } else {
      secondSlider();
      const swiperSecond = new Swiper('.slider-main', {
         slidesPerView: 1,

         navigation: {
            nextEl: '.slider-second-button-next',
            prevEl: '.slider-second-button-prev',
         },
      });
   }
}
slideCheck();

Calamansi.autoload();

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
   let vh = window.innerHeight * 0.01;
   document.documentElement.style.setProperty('--vh', `${vh}px`);
   slideCheck();
});

var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
   V = 0.3; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
   linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
      e.preventDefault(); //отменяем стандартное поведение
      var w = window.pageYOffset, // производим прокрутка прокрутка
         hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
      t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
         start = null;
      requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
      function step(time) {
         if (start === null) start = time;
         var progress = time - start,
            r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
         window.scrollTo(0, r);
         if (r != w + t) {
            requestAnimationFrame(step)
         } else {
            location.hash = hash // URL с хэшем
         }
      }
   }, false);
}