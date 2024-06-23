import React from 'react'
import styles from './Basket.module.css'
import { FaInstagram, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const BasketHeader = () => {
  return (
    <div className='container'>
      <div className={styles.basket_header}>
        <div className={styles.basket_span}>
            <span>PremiumCoffeeMarket</span>
        </div>
        <div className={styles.basket_header_text}>
            <h3>Səbət</h3>
            <div className={styles.basket_header_links}>
                <Link to={'/'}><h6>Ana səhifə</h6></Link>
                <h6>//</h6>
                <h6>Səbət</h6>
            </div>
        </div>
        <div className={styles.basket_header_social}>
            <Link to="https://www.youtube.com/@elnurtarverdiyev3941"><FaYoutube /></Link>
            <Link to="https://www.instagram.com/coffee.raffa/"><FaInstagram /></Link>
        </div>
      </div>
    </div>
  )
}

export default BasketHeader
