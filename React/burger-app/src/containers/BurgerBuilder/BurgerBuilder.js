import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import classes from './BurgerBuilder.css';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        purchasing: false,
        purchasable: false
    }

    updatePurchaseState (ingredients){
        //const ingredients = {
           // ...this.state.ingredients
        //};
        const sum = Object.keys(ingredients)
        .map(igkey => {
            return ingredients[igkey];
        })
        .reduce((sum,el) => {
            return sum + el;
        },0);
        this.setState({purchasable: sum > 0, purchasing: sum > 0  });
    }

    purchaseHandler = () =>{
        this.setState({purchasing : true});
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing : false})
    }

    purchaseContinueHandler = () =>{
        alert('You Continue');
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
        this.updatePurchaseState(updatedIngredients);

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
            this.updatePurchaseState(updatedIngredients);
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
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}><OrderSummary price={this.state.totalPrice.toFixed(2)} ingredients={this.state.ingredients}></OrderSummary> </Modal>  
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                price = {this.state.totalPrice}
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable= {this.state.purchasable}
                />
            </Aux>
        );
    }
}    

export default burgerBuilder;