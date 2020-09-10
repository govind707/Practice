// functions

function age(birthYear){
    return 2020-birthYear;
}
console.log(age(1997));

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