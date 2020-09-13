import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let assignedclasses = [];
    let btnClass = '';

    if(props.persons.showPersons){
        btnClass = classes.Red;
    }

     if(props.persons.length == 3){
       assignedclasses.push(classes.red);
     }else if(props.persons.length ==2){
       assignedclasses.push(classes.bold);
     }else if(props.persons.length <= 1){
       assignedclasses.push(classes.lightpink)
     }


    return (
        <div className={classes.Cockpit}>
        <div className={assignedclasses.join('')}>
          Hi, This is a React app
        </div>
        <br></br>
        <br></br>
        <button 
           className={btnClass}
           onClick={props.clicked}>Switch Name</button>
        <br></br>
        <br></br>
        </div>
    );


};

export default cockpit;