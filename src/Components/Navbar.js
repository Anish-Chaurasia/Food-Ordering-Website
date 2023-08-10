import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';




function Navbar() {
    return (
        <div className={styles.navContainer}>
            <div className={styles.logo}>
                <NavLink to='/'> <img id={styles.logoimg} src="/images/logo.png" alt="logo" /></NavLink>
                <h3>FOOD HUB</h3>
            </div>


            <ul>
                <div className={styles.navitem}>

                    <li className={styles.innerNavItem}><NavLink className={styles.btn} style={{ textDecoration: 'none' }} to="/">Home</NavLink></li>
                    <li className={styles.innerNavItem}><NavLink className={styles.btn} style={{ textDecoration: 'none' }} to="/menu">Menu</NavLink></li>
                    <li className={styles.innerNavItem}><NavLink className={styles.btn} style={{ textDecoration: 'none' }} to="/about">About</NavLink></li>
                    <li className={styles.innerNavItem}><NavLink className={styles.btn} style={{ textDecoration: 'none' }} to="/contact">Contact</NavLink></li>
                    <li className={styles.innerNavItem}><NavLink className={styles.btn} style={{ textDecoration: 'none' }} to="/gallery">Gallery</NavLink></li>
                </div>
            </ul>
        </div>



    )
}

export default Navbar
