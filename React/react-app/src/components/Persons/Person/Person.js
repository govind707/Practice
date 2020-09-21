

// creating a functional component

import React from 'react';
import './Person.css';
import Radium, {StyleRoot} from 'radium';

const Person = (props) => {
    const style = {

        '@media (min-width: 500px)': {
            width: '450px'
        }

    };
return (
   
   <div className="Person">
    <br></br>
    <p>{props.children}</p>
    <p onClick={props.click}> I'm a Person with name {props.name} of age {props.age} years old</p>
    <input type="text" onChange={props.changed} value={props.name}></input>

    </div>);
};

export default Radium(Person);