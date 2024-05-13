import React from 'react'
import styles from './Basket.module.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { CiCircleRemove } from 'react-icons/ci'

const BasketDashboard = () => {
  const cart = useSelector((state) => state.cart)

  return (
    <div className='container'>
      <div className={styles.dashboard}>
        {cart.cartItems.length === 0 ? (
          <div>
            <div className={styles.empty_basket}>
              <p>Your cart currently empty</p>
            </div>
            <div className={styles.return_shop}>
              <Link to='/'><button>Return to shop</button></Link>
            </div>
          </div>
        ) : (
          <table className={styles.product_table} border="0">
            <thead>
              <tr>
                <th className={styles.gap}></th>
                <th className={styles.gap}></th>
                <th className={styles.product_price}>Product</th>
                <th className={styles.product_name}>Price</th>
                <th className={styles.product_quantity}>Quantity</th>
                <th className={styles.product_price}>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.cartItems?.map(cartItem => (
                <tr key={cartItem.id}>
                  <td className={styles.remove}><CiCircleRemove /></td>
                  <td className={styles.product_img}><img src={cartItem.img} alt={cartItem.name} /></td>
                  <td className={styles.product_name}>{cartItem.name}</td>
                  <td className={styles.product_price}>{cartItem.price}</td>
                  <td className={styles.product_quantity}>
                    <div className={styles.quantity_container}>
                      <div className={styles.quantity_number}>{cartItem.cartQuantity}</div>
                      <div className={styles.quantity_buttons}>
                        <div><FaAngleUp /></div>
                        <div><FaAngleDown /></div>
                      </div>
                    </div>
                  </td>
                  <td className={styles.product_price}>{cartItem.price * cartItem.cartQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default BasketDashboard