$(function(){/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 사이트 준비중 안내 */
    if(isReal) LAYER('developing');



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 메인 비주얼 */
    var $wrap = $('#visual');

    // 본문
    var $swiperContainer = $wrap.find('.swiper-container');
    var swiper = new Swiper($swiperContainer, {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction : false,
        // },
        speed: 400,
        slidesPerView: 1,
        loop: true,
        loopedSlides: $swiperContainer.find('.swiper-slide').length,
        effect: 'fade',
        navigation: {
            nextEl: $wrap.find('.swiper-button-next'),
            prevEl: $wrap.find('.swiper-button-prev')
        },
        pagination: {
            el: $wrap.find('.swiper-pagination'),
            clickable: true
        },
    });

    // videoLayer
    $wrap.find('.videoLayer').videoLayer();



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 약력 */
    var $wrap = $('#profile');

    // 본문
    var $swiperContainer = $wrap.find('.swiper-container');
    var swiper = new Swiper($swiperContainer, {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction : false,
        // },
        speed: 1000,
        slidesPerView: 1,
        loop: true,
        loopedSlides: $swiperContainer.find('.swiper-slide').length,
        navigation: {
            nextEl: $wrap.find('.swiper-button-next'),
            prevEl: $wrap.find('.swiper-button-prev')
        },
        pagination: {
            el: $wrap.find('.swiper-pagination'),
            clickable: true
        },
        on : {
            slideChangeTransitionStart: function(){
                // animate counter
                $wrap.attr('data-swiper-slide', this.realIndex);

                var $this = $swiperContainer.find('.swiper-slide[data-swiper-slide-index="'+this.realIndex+'"]');
                var $num = $this.find('.num');
                var _countNum = $num.eq(0).text();

                $num.stop().animateNumber({
                    totalPlayTime : 1500,
                    endNumber : _countNum.replace(/[^0-9]/g,''),
                    endValue : _countNum,
                });
            },
        },
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 사용자 편의성 */
    var $wrap = $('#device');

    var objData = [
        {
             "class": "swiper-tablet",
             "bgImg": [
                '/img/main/test1.jpg',
                '/img/main/test2.jpg',
                '/img/main/test3.jpg',
                '/img/main/test4.jpg',
             ]
        },{
            "class": "swiper-pc",
            "bgImg": [
               '/img/main/test1.jpg',
               '/img/main/test2.jpg',
               '/img/main/test3.jpg',
               '/img/main/test4.jpg',
            ]
       },{
            "class": "swiper-mobile",
            "bgImg": [
                '/img/main/test1.jpg',
                '/img/main/test2.jpg',
                '/img/main/test3.jpg',
                '/img/main/test4.jpg',
            ]
        },
    ]
    var $swiper = $wrap.find('.swiper-container');
    var swiper_copied = $swiper.detach();

    objData.forEach(function(info1){
        var $swiper_clone = swiper_copied.clone();
        $swiper_clone.addClass(info1.class);

        var slide_copied = $swiper_clone.find('.swiper-slide').detach();
        info1.bgImg.forEach(function(info2){
            var $slide_clone = slide_copied.clone()
            $slide_clone.find('.slide-inner').css('background-image', 'url('+info2+')');
            $slide_clone.prependTo($swiper_clone.find('.swiper-wrapper'))
        });
        $swiper_clone.prependTo($wrap.find('.inner'));
    });

    var interleaveOffset = 0.5;
    var $swiperTablet = $wrap.find('.swiper-tablet');
    var $swiperPc = $wrap.find('.swiper-pc');
    var $swiperMobile = $wrap.find('.swiper-mobile');
    var swiperOptions = {
        autoplay: {
            delay: 500,
            disableOnInteraction : false,
        },
        speed: 1000,
        grabCursor: true,
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,        
        on: {
            progress: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },
            touchStart: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },
            setTransition: function(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
                }
            }
        }
      };

      var swiperTablet = new Swiper($swiperTablet, swiperOptions);
      var swiperPc = new Swiper($swiperPc, swiperOptions);
      var swiperMobile = new Swiper($swiperMobile, swiperOptions);



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...