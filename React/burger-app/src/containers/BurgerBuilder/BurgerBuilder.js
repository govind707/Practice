import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
//import classes from './BurgerBuilder.css';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE ={
    salad: 36.73,
    cheese: 29.39,
    meat: 95.5,
    bacon: 51.42
}

class burgerBuilder extends Component{
    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0

        },
        totalPrice: 10,
        purchasable: false
    }

    updatePurchaseState (){
        const ingredients = {
            ...this.state.ingredients
        };
        const sum = Object.keys(ingredients)
        .map(igkey => {
            return ingredients[igkey];
        })
        .reduce((sum,el) => {
            return sum + el;
        },0);
        this.setState({purchasable: sum > 0  });
    }

    addIngredientHandler = (type) =>{

        const oldCount = this.state.ingredients[type];
        const updateedCount = oldCount +1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]=updateedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

    }

    removeIngredientHandler = (type) =>{

        const oldCount = this.state.ingredients[type];
        if(oldCount > 0){
            const updatedCount = oldCount -1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type]=updatedCount;
            const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
            this.setState({totalPrice: newPrice,ingredients:updatedIngredients});
        }
    }    

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<= 0
        }

        return(
            <div>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls
               price = {this.state.totalPrice}
               ingredientAdded = {this.addIngredientHandler}
               ingredientRemoved = {this.removeIngredientHandler}
               disabled={disabledInfo}
               purchasable= {this.state.purchasable}
            />
            </div>
        );
    }
}    

export default burgerBuilder;