

// promise

const t2 = (a2) =>{
    return new Promise((resolve,reject) =>{
        setTimeout((a22) => {
            var arr = [6,7];
            var x = [...a22,...t2arr];
            resolve(x);
        },2000,a2);
    });
}
var t1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        var ar = [1,2,3,4,5];
        resolve (ar);
    },3000);
})
.then( a1 =>{
    console.log(a1);
    return t2(a1);
})
.then( a2 =>{
    console.log(a2);
})
.catch((err) => {
    console.log('Error');
});