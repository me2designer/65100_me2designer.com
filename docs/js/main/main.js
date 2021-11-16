var ProjectPage = 0;


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
    var swiperType = ['pc', 'tablet', 'mobile']
    var listThumb = ['peoplelife', 'mkbiz','peoplelife','mkbiz','peoplelife','mkbiz','peoplelife']
    var $swiper = $wrap.find('.swiper-container');
    var swiper_copied = $swiper.detach();

    swiperType.forEach(function(type){
        var $swiper_clone = swiper_copied.clone();
        $swiper_clone.addClass('swiper-'+type+'');

        var slide_copied = $swiper_clone.find('.swiper-slide').detach();
        listThumb.forEach(function(fileName){
            var $slide_clone = slide_copied.clone()
            $slide_clone.find('.slide-inner').css('background-image', 'url(/img/main/device_thumb/'+type+'/'+fileName+'.jpg)');
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
            delay: 3000,
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



    /* 프로젝트 - 태그(tag) 불러오기 */
    getProjectList({
        callback: function(listAll) {
            var $wrap = $('#project');
            var $list = $wrap.find('.list_tag');
            var btn_copied = $list.find('.btn_tag').detach();

            // tag 배열 합치기
            var concatTag = [];
            filterList(listAll, function(info){
                concatTag = concatTag.concat(info.tag);
            });

            // tag 중복된 배열 제거
            var filterTag = concatTag.filter(function(info, idx){
                return concatTag.indexOf(info) === idx;
            });

            // append
            filterTag.forEach(function(info, idx, arr) {
                var btn_clone = btn_copied.clone();
                btn_clone.html('<span>'+info+'</span>');
                btn_clone.appendTo($list);
            });

            // click event
            $list.find('.btn_tag').on('click', function(){
                $(this).toggleClass('on');

                // list 초기화
                ProjectPage = 0;
                $wrap.find('.item_project').remove();
                if ($list.find('.btn_tag.on').length) $wrap.find('.btn_more').trigger('click');
            });
        }
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 프로젝트 - 목록 불러오기 */
    getProjectList({
        callback: function(listAll) {
            var $wrap = $('#project');
            var $list = $wrap.find('.list_project');
            var item_copied = $list.find('.item_project').detach();
            var $btnMore = $wrap.find('.btn_more');

            function appendList(list, idx) {
                var list_divi = list.arrDivision(6);

                // append
                list_divi[idx].forEach(function(info) {
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
                if (idx >= list_divi.length - 1) {
                    $btnMore.hide();
                } else {
                    $btnMore.show();
                }
            }

            // .btn_more click event
            $btnMore.on('click', function() {
                // 1. 선택된 태그의 keyword 저장
                var ProjectTag = []

                var getTag = $wrap.find('.list_tag .btn_tag.on').get();
                getTag.forEach(function(info){
                    var thisTag = $(info).find('span').text();
                    ProjectTag.push(thisTag);
                });

                // 2. 저장된 태그 keyword 가지고 있는 listAll > item.index() 가져오기
                var filterListIdx = []

                ProjectTag.forEach(function(activeTag){
                    filterList(listAll, function(item, idx){
                        var activeIdx;
                        item.tag.filter(function(itemTag) {
                            if(itemTag == activeTag) activeIdx = idx;
                        });

                        if (idx == activeIdx) filterListIdx.push(idx);
                    });
                });

                // 3. 가져온 item.index()에서 중복된 item.index() 제거
                var filterIdx = filterListIdx.filter(function(info, idx){
                    return filterListIdx.indexOf(info) === idx;
                }).sort(function(a, b){
                    return a - b; //배열정렬
                });


                // 4. filter된 item.index()의 item 정보 가져오기
                var activeTagList = []

                filterIdx.forEach(function(info){
                    filterList(listAll, function(item, idx){
                        if(idx == info) activeTagList.push(item);
                    })
                });

                appendList(activeTagList, ProjectPage)
                ProjectPage++
            });
        }
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 프로젝트 - 처음 불러오기 */
    getProjectList({
        callback: function(listAll) {
            var keyword = ['기업홈페이지', 'TM영업'];
            var $wrap = $('#project');
            var $btnMore = $wrap.find('.btn_more');

            keyword.forEach(function(info){
                $wrap.find('.list_tag :contains("'+info+'")').closest('.btn_tag').addClass('on')
            });

            $btnMore.trigger('click');
        }
    });



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

        setTimeout(function() {
            var keyword = ['반응형', '적응형'];
            var $project = $('#project')
            var $listTag = $project.find('.list_tag');
            var $btnMore = $project.find('.btn_more');

            // list 초기화
            ProjectPage = 0;
            $project.find('.item_project').remove();

            // tag 초기화 및 선택
            $listTag.find('.btn_tag.on').removeClass('on');
            keyword.forEach(function(info){
                $listTag.find(':contains("'+info+'")').closest('.btn_tag').addClass('on')
            });

            $btnMore.trigger('click');
        }, 400);
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



    /* 경력개발 - 탭메뉴 */
    var $wrap = $('#professional')

    //line animate
    var $make = $wrap.find('#theMask')
    var $loop = $wrap.find('#maskReveal')
    var $lineList = [];

    for (var i = 1; i < $make.find('line').length + 1; i++) {        
        $lineList.push($make.find('.line'+i+''));
    }
    
    var tl = new TimelineMax();
    TweenMax.set($make.find('path, line'), {strokeDasharray:400, strokeDashoffset:400});

    tl.addLabel("span", 0)
        .to($lineList, 0.5, {ease:Power0.easeNone, strokeDashoffset:0}, "span")
        .to($loop.find('path, line'), 10, {ease:Power0.easeNone, strokeDashoffset:-400, repeat:-1}, "loop");
    tl.restart();




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
        $slide_clone.find('.postion').text(info.postion);
        $slide_clone.find('.list_job .tit').text(info.title);

        var period = $slide_clone.find('.period').text(info.period);
        period.html(function(i, text) {
            return text.replace('재직중', '<strong class="color-primary">재직중</strong>');
        });


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