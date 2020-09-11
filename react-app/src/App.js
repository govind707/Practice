
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { name: 'Govind', age: 22},
      { name:'Kanwar', age: 22},
      {name: 'Pankaj', age: 21},
      {name: 'sourabh', age:23}
    ],
    otherState: 'some other value',
    showPersons: false
  }
/*
  switchNameHandler = () =>{
    this.setState({
      persons : [
        {name: 'Thakur', age: 23},
        {name: 'Pal', age: 23},
        {name: 'Meena', age: 22},
        {name: 'Sonekar', age:24}
      ]
    })
  }
*/

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons: persons})

  }
  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        { name:event.target.value, age: 22},
        { name: 'Kanwar', age: 22},
        {name: 'Pankaj', age: 21},
        {name: 'sourabh', age:23}
      ]
    })
  }

  togglePersonHandler = () =>{
    let doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'lightblue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8x',
      cursor: 'pointer'
    };

    let persons = null;
        if(this.state.showPersons){
          persons = (
             <div>
               { 
               this.state.persons.map( (person,index) => {
                return <Person 
                           name = {person.name}
                           age = {person.age}
                           click = {() => this.deletePersonHandler(index)}
                           changed = {this.nameChangeHandler}
                        />   
               })}
               </div>
          );
          }
    return (
      <div className="App">
        <div>
          Hi, This is a React app
        </div>
        <br></br>
        <br></br>
        <button 
           style={style}
           onClick={this.togglePersonHandler}>Switch Name</button>
        <br></br>
        <br></br>
        {persons}
      </div>
    );
}

}

export default App;














/*

import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';



const App = (props) =>{

    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Govind', age: 22},
            { name:'Kanwar', age: 22},
            {name: 'Pankaj', age: 21},
            {name: 'sourabh', age:23}
          ],
          otherState: 'some other value'
    })

    const switchNameHandler = () =>{
        setPersonsState({
          persons : [
            {name: 'Thakur', age: 23},
            {name: 'Pal', age: 23},
            {name: 'Meena', age: 22},
            {name: 'Sonekar', age:24}
          ]
        })
      }
      return (
        <div className="App">
          <div>
            Hi, This is a React app
          </div>
          <br></br>
          <br></br>
          <button onClick={switchNameHandler}>Switch Name</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>This is Person Tag : 1</Person>
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>This is Person Tag : 2</Person>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>This is Person Tag : 3</Person>
          <Person name={personsState.persons[3].name} age={personsState.persons[3].age}>This is Person Tag : 4</Person>
        </div>
      );
};

export default App;

*/
