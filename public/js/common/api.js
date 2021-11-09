/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/


    function getTistory(count, pageNum) {
        var list;
        var pars = {
            'accessToken' : '014f0adecdf2a12798c783abbc7a0498_3ea393c3f6e235ff61d1f6e3557bbdb9',
            'outputType' : 'json', //xml 또는 json
            'blogName' : 'https://me2designer.tistory.com'
        }
        $.ajax({            
            url: 'https://www.tistory.com/apis/post/list?access_token='+pars.accessToken+'&output='+pars.outputType+'&blogName='+pars.blogName+'&count='+count+'&page='+pageNum+'&visibility=0',
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