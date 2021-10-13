var localhost = /\d+\.\d+\.\d+\.\d/.test(location.hostname) ? location.hostname : 'localhost';
var LOCAL = {
	name: 'local',
    public: '//' + localhost + ':65001',
    fonts: '//' + localhost + ':65002',
	blog: '//' + localhost + ':65101',
}

var REAL = {
	name: 'real',
    public: '//public.me2designer.com',
    fonts: '//fonts.me2designer.com',
	blog: '//blog.me2designer.com',
};


var SERVER;
if (/localhost/i.test(location.host)) {
    SERVER = LOCAL;
} else {
    SERVER = REAL;
}

// switch(SERVER.name){
//     case 'real':
//         var isReal = true;
//     break;
//     case 'local':
//         var isLocal = true;
//     break;
// }




/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/



/* cache */
var cache = '?v='+(new Date).getTime();



/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/



/* FILES */
function FILES (fileList, callback){
    var result, FILES_CSS, FILES_JS;
    var head  = document.getElementsByTagName('head')[0];
    var appCss = head.querySelectorAll('[rel="stylesheet');

    function isOverlap (list, filePath){
        var value;
        for(var i=0; i<list.length; i++){
            if(list[i]==filePath) {
                value = true;
                break;
            }
        }
        return Boolean(value);
    }

    function afterJqLoad(){
        var _result;

        var CSS = [];
        var JS = [];

        //CSS & JS push
        if(Array.isArray(fileList)){
            fileList.forEach(function(v){
                var isJS = /\.js/.test(v);
                isJS?JS.push(v):CSS.push(v);
            });
        } else {
            var isJS = /\.js/.test(fileList);
            isJS?JS.push(fileList):CSS.push(fileList);
        }

        //CSS <head> append
        CSS.forEach(function(v,i){
            if(!FILES_CSS) FILES_CSS = [];

            var filePath = CSS[i];
            if(!isOverlap(FILES_CSS, filePath)){
                var tag  = document.createElement('link');
                tag.rel = 'stylesheet';
                tag.type = 'text/css';
                tag.href = filePath+cache;
                head.appendChild(tag);
                FILES_CSS.push(filePath);
            }
            if(callback && (CSS.length-1==i) && !JS.length) _result = callback();
        });

        //JS <head> append
        if(JS.length){
            (function getJS(i){
                if(!FILES_JS) FILES_JS = [];
                var filePath = JS[i];
                if(!isOverlap(FILES_JS, filePath)){
                    var _cache = /\?/.test(filePath) ? '' : cache;
                    $.getScript(filePath+_cache).done(function(){
                        FILES_JS.push(filePath);
                        if(i!=JS.length-1) {
                            getJS(++i);
                        } else {
                            if(callback) _result = callback();
                        }
                    }).fail(function(){
                        console.log('error : '+filePath);
                        if(i!=JS.length-1) {
                            getJS(++i);
                        } else {
                            if(callback) _result = callback();
                        }
                    });
                } else {
                    console.log('overlab : '+filePath);
                    if(i!=JS.length-1) {
                        getJS(++i);
                    } else {
                        if(callback) _result = callback();
                    }
                }
            })(0);
        }

        if(appCss.length){
            var ddd = document.createElement(appCss);
            head.appendChild(ddd);
        }
        return _result;
    }
    result = afterJqLoad();
    return result;
}



/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/



FILES([
    SERVER.fonts+'/fonts/OpenSans/OpenSans.css',
    SERVER.fonts+'/fonts/NanumSquare/NanumSquare.css',
    SERVER.public+'/css/reset.css',
    SERVER.public+'/css/common_pc.css',
    SERVER.public+'/lib/swiper/swiper.css',
    SERVER.public+'/js/server.js',
    SERVER.public+'/js/public.js',
], function(){

});