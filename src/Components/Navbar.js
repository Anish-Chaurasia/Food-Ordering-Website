import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';




function Navbar() {

    const cart = useSelector(state => state.count)


    return (

        <div className={styles.navContainer}>

            <div className={styles.logo}>
                <NavLink to='/'> <img id={styles.logoimg} src="/images/logo.png" alt="logo" /></NavLink>
                <h3>FOOD <span> HUB</span></h3>
            </div>

            <div className={styles.navitemdiv2}>

                <ul className={styles.navitem}>


                    <li ><NavLink className={styles.btn} style={{ textDecoration: 'none' }} to="/">Home</NavLink></li>
                    <li ><NavLink className={styles.btn} style={{ textDecoration: 'none' }} to="/menu">Menu</NavLink></li>
                    <li ><NavLink className={styles.btn} style={{ textDecoration: 'none' }} to="/about">About</NavLink></li>
                    <li ><NavLink className={styles.btn} style={{ textDecoration: 'none' }} to="/contact">Contact</NavLink></li>



                </ul>

                <div className={styles.cartdiv}>
                    <li className={styles.cartlogo} ><NavLink style={{ textDecoration: "none" }} id={styles.cart} to="/cart"><IoCartOutline /></NavLink></li>
                    <p>{cart.length}</p></div>
            </div>
        </div>



    )
}

export default Navbar
