//object functiuons

// we create a object funtion and main object function is called a constructor and other object functions called instances


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