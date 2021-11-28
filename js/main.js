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

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
   animationTime = 300,
   framesCount = 20;

anchors.forEach(function (item) {
   // каждому якорю присваиваем обработчик события
   item.addEventListener('click', function (e) {
      // убираем стандартное поведение
      e.preventDefault();

      // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

      // запускаем интервал, в котором
      let scroller = setInterval(function () {
         // считаем на сколько скроллить за 1 такт
         let scrollBy = coordY / framesCount;

         // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
         // и дно страницы не достигнуто
         if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
            // то скроллим на к-во пикселей, которое соответствует одному такту
            window.scrollBy(0, scrollBy);
         } else {
            // иначе добираемся до элемента и выходим из интервала
            window.scrollTo(0, coordY);
            clearInterval(scroller);
         }
         // время интервала равняется частному от времени анимации и к-ва кадров
      }, animationTime / framesCount);
   });
});