import React from 'react'
import styles from './PopularProduct.module.css'

const PopularProduct = () => {
  return (
    <div className='container'>
      <div className={styles.popular_product_container}>
        <div className={styles.header}>
            <div className={styles.header_h6}>
                <h6>Online Store</h6>
            </div>
            <div className={styles.header_h3}>
                <h3>Popular Product</h3>
            </div>
            <div className={styles.header_text}>
                <p>Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros. Aliquam eget sapien sed orci accumsan interdum at ac mi.</p>
            </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default PopularProduct
