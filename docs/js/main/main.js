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
    var slide_length = $swiper.find('.swiper-slide').length;
    var $progress = $wrap.find('.progress_bar');
    var swiper = new Swiper($swiper, {
        autoplay: {
            delay: 4000,
            disableOnInteraction : false,
        },
        speed: 1500,
        slidesPerView: 1,
        loop: true,
        loopedSlides: slide_length,
        effect: 'fade',
        lazy: true,
        lazy: {
            loadPrevNext: true,
            loadOnTransitionStart: true
        },
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
                var $active = $swiper.find('.swiper-slide[data-swiper-slide-index="'+this.realIndex+'"]');
                var $next = $swiper.find('.swiper-slide').not('.swiper-slide-duplicate-prev, .swiper-slide-prev');

                //bacground-image animate
                TweenMax.set($next.find('.bg'), {scale:1});
                TweenMax.to($active.find('.bg'), 6, {ease:Linear.easeNone, scale:1.15});

                //progress bar
                $progress.removeClass(function(){
                    setTimeout(function() {
                        $progress.addClass('is-active');
                    }, 300);
                    return 'is-active';
                });
            },
        },
    });

    // videoLayer
    if (isReal) {
        $wrap.find('.videoLayer').on('click', function() {
            LAYER({
                name : 'alert',
                text : '현재 제작 중 입니다.'
            })
        });
    } else {
        $wrap.find('.videoLayer').videoLayer();
    }





})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 성장과정 */
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
                var $num = $this.find('.count').get();
                var $mark = $this.find('.desc mark').removeClass('is-textMark');

                var Y = true
                $num.forEach(function(each){
                    var $each = $(each);
                    var _countNum = $each.text();

                    var endNumber = '';
                    for (var i = 0; i < _countNum.length; i++){
                        endNumber = endNumber + '9'
                    }

                    $each.stop().animateNumber({
                        addComma : false,
                        addZero : 2,
                        totalPlayTime : 800,
                        endNumber : endNumber,
                        endValue : _countNum,
                        callback : function(){
                            if (Y) $mark.addClass('is-textMark');
                            Y = false;
                        }
                    });
                });
            },
        },
    });

    // 나이계산기
    // var today = new Date();
    // var birthDate = new Date(1983, 2, 1);
    // var age = today.getFullYear() - birthDate.getFullYear() + 1;

    // $wrap.find('.age').text(age);



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 프로젝트 - 태그(tag) 불러오기 */
    getProjectList({
        callback: function(listAll) {
            var $wrap = $('#project');

             // tag 배열 합치기
            var concat_tag = [];
            filterList(listAll, function(info){
                concat_tag = concat_tag.concat(info.corp, info.tag, info.workRole);
            });

            // tag 중복된 배열 제거
            var filter_tag = concat_tag.filter(function(info, idx){
                return concat_tag.indexOf(info) === idx;
            }).sort(function(a, b){
                return ( a < b ) ? -1 : ( a == b ) ? 0 : 1; //가나다 순 정렬
            });

            // append
            var $list = $wrap.find('.list_tag');
            var $btn_copied = $list.find('.btn_tag').detach();

            filter_tag.forEach(function(info) {
                var $btn_clone = $btn_copied.clone();
                $btn_clone.html('<span>'+info+'</span>');
                $btn_clone.appendTo($list);
            });

            // click event
            $list.find('.btn_tag').on('click', function(){
                if ($list.hasClass('is-reset')) $list.removeClass('is-reset').find('.btn_tag').removeClass('on');

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
                var list_divi = list.arrDivision(9);

                // append
                list_divi[idx].forEach(function(each) {
                    var $item_clone = item_copied.clone();
                    var eachIdx = listAll.findIndex(el => el == each);


                    // .inner_default
                    $item_clone.find('.inner_default .box_thumb img').attr({
                        'src': '/img/main/project_thumb/'+each.thumb+'',
                        'alt': each.title
                    });
                    $item_clone.find('.inner_default .tit').text(each.title);
                    $item_clone.find('.inner_default .desc').append('<span>'+each.description+'</span>');

                    for (var i = 0; i < each.tag.length && i < 5; i++) {
                        $item_clone.find('.inner_default .tag').append('<span>'+each.tag[i]+'</span>');
                    }

                    // .inner_overlay
                    $item_clone.find('.inner_overlay .tit').text(each.title);
                    $item_clone.find('.inner_overlay .desc').text(each.workDesc);
                    $item_clone.find('.inner_overlay .role').text(String(each.workRole).replace(/,/gi,', '));
                    $item_clone.find('.inner_overlay .work').text(each.workDate);
                    $item_clone.find('.inner_overlay .rate').text(each.workRate);

                    // .inner_overlay - .list_more
                    var $listMore = $item_clone.find('.inner_overlay .list_more');

                    if (each.more) {
                        if (each.more.link) $listMore.find('.link_more').css('display', 'inline-flex').attr('href',each.more.link);
                        if (each.more.image) {
                            var $btnImg = $listMore.find('.btn_image').css('display', 'inline-flex');

                            $btnImg.on('click', function() {
                                LAYER({
                                    name : 'projectImage',
                                    afterLoad : function(){
                                        var $layer = $('#projectImage_wrap');
                                        var $swiper = $layer.find('.swiper-container');
                                        var slide_copied = $swiper.find('.swiper-slide').detach();

                                        // slide_clone
                                        function runSwiper(callback) {
                                            for (let i = 1; i <= each.more.image.count; i++) {
                                                let $slide_clone = slide_copied.clone();

                                                $slide_clone.attr('data-background', '/img/main/project_image/'+each.more.image.folder+'/'+i+'.jpg');
                                                $slide_clone.appendTo($swiper.find('.swiper-wrapper'));

                                            }
                                            setTimeout(() => { //swiper 비동기 오류 개선
                                                callback();
                                            }, 100);
                                        }

                                        // swiper()
                                        runSwiper(function() {
                                            let swiper = new Swiper($swiper, {
                                                lazy: true,
                                                lazy: {
                                                    loadPrevNext: false,
                                                    loadOnTransitionStart: true
                                                },
                                                keyboard: {
                                                    enabled: true,
                                                },
                                                navigation: {
                                                    nextEl: $layer.find('.swiper-button-next'),
                                                    prevEl: $layer.find('.swiper-button-prev')
                                                },
                                                pagination: {
                                                    el: $layer.find('.swiper-pagination'),
                                                    clickable: true
                                                },
                                            });
                                            if (each.more.image.count <= 1) $layer.find('.swiper-button-next, .swiper-button-prev, .swiper-pagination').remove();
                                        });
                                    },
                                });
                            });
                        }
                        if (each.more.video) {
                            var $btnVideo = $listMore.find('.btn_video').css('display', 'inline-flex');

                            $btnVideo.attr({
                                'data-title' : each.title,
                                'data-src' : each.more.video.src,
                                'data-type' : each.more.video.type,
                            });

                            $btnVideo.videoLayer();
                        }
                    }
                    $item_clone.appendTo($list);
                });

                // lineClamp()
                $list.find('.inner_default .desc span').lineClamp(2);

                // matchPath()
                $list.find('[data-images-path]').matchPath();

                // button hide()
                if (idx >= list_divi.length - 1) $btnMore.hide();
                else $btnMore.show();
            }

            // .btn_more click event
            $btnMore.on('click', function() {
                // 1. 선택된 태그의 keyword 저장
                var tag = [];
                var get_tag = $wrap.find('.list_tag .btn_tag.on').get();

                get_tag.forEach(function(info){
                    var text = $(info).find('span').text();
                    text = text.replace(/\(/g,'&#40;').replace(/\)/g,'&#41;');
                    tag.push(text);
                });

                // 2. 선택된 태그가 포함된 item
                var activeList = []
                var patt = new RegExp(tag.join('|'));

                listAll.forEach(function(each, idx){
                    var combineText = each.corp+','+each.workRole.join(',')+','+each.tag.join(',');
                    combineText = combineText.replace(/\(/g,'&#40;').replace(/\)/g,'&#41;');

                    if (patt.test(combineText)) activeList.push(each);
                });

                // 3.화면생성
                appendList(activeList, ProjectPage)
                ProjectPage++
            });

            // 처음 불러오기
            var keyword = ['피플라이프', '취업뽀개기', '경향신문', '한국경제매거진', '전북은행'];

            keyword.forEach(function(each, idx, arr){
                var $this = $wrap.find('.list_tag :contains("'+each+'")').closest('.btn_tag');

                $this.addClass('on');

                if (idx === arr.length - 1) {
                    $btnMore.trigger('click');
                    $wrap.find('.list_tag').addClass('is-reset');
                }
            });

        }
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 사용자 편의성 - DOM 생성 */
    var $wrap = $('#device');
    var swiperType = ['pc', 'tablet', 'mobile']
    var listThumb = [
        'peoplelife.co.kr',
        'bohumclinic.com_otc',
        'bohumclinic.com_fa',
        'campus.coachjob.net',
        'motijob.co.kr',
        'vnet.go.kr',
        'sports.khan.co.kr_olympic'
    ]
    var $swiper = $wrap.find('.swiper-container');
    var swiper_copied = $swiper.detach();

    swiperType.forEach(function(type){
        var $swiper_clone = swiper_copied.clone();
        $swiper_clone.addClass('swiper-'+type+'');

        var slide_copied = $swiper_clone.find('.swiper-slide').detach();
        listThumb.forEach(function(fileName){
            var $slide_clone = slide_copied.clone()
            $slide_clone.find('.slide-inner').attr('data-background', '/img/main/device_thumb/'+type+'/'+fileName+'.jpg');
            $slide_clone.prependTo($swiper_clone.find('.swiper-wrapper'));
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
        lazy: true,
        lazy: {
            loadPrevNext: true,
            loadOnTransitionStart: true
        },
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
    var swiperPc = new Swiper($swiperPc, swiperOptions);
    var swiperMobile = new Swiper($swiperMobile, swiperOptions);
    var swiperTablet = new Swiper($swiperTablet, swiperOptions);

    // swiper stop
    swiperPc.autoplay.stop();
    swiperMobile.autoplay.stop();
    swiperTablet.autoplay.stop();

    // swiper sync
    // swiperPc.controller.control = [swiperMobile]
    // swiperMobile.controller.control = [swiperTablet]

    // swiper play
    swiperPc.autoplay.start();
    swiperMobile.autoplay.start();
    swiperTablet.autoplay.start();

    if(!isReal) $wrap.find('.pointer-none').removeClass('pointer-none');


})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 사용자 편의성 - "적응형, 반응형" 프로젝트 보기 */
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

    tab($wrap.find('.tab-container'),{
        navigation : {
            el : $wrap.find('.tab-nav'),
            autoHeight : true
        },
        afterLoad : function(){
            $wrap.find('.tab-btn').on('click', function(){
                // moveTo()
                var headerH = $('#header').height();
                moveTo({
                    top: headerH,
                    target: $wrap,
                });
            })/* .eq(1).trigger('click'); */
        }
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 경력개발 - 기술역량 */
    var $wrap = $('#professional .tab-slide-tool')

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



    /* 경력개발 - 수상경력 및 자격증 */
    let $wrap = $('#professional .tab-slide-license');
    let $swiper = $wrap.find('.swiper-container');
    let $slide = $swiper.find('.swiper-slide');
    let slide_copied = $swiper.find('.swiper-slide').detach();

    // clone()
    getList('/js/json/license.json', function(infoList) {
        infoList.forEach(function(each) {
            let slide_clone = slide_copied.clone();

            slide_clone.find('.date').text(each.date);
            slide_clone.find('.tit').text(each.title);
            slide_clone.find('.desc:eq(0)').text(each.description1);
            slide_clone.find('.desc:eq(1)').text(each.description2);
            slide_clone.appendTo($swiper.find('.swiper-wrapper'))
        });

        swiperOpt();
    })

    // swiperOpt()
    const swiperOpt = function() {
        // swiper
        let swiper = new Swiper($swiper, {
            autoplay: {
                delay: 1,
                disableOnInteraction : false,
            },
            speed: 3000,
            slidesPerView: 'auto',
            centeredSlides: true,
            freeMode: true,
            // grabCursor: true,
            mousewheelControl: true,
            keyboardControl: true,
            on : {
                slideChangeTransitionStart : function(){
                    let $this = $(swiper.el).find('.swiper-slide-active');
                    let $next = $(swiper.el).find('.swiper-slide-next');

                    $this.prevAll().addClass('swiper-slide-active-complete');
                    $this.prevAll().find('.border').addClass('border-active');
                    $this.addClass('swiper-slide-active-complete');
                    $next.addClass('swiper-slide-active-complete');
                    $this.find('.border').addClass('border-active');
                },
                slideChangeTransitionEnd : function(){                                        
                    if (++swiper.realIndex == swiper.slides.length){
                        let tl = new TimelineMax();

                        swiper.autoplay.stop();
                        tl.delay(1)
                        .to(swiper.$wrapperEl, 0.6, {opacity:0, onComplete:function(){
                            swiper.slideTo($(swiper.slides).eq(0).index(), 0, true);
                            $(swiper.slides).removeClass('swiper-slide-active-complete');
                            $(swiper.slides).find('.border').removeClass('border-active');
                        }})
                        .to(swiper.$wrapperEl, 0.6, {opacity:1})
                        .call(function(){
                            swiper.autoplay.start();
                        });
                    }
                },
            },
        });
        swiper.autoplay.stop();        

        // siwper reset
        let observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.attributeName === "class") {
                    if ($wrap.hasClass('tab-slide-active')) {                        
                        swiper.autoplay.start();
                    } else {
                        swiper.autoplay.stop();
                        swiper.slideTo($(swiper.slides).eq(0).index(), 0, true);
                        $(swiper.slides).removeClass('swiper-slide-active-complete');
                        $(swiper.slides).find('.border').removeClass('border-active');
                    }
                }
            });
        });
        observer.observe($wrap[0], {attributes: true});
    }



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 경력개발 - 인턴·대외활동 및 직무교육 */
    let $wrap = $('#professional .tab-slide-activity');
    let $swiperTop = $wrap.find('.swiper-top');
    let slideTop_copied = $swiperTop.find('.swiper-slide').detach();
    let $swiperThumb = $wrap.find('.swiper-thumb');
    let slideThumb_copied = $swiperThumb.find('.swiper-slide').detach();        

    // clone()
    getList('/js/json/activity.json', function(infoList) {
        infoList.forEach(function(each) {
            let $slideTop_clone = slideTop_copied.clone();
            let $slideThumb_clone = slideThumb_copied.clone();
    
            $slideTop_clone.find('.corp').text(each.corp);
            $slideTop_clone.find('.tit').text(each.title).html(function(i, text) {
                return text.replace('長', '<span>長</span>');
            });
            $slideTop_clone.find('.date').text(each.date);
            $slideTop_clone.find('.desc').text(each.description);
            $slideThumb_clone.attr('data-background', '/img/main/professional_activity/'+each.thumb+'');
    
            $slideTop_clone.appendTo($swiperTop.find('.swiper-wrapper'))
            $slideThumb_clone.appendTo($swiperThumb.find('.swiper-wrapper'))
        });

        swiperOpt();
    });

    // swiperOpt()
    const swiperOpt = function() {
        // 본문
        let swiperTop = new Swiper($swiperTop, {
            autoplay: {
                delay: 3000,
                disableOnInteraction : false,
            },
            speed: 600,
            loop: true,
            slidesPerView: 3,
            loopedSlides: 3,
            centeredSlides: true,
            direction: 'vertical',            
            pagination: {
                el: $wrap.find('.swiper-pagination'),
                type: 'fraction',
            },
            navigation: {
                nextEl: $wrap.find('.swiper-button-next'),
                prevEl: $wrap.find('.swiper-button-prev'),
            },
            on : {
                slideChangeTransitionStart : function(){
                    let $slide = $swiperTop.find('.swiper-slide');
                    $slide.removeClass('is-active');
                },
                slideChangeTransitionEnd : function(){
                    let $this = $swiperTop.find('[data-swiper-slide-index="'+this.realIndex+'"]');
                    $this.addClass('is-active');
                },
            },
        });

        // 썸네일
        let swiperThumb = new Swiper($swiperThumb, {
            centeredSlides: true,
            touchRatio: 0.2,
            slideToClickedSlide: true,
            loop: true,
            slidesPerView: 1,
            loopedSlides: 3,
            direction: 'vertical',
            lazy: true,
            lazy: {
                loadPrevNext: true,
                loadOnTransitionStart: true
            },
        });
        swiperTop.controller.control = swiperThumb;
        swiperThumb.controller.control = swiperTop;
        swiperTop.autoplay.stop();

        // siwper reset
        let observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.attributeName === "class") {
                    if ($wrap.hasClass('tab-slide-active')) {
                        swiperTop.slideTo($wrap.find('.swiper-top [data-swiper-slide-index=0]').index(), 0, true);
                        swiperTop.autoplay.start();
                    } else {
                        swiperTop.autoplay.stop();
                    }
                }
            });
        });
        observer.observe($wrap[0], {attributes: true});
    }
    


})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 근무이력 - DOM 생성 */
    var $wrap = $('#career');
    var infoList = getCareerList();
    var $swiper = $wrap.find('.swiper-container');
    var slide_copied = $swiper.find('.swiper-slide').detach();

    infoList.forEach(function(each) {
        var $slide_clone = slide_copied.clone();
        $slide_clone.find('.logo').attr({
            'src': '/img/main/career_ci/'+each.logo+cache+'',
            'alt': each.name
        });
        $slide_clone.find('.detail .name, .btn_area .corp').text(each.name);
        $slide_clone.find('.btn_search').attr('data-search', each.name);
        $slide_clone.find('.detail .period').text(each.period).html(function(i, text) {
            return text.replace('재직중', '<strong class="color-primary">재직중</strong>');
        });
        $slide_clone.find('.detail .postion').text(each.postion);
        $slide_clone.find('.list_job .tit').text(each.title);

        for (var i = 0; i < each.job.length && i < 5; i++) {
            $slide_clone.find('.list_job').append('<dd class="desc">'+each.job[i]+'</dd>');
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
*/(function(){




    /* 근무이력 - 선택한 회사 프로젝트 보기 */
    var $wrap = $('#career');
    var $btnSrh = $wrap.find('.btn_search');

    $btnSrh.on('click', function(){
        var $this = $(this);

        moveTo({
            top: 150,
            target: $('#project .list_tag'),
        });

        setTimeout(function() {
            var keyword = $this.attr('data-search');
            var $project = $('#project')
            var $listTag = $project.find('.list_tag');
            var $btnMore = $project.find('.btn_more');

            // list 초기화
            ProjectPage = 0;
            $project.find('.item_project').remove();

            // tag 초기화 및 선택
            $listTag.find('.btn_tag.on').removeClass('on');
            $listTag.find(':contains("'+keyword+'")').closest('.btn_tag').addClass('on')

            $btnMore.trigger('click');
        }, 400);
    });


})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 코딩블로그 */
    var $wrap = $('#blog');

    // categroy 변환기
    var categoryList = getTistory('category');
    var filterCate = function(id) {
        var category = categoryList.categories.filter(function(item) {
            if (item.id == id) return item;
        });
        return category[0].name;
    }

    // post 생성
    var $tbody = $wrap.find('.table tbody');
    var tr_copied = $tbody.find('tr').detach();

    function appendPost(page) {
        $tbody.find('tr').remove()

        var postList = getTistory('post', 4, page);

        postList.posts.forEach(function(info){
            var $tr_clone = tr_copied.clone();
            $tr_clone.find('.cate').text(filterCate(info.categoryId));
            $tr_clone.find('.tit').text(info.title)
            $tr_clone.find('.date').text(info.date.substr(0, 10))
            $tr_clone.appendTo($tbody);

            if (info.visibility !== '0') {
                $tr_clone.on('click', function(){
                    window.open('about:blank').location.href=info.postUrl;
                });
            } else {
                $tr_clone.attr('data-disable','true');
            }
        });

        $paging.find('.table-pagination-bullet').removeClass('on');
        $paging.find('.table-pagination-bullet[data-page-number="'+page+'"]').addClass('on');
    }

    //page 생성
    var pagingList = getTistory('post');
    var pagingLength = Math.ceil(pagingList.totalCount / 4);
    var $paging = $wrap.find('.table-pagination');
    var bullet_copied = $paging.find('.table-pagination-bullet').detach();

    for (var i = 0; i < pagingLength; i++ ) {
        var $bullet_clone = bullet_copied.clone();
        var pageNum = i+1;
        $bullet_clone.attr('data-page-number',pageNum).text(pageNum);
        $bullet_clone.appendTo($paging)
    }

    $paging.find('.table-pagination-bullet').on('click', function(){
        var len = $paging.find('.table-pagination-bullet').length;
        var num = Number($(this).text());
        var pageGrpIdx = Number($paging.attr('data-group-index'));
        var selectedPageNum = (len*pageGrpIdx)+num;

        appendPost(selectedPageNum)
    });

    // 게시물 초기목록 load
    appendPost(1);



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...