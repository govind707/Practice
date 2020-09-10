
//callback functions : these are the functions that are passed as an arguement to the another function and called by that function later

var ar = [2020,2018,2009,2015,2010]
const fn = (x) =>{
    return 2020-x;
}
const expCalc = (ar, fn) => {
    var exp = []
    for(let i=0;i<ar.length;i++){
        exp.push(fn(ar[i]));
    }
    console.log(exp);
}
expCalc(ar,fn);