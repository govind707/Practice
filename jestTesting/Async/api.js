const Axios = require("axios");
const { TestScheduler } = require("jest");

//let data = null;
const apiTest = () => {
    return (() => {
        setTimeout(() => {
            return "Rajesh";
        },2000);
    });
  /*  return Axios.get("https://tools.learningcontainer.com/sample-json.json")
    .then( response => {
    
        return response.data
    })
    .then(data=>{
        return ( data.firstName );
    });
    */

};
    
test ("Testing Promises", () => {
    return apiTest().then( data => {
        expect(data).t0Match("Rajesh");
    }); 
});

//console.log(data);
//x

/*
let y=null;

const data = async () => {
    const x = null;
    return (
         x = await Axios.get("https://tools.learningcontainer.com/sample-json.json")
        .then( response => {

            return response.data
        })
        .then( data => {
          y = data;
        })
     );
};

console.log(y);
*/

//apiTest();