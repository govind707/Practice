
/*
// coding challenge -1
// calc BMI = mass / height^2 for john nd mark then print boolean comparision
john_w = 50
john_h = 1.6
mark_w = 55
mark_h = 1.4
john_BMI = john_w / ( john_h*john_h);
mark_BMI = mark_w / ( mark_h*mark_h);
console.log("john's BMI = " + john_BMI," mark's BMI = "+ mark_BMI);
var johnBMIhigher = john_BMI > mark_BMI 
if(johnBMIhigher){
    console.log(" john's BMI is higher");
}
else {
    console.log( " john's BMI is not higher than makr's BMI")
}
// typeof 
console.log(typeof mark_h);
// conditional operator
if(john_h > 1.5 && mark_h > 1.5){
    console.log("both are taller")
}
else if(john_h > 1.5 || mark_h > 1.5){
    console.log("Atleast One of them is taller")
}
else{
    console.log(" both are shorter ");
}
// ternanry operator
john_w > mark_w ? console.log(" john is a fat") : console.log(" mark is fat");
//switch statement 
var x = "john";
switch( x ){
    case 'john' :
        console.log("john's weight = " + john_w);
    break;
    case 'mark' : 
        confirm.log("mark's weight = " + mark_w);
    break;
    default : console.log("No data available")        
}
//falsy value : undefined null '' 0 NaN
// truthy value : all other than falsy value
var y;
 if(y){
     console.log("variable is defined ");
 }
 else{
     console.log(" variable is not defined ");
 }  
 // equality poerator
 let v = 7
 if (v === '7'){
     console.log(" v is a number with value 7")
 }else if( v == '7'){
     console.log(" v has value 7")
 }
 else{
     console.log("neigther type nor value are same")
 }
 // functions
 function age(birthYear){
     return 2020-birthYear;
 }
 age(1997);
 // untill and unless uh r nt using either console or document.getElementById('...') , uhh will nt able to see the return of the function   
 // return keyword do nt just returns the output bt also finishes off the function and take us back to the calling statement
 // here we dont need break keyword
 var employee = function jobs(job, name){
     switch(job){
         case 'teacher':
             return name + " Teaches students how to code ";
         case 'Software_Engineer' :
             return name + " Makes cool Tech stuff for the welfare of the society";
         case 'Farmer' :
             return name + " Second to God, Feeds the world";
         default : return name + " hopefully getting job soon";        
     }
 }
 console.log(employee("Software_Engineer", "Govind"));
 // expression ( x >= y) produces results but statment ( console.log(23); ) do not produces imediete reuslts
 
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
  // coding challenge 3
  var bills = [124,48,268];
  function tip(bill){
          switch(true){
            case bill<50 :
                return bill*0.2;
            case (bill > 50 && bill< 200):   
                return bill*0.15;
            case bill > 200: 
                return bill*0.10;
            default : return "not a valid bill";
          }    
  }
  var tips = [];
  var paid=[];
  for(let i in bills){
      tips.push(tip(bills[i]));
      paid.push(tips[i]+bills[i]);
  }
  console.log(...tips);
  console.log(...paid);
// Objects
// in array order matters a lot but in objets order does nt matter
var gov = {
    firstName : "Govind ",   
    lastName : " Thakur ",
    birthYear : 1997,
    education : " Graduated ",
    clg : " IITR ",
    job : " Software Engineer",
    calAge : function(){ return 2020-this.birthYear ;}
};
console.log(gov);
console.log(gov.lastName);
console.log(gov['clg']);
var x = 'job';  
console.log(gov[x]);
var pan = new Object();
pan.firstName = "pankaj";
pan.lastName = "Meeana";
console.log(pan); 
console.log(gov.calAge());
// loops and iteration
for(var i=0;i< ar.length; i++){
    console.log(ar[i]);
}
var i=0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}
//break and continue
for(var i=0;i< ar.length; i++){
    if(typeof ar[i] !== 'string')
    break;
    console.log(ar[i]);
}
for(var i=0;i< ar.length; i++){
    if( ar[i] === 'shrb')
    continue ;
    console.log(ar[i]);
}
*/
/* 
  How javaScript works behind the scene
  js required a particular environment generally use browsers
  hv three portions : parser,machine code converter, run
  parser check code line by line, code is up to rules
  
  in run process -
  execution context formed 
  all variables and functions which are nt inside any function are goes to global execution context 
  for every call of function a new execution context form
  execution occur acc to stack model
*/

//Asynchronous function
/*
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
        },1000,x);    
    },2000,ar);
},5000);
*/

// promise

/*
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
*/

//object functiuons

// we create a object funtion and main object function is called a constructor and other object functions called instances

/*
var employee = function (name,bday,place,job){
    this.name = name;
    this.bday = bday;
    this.place = place;
    this.job = job;
}
employee.prototype.calcAge = function (){
    console.log( 2020-this.bday);
}
employee.prototype.clg = 'IITR';
var gvnd = new employee("Govind Thakur",1997,"jabalpur, MP"," Software Engineer")
console.log(gvnd);    
console.log(gvnd.name);
var pnkj = new employee( " Pankaj Meena",1998," rajsthan "," Software Engineer");
console.log(pnkj);
console.log(gvnd.hasOwnProperty('job'));
console.log(gvnd.calcAge());
console.log(gvnd.hasOwnProperty('calcAge'));
console.log(pnkj.clg);  
console.log(pnkj);
console.log(gvnd instanceof employee);
var ar=[1,2];
console.log(ar);
*/
/*
// other way of creating object : Object.create()
var gvnd = {
    
}
//var gvnd = Object.create(proto);
gvnd.name = "Govind";
gvnd.bday = 1997;
console.log(gvnd);
*/
/*
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
*/

// closures : inner function can access hte variables and parameters of the outers functions evn outer fn has returned

// next gen js : ES6

/*
1. variables declaration wid let and const they r block scoped nt fn scoped
2. strings : use backticks to include variables inside a string : ` this is ${name} of ${age} years old`
3. arrow functions : have no this
4. destructuring
*/
let age = 22;
const name = "Govind"
 
console.log(`My name is ${name} and I am ${age} years old`);
