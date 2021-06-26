import React from 'react';
import Logo from '../../UI/Logo/Logo';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
    return(
        <Aux>
        <Backdrop show = {false} />
        <div className= {classes.SideDrawer}>
           <div className = {classes.Logo}>
            <Logo/>
           </div>
            <nav>
                <NavigationItem />
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;