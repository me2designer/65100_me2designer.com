$(function(){/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){

    console.log('a');

    /* 메인 비주얼 */
    var $wrap = $('#visual');

    // 본문
    var $swiperContainer = $wrap.find('.swiper-container');
    var swiper = new Swiper($swiperContainer, {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction : false,
        // },
        slidesPerView: 1,
        speed: 400,
        loop: true,
        effect: 'fade',
        navigation: {
            nextEl: $wrap.find('.swiper-button-next'),
            prevEl: $wrap.find('.swiper-button-prev')
        },
        pagination: {
            el: $wrap.find('.swiper-pagination'),
            clickable: true
        }
    });




})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...