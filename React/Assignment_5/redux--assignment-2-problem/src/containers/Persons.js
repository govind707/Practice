import React, { Component } from 'react';
import {connect} from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    state = {
        persons: []
    }
    /*
    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.concat(newPerson)}
        } );
    }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }
    */
    render () {
        return (
            <div>
                <AddPerson personAdded={this.onAddPerson} />
                <ul>
                    {
                        this.per.map( person => <li onClick={()=>{this.onDelete(person.id)}}>{person.name}</li>)
                    }
                </ul>
                
            </div>
        );
    }
}
const mapToProps = state =>{
    return{
        per : this.state.persons
    }
}

const mapDispatchProps = dispatch => {
    return{
        onAddPerson: () => { dispatch({type:'AddPerson', age: Math.floor(Math.random()*35), id: Math.random()})},
        onDelete: (id) => {dispatch({type: 'Delete',eleId: id})}
    }
}
export default connect(mapToProps,mapDispatchProps)(Persons);