import React from 'react'
import styles from './Basket.module.css'

const BasketDashboard = () => {
  return (
    <div className='container'>
      <div className={styles.dashboard}>
        <div className={styles.empty_basket}>
          <p>Your cart currently empty</p>
        </div>
        <div className={styles.return_shop}>
          <button>Return to shop</button>
        </div>
      </div>
    </div>
  )
}

export default BasketDashboard