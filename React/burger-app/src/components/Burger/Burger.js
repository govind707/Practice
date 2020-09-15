import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
               .map(igkey =>{
                   return [...Array(props.ingredients[igkey])].map((_, i) =>{
                      return <BurgerIngredients key={igkey+i} type={igkey} />;
                   });
                })   
                   .reduce((arr, el)=>{
                       return arr.concat(el)
                   },[]);
               
if (transformedIngredients.length === 0){
    transformedIngredients = <p>Please start adding Ingredients</p>;
}
    return(
        <div className={classes.Burger}>
         <BurgerIngredients type='bread-top'></BurgerIngredients> 
        {transformedIngredients}
        <BurgerIngredients type='bread-bottom'></BurgerIngredients> 
        </div>
    )
};

export default burger;

