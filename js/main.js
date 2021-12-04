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
        document.querySelector('body').classList.add('_lock');
    });

    aboutClose.addEventListener('click', () => {
        aboutUs.classList.remove('active-about');
        document.querySelector('body').classList.remove('_lock');
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


const swiper = new Swiper('.box__inner', {
    slidesPerView: 1,
    grid: {
        rows: 1,
        fill: 'row',
    },

    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },

    pagination: {
        el: '.box__inner-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
    },

    breakpoints: {
        1600: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
                rows: 2,
                fill: 'row',
            },
            spaceBetween: 20,

            pagination: {
                dynamicBullets: false,
            },
        },

        768: {
            slidesPerView: 4,
            grid: {
                rows: 2,
                fill: 'row',
            },
            spaceBetween: 20,

            pagination: {
                dynamicBullets: false,
            },
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
        const swiperSecond = new Swiper('.slider-main--first', {
            slidesPerView: 1,

            pagination: {
                el: '.slider-main-pagination',
                clickable: true,
            },
        });

        const swiperThird = new Swiper('.slider-main--second', {
            slidesPerView: 1,

            pagination: {
                el: '.slider-third-main-pagination',
                clickable: true,
            },
        });
    }
}
slideCheck();


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(function () {

    $('.header__menu a, .footer__arrow a, .about__arrow a').on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });


    //E-mail Ajax Send
    $(".cooperation__form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});

Calamansi.autoload();



// Fancybox.defaults.dragToClose = false;

// Fancybox.bind("[data-fancybox]", {
//     infinite: false,
//     template: {
//         closeButton: '<div class="calamansi" data-skin="skins/basic" data-source="images/close-popup.mp3"></div>',
//     }
// });