import React from 'react';
import classes from './BuildControls.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Burger price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(cltr => (
            <BuildControl key={cltr.label}
                label={cltr.label}
                added={() => props.ingredientAdded(cltr.type)}
                removed={() => props.ingredientAdded(cltr.type, true)}
                disabled={props.disabledInfo[cltr.type]}
            />
        ))}
        <button disabled = {!props.purchasable} className={classes.OrderButton}
            onClick = {props.purchasingHandler}>Order Now</button>
    </div>
);
export default buildControls;