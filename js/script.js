$(function(){ // DOCUMENT READY...
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    $('#wrap').css({
        'visibility' : 'visible',
        'opacity' : 1
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    $.fn.aaaa = function(){
        var $this = $(this);
        var arg = arguments[0];

        console.log('a');

        if (arg.afterLoad){
            arg.afterLoad();
        }
    }

    $('h5').aaaa({
        // afterLoad : function(){
        //     console.log('b');
        // }
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    return;

    function LAYER () {
        var arg = arguments[0];
        var $target = $(arg.target);
        
    
        if (arg.afterLoad){
            arg.afterLoad();
        }

    }

    LAYER({
        target : 'h5',
        afterLoad : function(){
            console.log('b');
        }
    });





})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){


    return;

    function aaa(callback){
        console.log('1');
        callback();
    }


    aaa(function(){
        console.log('2');
        console.log('3');
        console.log('4');
    });


})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...




