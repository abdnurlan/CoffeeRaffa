import React from 'react'
import styles from './Basket.module.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const BasketHeader = () => {
  return (
    <div className='container'>
      <div className={styles.basket_header}>
        <div className={styles.basket_span}>
            <span>PremiumCoffeeMarket</span>
        </div>
        <div className={styles.basket_header_text}>
            <h3>Cart</h3>
            <div className={styles.basket_header_links}>
                <Link to={'/'}><h6>Home</h6></Link>
                <h6>//</h6>
                <h6>Cart</h6>
            </div>
        </div>
        <div className={styles.basket_header_social}>
            <FaYoutube />
            <FaTwitter />
            <FaInstagram />
            <FaFacebookF />
        </div>
      </div>
    </div>
  )
}

export default BasketHeader
