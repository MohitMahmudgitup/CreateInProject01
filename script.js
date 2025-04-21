const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    autoplay: {
        delay: 3000, // 3 seconds
        disableOnInteraction: false, // keep autoplay after user swipes
      },
    speed: 600,
  });
  
  var swipers = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });