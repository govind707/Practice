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