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