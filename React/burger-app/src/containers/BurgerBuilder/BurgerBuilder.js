import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import classes from './BurgerBuilder.css';

class burgerBuilder extends Component{
    render(){
        return(
            <div className={classes.Content}>
            <Burger/>
            <div>burger ingredients</div>
            </div>
        );
    }
}

export default burgerBuilder;