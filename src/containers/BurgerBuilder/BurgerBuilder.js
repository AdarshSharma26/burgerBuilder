import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'; 
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    salad: 0.5,
    bacon : 0.7,
    cheese : 0.4,
    meat : 1.3
}

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice : 4,
        purchasable : false,
        purchasing : false
    }

    addIngredientHandler = (type , isRemove = false) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = isRemove ? (oldCount > 0 ? oldCount - 1 : oldCount) : oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newprice = isRemove ? (oldCount > 0 ? oldPrice-priceAddition : oldPrice) 
                        : oldPrice + priceAddition;
        this.setState({totalPrice : newprice , 
                        ingredients : updatedIngredients}, () => {
                            this.updatePurchasableState();
                        })

    }

    updatePurchasableState = () => {
        const ingredients = {...this.state.ingredients};
        const sum = Object.keys(ingredients).map(igkey => {
            return ingredients[igkey];
        }).reduce((sum,ele) => {
            return  sum + ele
        }, 0);
        this.setState({purchasable : sum > 0});
    }

    purchasingHandler = () => {
        this.setState({purchasing:true});
    }

    purchaseCancelhandler = () => {
        this.setState({purchasing : false})
    }

    continuePurchaseHandler = () => {
        alert("Continue!");
    }

    render(){
        const disabledInfo = { ...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelhandler}>
                    <OrderSummary ingredients = {this.state.ingredients}
                         cancelPurchase = {this.purchaseCancelhandler}
                         confrimPurchase = {this.continuePurchaseHandler}
                         totalPrice = {this.state.totalPrice}/>
                </Modal>
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    disabledInfo = {disabledInfo}
                    totalPrice = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    purchasingHandler = {this.purchasingHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;