import React from 'react'
import styles from './Basket.module.css'
import { Link } from 'react-router-dom'
import { FaBagShopping, FaPhoneVolume } from 'react-icons/fa6'
import Logo from '/assets/kaffa_logo.png'
import BasketHeader from './BasketHeader'

const BasketNavbar = () => {
  return (
    <div className={styles.basket_navbar_bg}>
      <div className={styles.black_bg}>
        <div className='container'>
            <div className={styles.basket_navbar}>
                <div className={styles.navbar_logo}>
                    <img src={Logo} alt="logo" />
                </div>
                <div className={styles.phone}>
                    <FaPhoneVolume />
                    <h4>0905-456-987-3</h4>
                </div>
                <div className={styles.navbar_basket}>
                    <div className={styles.product_counter}>
                        <span>1</span>
                    </div>
                    <Link to="/basket">
                        <div className={styles.navbar_basket_icon}>
                        <FaBagShopping/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
      </div>
      <BasketHeader/>
    </div>
  )
}

export default BasketNavbar
