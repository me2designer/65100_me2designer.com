(function(){/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

    /* Block IP Access */
    function blockIp(callback) {
        function resp() {
            var arrUserIP = ['118.32.95.171'];  // 차단할 아이피 입력 118.32.95.171
            var json = JSON.parse(this.responseText);

            for (var i = 0; i < arrUserIP.length; i++) {                
                switch (arrUserIP[i] == json.ip) {
                    case true :
                        return;
                    break;
                    case false :
                        if (i == arrUserIP.length -1) callback();
                    break;
                }
            }
        }

        var request = new XMLHttpRequest();

        request.addEventListener("load", resp);
        request.open("GET", 'https://api.ipify.org?format=json', true);
        request.send();        
    }



/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/



    /* Load Script */
    function loadScript() {
        var arg = arguments[0]
        var url = arg.url;

        var script = document.createElement('script');
        script.src = url;
        script.onload = arg.afterLoad ? arg.afterLoad() : '';
        document.getElementsByTagName('head')[0].appendChild(script);        
    }



/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/



    /* Google  analytics */ 
    blockIp(function(){                
        loadScript({
            url : '//www.googletagmanager.com/gtag/js?id=G-W07XFYE5BD',
            afterLoad : function() {                
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-W07XFYE5BD');
            }
        });        
    });



/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/}());



