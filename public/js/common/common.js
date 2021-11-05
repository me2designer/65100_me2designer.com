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

    $section.each(function() {
        var $this = $(this);

        scrollAction({
            target: $this,
            top: 20,
            scrollDownAction : function(){
                // 스크롤 DOWN 액션
                var id = '#'+$this.attr('id');

                $btn.removeClass('on');
                $btn.siblings('[data-target="'+id+'"]').addClass('on');

            },
            scrollUpAction : function(){
                // 스크롤 UP 액션
                var id = '#'+$this.attr('id');
                var $prev = $btn.siblings('[data-target="'+id+'"]').prev();
                var prevId = $prev.attr('data-target');

                $btn.removeClass('on');
                $btn.siblings('[data-target="'+prevId+'"]').addClass('on');
            }
        });
    });

    //.moveTo()
    var headerH = $header.outerHeight();

    $btn.on('click', function(){
        var target = $(this).attr('data-target')||$(this).attr('data-anchor');
        var top = $(this).index() == 0 ? 0 : headerH;                

        moveTo({
            top : top,
            target : target,
        });        
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){




    sticky({
        target: $('#btnTop'),
        position: 'bottom',
        callback : function(){}
    });


})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...