//Arrays
 //0 index based 
 //collection of variables
 //variables can be of different datatypes
 var arr = ["gvnd","knwr","pnkj","shrb"];
 console.log(arr);
 var arrr = new Array(1,2,3,4);
 //mutate arrays
 arr[1]='pal'
 arr[arr.length] = 'ganesh sir'
 console.log(arr);
 //diff datatypes
  var ar = [...arr,1997,1997,1998,1996] 
  console.log(ar);
  ar[ar.length] = true;
  console.log(ar);
  // adding element at the end
  arr.push('kk sir');
  console.log(arr);
  //add element at beginning
  arr.unshift('Mr.');
  console.log(arr);
  // dlt element from the end 
  arr.pop()
  console.log(arr);
  //dlt first element
  arr.shift();
  console.log(arr);
  //indexof() : return the position of element in the array if element is nt present thn -1
  console.log(arr.indexOf('gvnd'));
  console.log(arr.indexOf(50));