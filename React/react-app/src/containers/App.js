
import React, { Component } from 'react';
//import './App.css'; 
import Persons from '../components/Persons/Persons';
import Radium,{StyleRoot} from 'radium';
import classes from './App.css';
import Cockpit from '../components/cockpit/Cockpit';


class App extends Component {

  state = {
    persons: [
      {id:'1', name: 'Govind', age: 22},
      {id:'2', name:'Kanwar', age: 22},
      {id:'3',  name: 'Pankaj', age: 21},
      {id:'4', name: 'sourabh', age:23}
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
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})

  }
  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex( p =>{
      return p.id == id ;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons}); 
   /*
    this.setState({
      persons: [
        { name:event.target.value, age: 22},
        { name: 'Kanwar', age: 22},
        {name: 'Pankaj', age: 21},
        {name: 'sourabh', age:23}
      ]
    })
    */
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
      cursor: 'pointer',
      ':hover': {
        backgroundColor:'lightgreen',
        color: 'Black'
      }
    };

    let persons = null;
        if(this.state.showPersons){
          persons = (
               <div>
                        <Persons 
                           persons = {this.state.persons}
                           click = {this.deletePersonHandler}
                           change ={this.nameChangeHandler}
                        />
               </div>
          );
          style.backgroundColor = 'red';
          style[':hover'] = {
            backgroundColor: 'lightred',
            color: 'orange'
          }
          }

     


    return (
      <StyleRoot>
      <div className={classes.App}>
        <h1> Hi its still working

        </h1>
        <Cockpit 
        clicked = {this.togglePersonHandler}
        persons = {this.state.persons}
        showPersons = {this.state.showPersons}
        />
        {persons}
      </div>
      </StyleRoot>
    );
}

}

export default Radium(App);
 













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
