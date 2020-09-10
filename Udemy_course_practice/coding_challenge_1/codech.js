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