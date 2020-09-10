//Asynchronous function
var ar = [1,2,3,4,5];
var arr = [6,7];
var arr=[8,9,10];


var t1 = setTimeout(() => {
    var ar = [1,2,3,4,5];
    console.log(ar);
    var t2 = setTimeout((a1) => {
        var arr = [6,7];
        console.log(arr);
        var x = [...a1,...arr];
        var t3= setTimeout((a2) => {
            var arrr=[8,9,10];
            console.log(arrr);
            var y = [...a2,...arrr];
            console.log(y);
        },500,x);    
    },1000,ar);
},2000);
