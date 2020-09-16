import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';

import Button from '../../UI/Button/Button';

class Ordersummary extends Component {

    componentWillUpdate(){
        console.log ('[ordersummary will update');
    }

    render(){


        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igkey => {
                return (
                    <li key={igkey}>
                        <span style={{ textTransform: 'capitalize'}}>{igkey} </span>: {this.props.ingredients[igkey]}
                    </li>
                );
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious Burger with the following Ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
        <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Continue to checkout</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        );
    }
    
    
    
};


export default Ordersummary;