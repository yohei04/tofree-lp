// ナビバー 

function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function () {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function () {
    body.classList.remove('nav-open');
  });
}
toggleNav();


// スライダー

var mySwiper = new Swiper('.swiper-container', {
  spaceBetween: 24.5,
  slidesPerView: 2,
  // centeredSlides: true,
  // slideToClickedSlide: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});




$(function () {

  // Q&A
  $('.qa-item').click(function () {

    //クリックされた.qa-itemの中の.qa-questionに隣接する.qa-answer要素が開いたり閉じたりする。
    $(this).find('.minus').toggle();
    $(this).find('.plus').toggle();
    $(this).find('.qa-answer').slideToggle();
    $('.qa-answer').not($(this).find('.qa-answer')).slideUp();

  });

});