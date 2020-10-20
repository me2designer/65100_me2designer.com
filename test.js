function show(){
    for(var i=0; i < myBook.length; i++){
        myBook[i] = i + 30;
        console.log(myBook[i]);
    }
}

var myBook = new Array(10);
show();