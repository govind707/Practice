john_w = 50
john_h = 1.6
mark_w = 55
mark_h = 1.4
john_BMI = john_w / ( john_h*john_h);
mark_BMI = mark_w / ( mark_h*mark_h);

// ternanry operator
john_w > mark_w ? console.log(" john is a fat") : console.log(" mark is fat");

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