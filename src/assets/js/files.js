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

console.log(SERVER);




/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/



/*  cache */ 
// var cache, FILES_CSS, FILES_JS;
// cache = '?v='+(new Date).getTime();



/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/


/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
