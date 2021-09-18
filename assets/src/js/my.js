$(document).ready(function () {

  $('.hamburger, .navigation__mmenu a').on('click', function () {
    $('.hamburger').toggleClass('hamburger--active');
    $('.navigation__mmenu').slideToggle().toggleClass('navigation__mmenu--active');
    return false
  })

  var logoLineSlider = new Swiper(".logo-line__slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".logo-line__slider__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".logo-line__slider__btn_next",
      prevEl: ".logo-line__slider__btn_prev",
    },
  });

  var swiperWrapperValue = new Swiper(".swiper-value", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-value",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-btn-value__next",
      prevEl: ".swiper-btn-value__prev",
    },
    // breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    //   // when window width is >= 640px
    //   640: {
    //     slidesPerView: 4,
    //     spaceBetween: 40
    //   }
    // }
  });

  // слайдер в секции "награды и благодарность"
  var awardsSwiper = new Swiper(".awards__slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".awards__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".awards__btn--next",
      prevEl: ".awards__btn--prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
    }
  });

});
function SliderToggle(id) {

  let action_1 = (id == 'btn-active-one' ? 'add' : 'remove');
  let action_2 = (id == 'btn-active-two' ? 'add' : 'remove');

  //Первый набор элементов
  document.querySelector('#btn-active-one').classList[action_1]('change-partnership-active');
  document.querySelector('#img-active-one').classList[action_1]('ch-img-btn-active');
  document.querySelector('#swiper-active-one').classList[action_2]('swiper-value-active');

  //Второй набор элементов
  document.querySelector('#btn-active-two').classList[action_2]('change-partnership-active');
  document.querySelector('#img-active-two').classList[action_2]('ch-img-btn-active');
  document.querySelector('#swiper-active-two').classList[action_1]('swiper-value-active');
}