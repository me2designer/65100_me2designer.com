// function loadScript() {
//     var arg = arguments[0]
//     var url = arg.url;

// 	var script = document.createElement('script');
// 	script.src = url;
// 	script.onload = arg.afterLoad ? arg.afterLoad() : '';
// 	document.getElementsByTagName('head')[0].appendChild(script);    
// }

// loadScript({
//     url : 'https://www.googletagmanager.com/gtag/js?id=G-W07XFYE5BD',
//     afterLoad : function() {
//         console.log('a');
//     } 
// });
if(isReal) {
    FILES('//www.googletagmanager.com/gtag/js?id=G-W07XFYE5BD', function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
    
        gtag('config', 'G-W07XFYE5BD');
    })
}    