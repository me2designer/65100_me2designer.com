/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/



    /* 코딩블로그 - 티스토리 - 글목록 */
    function getTistory2(type, count, pageNum) {
        var opction = {
            type: function(data){
                // var val;
                switch (data){
                    case 'post':
                        data = 'https://www.tistory.com/apis/post/list?'
                    break;
                    case 'category':
                        data = 'https://www.tistory.com/apis/category/list?'
                    break;
                }
                    return data;
            },
            count: count == undefined ? '' : '&count='+count,
            pageNum: pageNum == undefined ? '' : '&page='+pageNum,
        }
        var list;
        var pars = {
            'accessToken' : '014f0adecdf2a12798c783abbc7a0498_3ea393c3f6e235ff61d1f6e3557bbdb9',
            'outputType' : 'json', //xml 또는 json
            'blogName' : 'https://me2designer.tistory.com'
        }
        $.ajax({
            url: opction.type(type)+'access_token='+pars.accessToken+'&output='+pars.outputType+'&blogName='+pars.blogName+'&visibility=0'+opction.count+opction.pageNum,
            async : false,
            success : function(data){
                list = data.tistory.item;
            }
        });
        return list;
    };



/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/


const getTistory1 = function() {
    let arg = arguments[0];
    let default_option = {
        pars : {
            'accessToken' : '014f0adecdf2a12798c783abbc7a0498_3ea393c3f6e235ff61d1f6e3557bbdb9',
            'outputType' : 'json', //xml 또는 json
            'blogName' : 'https://me2designer.tistory.com'
        },
        type : {
            post : 'https://www.tistory.com/apis/post/list?',
            category : 'https://www.tistory.com/apis/category/list?'
        },
        callback : function(){}
    }
    arg = mergeDeep(default_option, arg);
    arg.count = arg.count == undefined ? '' : '&count='+arg.count;
    arg.page = arg.page == undefined ? '' : '&page='+arg.page;

    let arrType = Object.entries(arg.type)
    let datas = {}
    let Y;

    arrType.forEach(function(each) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', each[1]+'access_token='+arg.pars.accessToken+'&output='+arg.pars.outputType+'&blogName='+arg.pars.blogName+'&visibility=0'+arg.count+arg.page);
        xhr.send();
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                datas[each[0]] = each[0] == 'post' ? JSON.parse(xhr.response).tistory.item : JSON.parse(xhr.response).tistory.item.categories;

                if (Y) arg.callback(datas);

                Y = true;
            } else {
                console.log('failed');
            }
        };
    });
}