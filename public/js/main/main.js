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

    // swiper
    var $swiper = $wrap.find('.swiper-container');
    var swiper = new Swiper($swiper, {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction : false,
        // },
        speed: 400,
        slidesPerView: 1,
        loop: true,
        loopedSlides: $swiper.find('.swiper-slide').length,
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

    // swiper
    var $swiper = $wrap.find('.swiper-container');
    var swiper = new Swiper($swiper, {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction : false,
        // },
        speed: 1000,
        slidesPerView: 1,
        loop: true,
        loopedSlides: $swiper.find('.swiper-slide').length,
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

                var $this = $swiper.find('.swiper-slide[data-swiper-slide-index="'+this.realIndex+'"]');
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



    /* 사용자 편의성 - DOM 생성 */
    var $wrap = $('#device');
    var infoList = [
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

    infoList.forEach(function(info1){
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



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 사용자 편의성 - swiper */
    var $wrap = $('#device');
    var interleaveOffset = 0.5;
    var $swiperTablet = $wrap.find('.swiper-tablet');
    var $swiperPc = $wrap.find('.swiper-pc');
    var $swiperMobile = $wrap.find('.swiper-mobile');
    var swiperOptions = {
        autoplay: {
            delay: 500,
            disableOnInteraction : false,
        },
        loop: true,
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

    // swiper 실행
    var swiperTablet = new Swiper($swiperTablet, swiperOptions);
    var swiperPc = new Swiper($swiperPc, swiperOptions);
    var swiperMobile = new Swiper($swiperMobile, swiperOptions);

    // swiper stop
    swiperTablet.autoplay.stop();
    swiperPc.autoplay.stop();
    swiperMobile.autoplay.stop();

    // swiper sync
    swiperPc.controller.control = [swiperMobile]
    swiperMobile.controller.control = [swiperTablet]

    // swiper play
    swiperPc.autoplay.start();



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){








    /* 프로젝트 - DOM 생성 */
    getProjectList({
        callback: function(infoList) {
            var $wrap = $('#project')
            var $list = $wrap.find('.list_project');
            var item_copied = $list.find('.item_project').detach();
            var $btnMore = $wrap.find('.btn_more');

            function appendList(idx) {
                var arrList = infoList.arrDivision(6);

                // aappend
                arrList[idx].forEach(function(info) {
                    var item_clone = item_copied.clone();
                    item_clone.find('.box_thumb img').attr({
                        'src': '/img/main/project_thumb/'+info.thumb+'',
                        'alt': info.title
                    });
                    item_clone.find('.tit').text(info.title);
                    item_clone.find('.desc').text(info.description);
    
                    for (var i = 0; i < info.tag.length && i < 5; i++) {
                        item_clone.find('.tag').append('<span>'+info.tag[i]+'</span>');
                    }
                    item_clone.appendTo($list);
                });
                
                // button hide()
                console.log(idx);
                if (idx >= arrList.length - 1) {
                    $btnMore.hide();
                } else {
                    $btnMore.show();
                }
            }

            var infoListidx = 0
            
            $btnMore.on('click', function() {
                appendList(infoListidx)
                infoListidx++
            }).trigger('click');            
        }
    })



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 사용자 편의성 - 적응형, 반응형 프로젝트 보기 */
    var $wrap = $('#device');
    var $btnSrh = $wrap.find('.btn_search');

    $btnSrh.on('click', function(){
        moveTo({
            top: 150,
            target: $('#project .list_tag'),
        });
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 경력개발 - 탭메뉴 */
    var $wrap = $('#professional');

    $wrap.find('.tab-btn').on('click', function(){
        var idx = $(this).index();

        // 탭버튼 활성화
        $wrap.find('.tab-btn').removeClass('tab-btn-active').eq(idx).addClass('tab-btn-active');

        // 탭슬라이드 활성화
        $wrap.find('.tab-slide').hide().removeClass('tab-slide-active').eq(idx).show().addClass('tab-slide-active');
    }).eq(0).trigger('click');



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 근무이력 - DOM 생성 */
    var $wrap = $('#career');
    var infoList = getCareerList();
    var $swiper = $wrap.find('.swiper-container');
    var slide_copied = $swiper.find('.swiper-slide').detach();

    infoList.forEach(function(info){
        var $slide_clone = slide_copied.clone();
        $slide_clone.find('.logo').attr({
            'src': '/img/common/ci/'+info.logo+'',
            'alt': info.name
        });
        $slide_clone.find('.name').text(info.name);
        $slide_clone.find('.period').text(info.period);
        $slide_clone.find('.postion').text(info.postion);
        $slide_clone.find('.list_job .tit').text(info.title);

        for (var i = 0; i < info.job.length && i < 5; i++) {
            $slide_clone.find('.list_job').append('<dd class="desc">'+info.job[i]+'</dd>');
        }
        $slide_clone.appendTo($swiper.find('.swiper-wrapper'));
    });





})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 근무이력 - swiper */
    var $wrap = $('#career');

    // swiper
    var $swiper = $wrap.find('.swiper-container');
    var swiper = new Swiper($swiper, {
        autoplay: {
            delay: 1,
            disableOnInteraction : false,
        },
        speed: 20000,
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        loopedSlides: $swiper.find('.swiper-slide').length,
        // navigation: {
        //     nextEl: $wrap.find('.swiper-button-next'),
        //     prevEl: $wrap.find('.swiper-button-prev')
        // },
        pagination: {
            el: $wrap.find('.swiper-pagination'),
            clickable: true
        },
    });

    // swiper 위치 초기화
    swiper.autoplay.stop();
    scrollAction({
        target: $wrap,
        top: 100,
        scrollDownAction : function(){
            // 스크롤 DOWN 액션
            swiper.autoplay.start();
        },
        scrollUpAction : function(){
            // 스크롤 UP 액션
            swiper.slideTo($swiper.find('.swiper-slide[data-swiper-slide-index="0"]').index(), 0, false);
            swiper.autoplay.stop();
        }
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...