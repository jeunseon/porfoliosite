// banner swiper slide
var swiper = new Swiper(".bannerSwiper", {
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false, /* 터치 이후에도 슬라이드 되도록 */
    },
    pagination: {
      el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".section2-swiper", {
    slidesPerView: 1,
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false, /* 터치 이후에도 슬라이드 되도록 */
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".section3-swiper", {
    slidesPerView: 1,
    loop:true,
    disableOnInteraction: false, /* 터치 이후에도 슬라이드 되도록 */
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".section4-swiper", {
    slidesPerView: 1,
    disableOnInteraction: false, /* 터치 이후에도 슬라이드 되도록 */
    spaceBetween: 40,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".section6-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});