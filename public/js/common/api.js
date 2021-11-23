/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/



    /* 코딩블로그 - 티스토리 - 글목록 */
    function getTistory(type, count, pageNum) {
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

    // function getTistory() {
    //     var arg = arguments[0];
    //     var callback = arg.callback;
    //     var opction = {
    //         count : arg.count == undefined ? '' : '&count='+arg.count,
    //         pageNum : arg.page == undefined ? '' : '&page='+arg.page,
    //     }
    //     var pars = {
    //         'accessToken' : '014f0adecdf2a12798c783abbc7a0498_3ea393c3f6e235ff61d1f6e3557bbdb9',
    //         'outputType' : 'json', //xml 또는 json
    //         'blogName' : 'https://me2designer.tistory.com'
    //     }
    //     $.ajax({
    //         url: 'https://www.tistory.com/apis/post/list?access_token='+pars.accessToken+'&output='+pars.outputType+'&blogName='+pars.blogName+'&visibility=0'+opction.count+opction.pageNum,
    //         method:'GET',
    //         dataType: "JSON",
    //         success:function(data){
    //             if(callback) callback(data.tistory.item);
    //         }
    //     });
    // }

    // getTistory({
    //     count: 4,
    //     page: 1,
    //     callback: function(listAll) {
    //         console.log(listAll);
    //     }
    // });



/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/



    /* 프로젝트 */
    function getProjectList() {
        var arg = arguments[0];
        var callback = arg.callback;
        $.ajax({
            url: '/js/json/project.json',
            method:'GET',
            contentType : "application/json; charset=utf-8",
            dataType: "JSON",
            success:function(data){
                if(callback) callback(data);
            }
        });
    }

    // function getProjectList(callback){
    //     $.ajax({
    //         url:'/js/json/career.json',
    //         async : false,
    //         success:function(data){
    //             if(callback) callback(data);
    //         }
    //     });
    // }

    // getProjectList(function(infoList){
    //     console.log(infoList);
    // })



/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/



    /* 근무이력 */
    function getCareerList() {
        var list = [];
        $.ajax({
            url : '/js/json/career.json',
            async : false,
            success : function(data){
                list = data;
            }
        });
        return list;
    }

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


/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
