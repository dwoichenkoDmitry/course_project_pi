import React from 'react';
import classes from "./Navbar.module.css";
import Logo from './img/logo.png';
import Profile from './img/profile.svg'

const Navbar = () => {
    return (
        <div className={classes.header}>
            <img src={Logo} className={classes.logoImg} alt="logo"/>

            <div className={classes.profileContainer}>
                <img className={classes.logoImg} src={Profile} alt=""/>
                <p className={classes.profileText}>Профиль</p>
            </div>
        </div>
    );
};

export default Navbar;