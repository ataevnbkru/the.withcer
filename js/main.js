var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.arrow',
  },
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
    
      540: {
        slidesPerView: 2,
      }
    }
});

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active')  
})