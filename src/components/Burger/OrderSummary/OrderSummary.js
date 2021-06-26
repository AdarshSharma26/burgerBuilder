import React, { Component } from 'react'; 
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate(){
        
    }

    render (){
        const ingredientSummary = Object.keys(this.props.ingredients).map((igKey,index) => {
            return(<li key = {index}><span style={{textTransform:'capitalize'}}>{igKey}</span>
                  :{this.props.ingredients[igKey]}</li>);
          })

        return (
            <Aux>
            <h3>Your Order:</h3>
            <p>A delicious  burger is ready with following ingredients:
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Only for ${this.props.totalPrice.toFixed(2)}</strong></p>    
                <p>Ready to checkout?</p>
                <Button btnType ="Success" clicked = {this.props.cancelPurchase}>Cancel</Button>
                <Button btnType ="Danger" clicked = {this.props.confrimPurchase}>Continue</Button>
            </p>
        </Aux>
        );
    }
};

export default OrderSummary;