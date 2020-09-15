import React, { Component } from 'react';
import classes from './BurgerIngredients.css';
//import './BurgerIngredients.css';
import PropTypes from 'prop-types';

class BurgerIngredients extends Component {
    render(){
        let ingredients = null;
        
    switch(this.props.type){
        case ('bread-bottom'):
            ingredients = <div className={classes.breadBottom}></div>;            
            break;
        case ('bread-top'):
            ingredients = (<div className={classes.breadTop}>
                               <div className={classes.seeds1}></div>
                               <div className={classes.seeds2}></div>
                            </div>);
            break;
        case ('meat') : 
            ingredients = <div className={classes.meat}></div> ;
            break;
        case ('salad'):
            ingredients = <div className={classes.salad}></div>;
            break;
        case ('bacon') :
            ingredients = <div className={classes.bacon}></div>;
            break;
        case ('cheese'):
            ingredients = <div className={classes.cheese}></div> ;
        
            break;    
        default: 
        ingredients = null;
            break;    

    }
    return ingredients;
    }
}

BurgerIngredients.propTypes ={
  type: PropTypes.string.isRequired
};

export default BurgerIngredients;