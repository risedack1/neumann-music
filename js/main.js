

$(function () {
   $('.header__btn').on('click', function(){
    $('.cooperation__menu').toggleClass('active');
   });

   $('.form__btn, .cross').on('click', function(){
    $('.cooperation__menu, body').removeClass('active');
   });


   $('.about__btn').on('click', function(){
      $('.about-us').toggleClass('active-about');
     });
  
     $('.cross-about').on('click', function(){
      $('.about-us').removeClass('active-about');
     });

     $('.burger').on('click', function(){
      $('.header__inner').toggleClass('active-menu');
     });

     $('.header__menu-item, .header__cross-menu ').on('click', function(){
      $('.header__inner').removeClass('active-menu');
     });
     

     

  



 
   $(document).mouseup(function (e){ 
		var div = $("#nav"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
            $('.cooperation__menu').removeClass('active'); 
		}
	});

   $(".button").click(function() {
      $('.toggled_block').toggle();
    });

   $(document).ready(function () {
      $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
      });
      $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
      });
      });

      $(document).ready(function(){
         $("a").on('click', function(event) {
           if (this.hash !== "") {
             event.preventDefault();
             var hash = this.hash;
             $('html, body').animate({
               scrollTop: $(hash).offset().top
             }, 800, function(){
               window.location.hash = hash;
             });
           }
         });
       });

       $ ('.sliderbar').slick({
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 3,
         centerMode: true,
         centerPadding: '0px',
         rows: 2,
         responsive: [
            {
              breakpoint: 848,
              settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               rows: 2,
              }
            },
            {
               breakpoint: 607,
               settings: {
                slidesToShow: 1,
                rows: 1,
                centerMode: true,
                centerPadding: '0px',
               }
             },
            
          ]
       });
})





const player = document.querySelector('.example__box-player'),
playBtn = document.querySelector('.example__box-player__img'),
audio = document.querySelector('.audio'),
progressContainer = document.querySelector('.progress__container'),
progress = document.querySelector('.progress'),
imgSrc = document.querySelector('.img__src')




function updateProgress(e) {
   const {duration, currentTime} = e.srcElement
   const progressPercent = (currentTime / duration) * 100
   progress.style.width = `${progressPercent}%` 
}
audio.addEventListener('timeupdate', updateProgress)

function playSong() {
   player.classList.add('play')
   imgSrc.src = "../images/pause.png"
   audio.play()
}

function pauseSong() {
   player.classList.remove('play')
   imgSrc.src = '../images/play.png'
   audio.pause()
}

playBtn.addEventListener('click', () =>{
   const isPlaying = player.classList.contains('play')
   if (isPlaying) {
      pauseSong()
   } else {
      playSong()
   }
})

function setProgress (e) {
   const width = this.clientWidth
   const clickX = e.offsetX
   const duration = audio.duration
   audio.currentTime = (clickX / width) * duration
}
progressContainer.addEventListener('click', setProgress)



let btn = document.querySelector('.footer__arrow')
//
function magic() {
  if (window.pageYOffset > 20) {
    btn.style.opacity = '1'
  } else { btn.style.opacity = '0' }
}
//
btn.onclick = function () {
	window.scrollTo(0,0)
}

// When scrolling, we run the function
window.onscroll = magic


$(function() {  
   $("body").niceScroll({
      mousescrollstep: 19,
      zindex: "1"
   });
});