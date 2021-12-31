$(function(){/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* wrapper is ready */
    var $wrap = $('#wrap');

    if ($wrap.css('opacity') == '0' || $wrap.css('visibility') == 'hidden') {
        $wrap.css({
            'opacity': 1,
            'visibility': 'visible'
        });
    }

    // Loding
    $('#lodingWrap').remove();



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* header 감추기 */
    if (urlSearchName('header') == 'hidden') $('#header').hide();



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* TEXT 말줄임 */

    //1줄
    $('.lineClamp').lineClamp(1);

    //2줄
    $('.lineClamp2').lineClamp(2);

    //3줄
    $('.lineClamp3').lineClamp(3);

    //4줄
    $('.lineClamp4').lineClamp(4);



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* HEADER - is-active */
    var $header = $('#header');
    var status;

    $(window).on('scroll', function () {
        var windowT = $(this).scrollTop();
        if (windowT >= 50){
            if (!status) $header.addClass('is-active');
            status = true;
        } else {
            if (status) $header.removeClass('is-active');
            status = false;
        }
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* HEADER - 현재 section 위치표시 및 바로가기 */
    var $header = $('#header');

    //현재위치표시
    var $section = $('#container > section');
    var $btn = $header.find('.btn_gnb');

    //data-target 추출
    var arrId = []
    $btn.each(function(idx,info) {
        arrId.push($(info).attr('data-target'))
    });

    $section.each(function() {
        var $this = $(this);
        var id = '#'+$this.attr('id');

        if (arrId.indexOf(id) == -1) return; //data-target 없는 경우 section scrollAction 적용방지

        scrollAction({
            target: $this,
            top: 20,
            scrollDownAction : function(){
                // 스크롤 DOWN 액션
                $btn.removeClass('on');
                $btn.siblings('[data-target="'+id+'"]').addClass('on');

            },
            scrollUpAction : function(){
                // 스크롤 UP 액션
                var $prev = $btn.siblings('[data-target="'+id+'"]').prev();
                var prevId = $prev.attr('data-target');

                $btn.removeClass('on');
                $btn.siblings('[data-target="'+prevId+'"]').addClass('on');
            }
        });
    });

    //.moveTo()
    // var headerH = $header.outerHeight();
    $btn.on('click', function(){
        var target = $(this).attr('data-target')||$(this).attr('data-anchor');
        var top = $(this).index() == 0 ? 0 : 40;

        moveTo({
            top : top,
            target : target,
        });
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* animate cursor */
    var $wrap = $('.animateCursor');

    //append
    $wrap.append('<i class="circle"></i><i class="arrow"></i>');

    //interaction
    var cursor = $wrap.find('.circle'),
		follower = $wrap.find('.arrow'),
        posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat:-1,
        onRepeat:function(){
            console.log(mouseX, posX);
            posX += (mouseX - posX) / 4;
            posY += (mouseY - posY) / 4;

            TweenMax.set(follower, {
                css: {
                    left: posX,
                    top: posY
                }
            });
            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    $wrap.parent().on("mousemove",function(e){        
        $wrap.addClass('is-active');
        // mouseX = e.pageX - 30;
        // mouseY = e.pageY - 110;

        //cursor hidden
        if (!$('#wrap').filter('[data-device-detail="ie11"]').length) document.body.style.cursor = 'default';
    }).on('mouseleave',function(e) {
        $wrap.removeClass('is-active');

        //cursor visible
        if (!$('#wrap').filter('[data-device-detail="ie11"]').length) document.body.style.cursor = 'default';
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 맨 위로 이동하기 */
    var $wrap = $('#aisdeBtnTop');

    $wrap.addClass('is-hidden')

    // 위치고정
    sticky({
        target: $wrap,
        position: 'bottom',
        callback : function(){}
    });

    // 최 상담에서 hidden
    scrollAction({
        target: $('section').eq(1),
        top: 0,
        scrollDownAction : function(){
            // 스크롤 DOWN 액션
            $wrap.removeClass('is-hidden');
        },
        scrollUpAction : function(){
            // 스크롤 UP 액션
            $wrap.addClass('is-hidden');
        }
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){




    // $(window).on('scroll', function () {
    //     console.log($('#container').height());

    // var scrollBottom = $(window).scrollTop() + $(window).height();
    // console.log(scrollBottom);

    // });

    var $footer = $('#footer');
    var footerH = $footer.outerHeight();
    var status;

    $(window).on('scroll', function () {
        var scrollBottom = $(window).scrollTop() + $(window).height();
        var containerH = $('#container').height();

        if (scrollBottom >= containerH){
            var posT = Math.abs((scrollBottom - containerH) / footerH * 1)
            var Y = posT >= 1 ? 1 : posT;

            if (status) {            
                $footer.find('.footer_overlay').css('opacity', Math.abs(Y - 1));
                $footer.find('.footer_inner').css('transform', 'translateY('+Math.abs(Y * 100 - 100)+'px)');
            }
            status = true;
        } else {
            // if (!status)
            status = false;
        }
    });


})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...