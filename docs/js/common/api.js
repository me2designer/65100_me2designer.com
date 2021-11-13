console.log('aab');

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/


    /* 코딩블로그 - 티스토리 */ 
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




/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/



    // /* 근무이력 */     
    // function getCareerList() {
    //     var list = [];
    //     $.ajax({
    //         url : '/js/json/career.json',
    //         async : false,
    //         success : function(data){
    //             console.log(data);
    //             list = data;
    //         }
    //     });
    //     return list;
    // }    

    // function getCareer(callback){
    //     $.ajax({
    //         url:'/js/json/career.json',
    //         async : false,
    //         success:function(data){
    //             if(callback) callback(data);
    //         }
    //     });
    // }



/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/