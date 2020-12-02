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


    // let tl = new TimelineMax()
    // tl.add(TweenMax.to('.box_red', 1, {backgroundColor:'#fff'}))
    // tl.add(TweenMax.to('.box_red', 1, {left:'100px'}))
    // tl.add(TweenMax.to('.box_red', 1, {left:'0px'}))



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){
    
    
    // const flightPath = {
    //     curviness : 1.25,
    //     autoRotate : true,
    //     values : [
    //         {x : 100, y : -20},
    //         {x : 300, y : 10},
    //         {x : 500, y : 100},
    //         {x : 700, y : -100},
    //         {x : 300, y : -50},
    //     ],        
    // };

    // const tween = new TimelineLite();

    // tween.add(
    //     TweenLite.to(".paper-plane", 1, {
    //         bezier : flightPath,
    //         ease : Power1.easeInOut,
    //         repeat:-1,
    //     })
    // );


    var timelineBox = new TimelineMax();
    var $box = $('#box');

    timelineBox.add(
        TweenMax.to($box, 3, {
            bezier:{                
                values:[
                    {x:300, y:0},
                    {x:100, y:100},
                    {x:500, y:200}
                ], autoRotate:false
            }, ease:Power1.easeInOut, repeat: -1, yoyo: true
        })
    )
    timelineBox.add(TweenMax.to($box, 3, {width:500, height:500, borderRadius:'100%'}))

    



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...




