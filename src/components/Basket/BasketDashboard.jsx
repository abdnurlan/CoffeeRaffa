import React, { useEffect } from 'react';
import styles from './Basket.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { CiCircleRemove } from 'react-icons/ci';
import { addToCart, decreaseCart, removeFromCart, changeGrammage, getTotals, resetCart } from '../../features/cartSlice';

const grammages = ["0.250kg", "0.500kg", "1kg"];

const BasketDashboard = () => {
  const cart = useSelector((state) => state.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleGrammageChange = (cartItem, direction) => {
    const currentGrammageIndex = grammages.indexOf(cartItem.grammage);
    let newGrammageIndex = currentGrammageIndex;

    if (direction === 'up' && currentGrammageIndex < grammages.length - 1) {
      newGrammageIndex += 1;
    } else if (direction === 'down' && currentGrammageIndex > 0) {
      newGrammageIndex -= 1;
    }

    const newGrammage = grammages[newGrammageIndex];
    dispatch(changeGrammage({ id: cartItem.id, grammage: newGrammage }));
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const generateWhatsAppMessage = () => {
    const message = cart.cartItems.map(item => `${item.name}: ${item.cartQuantity} × ${item.grammage} = ${(item.price * item.cartQuantity).toFixed(2)} ₼`).join('%0A%0A');
    const totalPrice = `Ümumi qiymət: ${cartTotalAmount.toFixed(2)} ₼`;
    const whatsappLink = `https://wa.me/+994508882060/?text=${encodeURIComponent(`Sifariş Detalları:\n\n${message}\n\n${totalPrice}`)}`;

    window.open(whatsappLink, '_blank');

    setTimeout(() => {
      dispatch(resetCart());
    }, 1000);
  };

  return (
    <div className='container'>
      <div className={styles.dashboard}>
        {cart.cartItems.length === 0 ? (
          <div>
            <div className={styles.empty_basket}>
              <p>Səbətiniz boşdur.</p>
            </div>
            <div className={styles.return_shop}>
              <Link to='/'><button>Geri dön</button></Link>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.table_container}>
              <table className={styles.product_table}>
                <thead>
                  <tr>
                    <th className={styles.gap}></th>
                    <th className={styles.gap}></th>
                    <th className={styles.product_price}>Məhsul</th>
                    <th className={styles.product_name}>Qiymət</th>
                    <th className={styles.product_quantity}>Say</th>
                    <th className={styles.product_price}>Ölçü</th>
                    <th className={styles.product_price}>Cəm</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.cartItems?.map(cartItem => (
                    <tr key={cartItem.id}>
                      <td className={styles.remove} onClick={() => handleRemoveFromCart(cartItem)}><CiCircleRemove /></td>
                      <td className={styles.product_img}><img src={cartItem.img} alt={cartItem.name} /></td>
                      <td className={styles.product_name}>{cartItem.name}</td>
                      <td className={styles.product_price}>{cartItem.price} ₼</td>
                      <td className={styles.product_quantity}>
                        <div className={styles.quantity_container}>
                          <div className={styles.quantity_number}>{cartItem.cartQuantity}</div>
                          <div className={styles.quantity_buttons}>
                            <div onClick={() => handleIncreaseCart(cartItem)}><FaAngleUp /></div>
                            <div onClick={() => handleDecreaseCart(cartItem)}><FaAngleDown /></div>
                          </div>
                        </div>
                      </td>
                      <td className={styles.product_quantity}>
                        <div className={styles.grammage_container}>
                          <div className={styles.quantity_number}>{cartItem.grammage}</div>
                          <div className={styles.quantity_buttons}>
                            <div onClick={() => handleGrammageChange(cartItem, 'up')}><FaAngleUp /></div>
                            <div onClick={() => handleGrammageChange(cartItem, 'down')}><FaAngleDown /></div>
                          </div>
                        </div>
                      </td>
                      <td className={styles.product_subtotal}>{(cartItem.price * cartItem.cartQuantity).toFixed(2)} ₼</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table className={styles.product_total_price}>
                <thead>
                  <tr>
                    <th>Ümumi qiymət</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{cartTotalAmount.toFixed(2)} ₼</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.non_table_container}>
              {cart.cartItems?.map(cartItem => (
                <div key={cartItem.id} className={styles.cart_item}>
                  <button onClick={() => handleRemoveFromCart(cartItem)} className={styles.remove_button}><CiCircleRemove /></button>
                  <div className={styles.product_info}>
                    <div className={styles.product_info_text}>
                      <p>Məhsul :</p>
                      <p className={styles.product_name}>{cartItem.name}</p>
                    </div>
                    <div className={styles.product_info_text}>
                      <p>Qiymət :</p>
                      <p className={styles.product_price}>{cartItem.price} ₼</p>
                    </div>
                    <div className={styles.product_info_text}>
                      <p>Say :</p>
                      <div className={styles.quantity_container}>
                        <div className={styles.quantity_number}>{cartItem.cartQuantity}</div>
                        <div className={styles.quantity_buttons}>
                          <div onClick={() => handleIncreaseCart(cartItem)}><FaAngleUp /></div>
                          <div onClick={() => handleDecreaseCart(cartItem)}><FaAngleDown /></div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.product_info_text}>
                      <p>Ölçü :</p>
                      <div className={styles.grammage_container}>
                        <div className={styles.quantity_number}>{cartItem.grammage}</div>
                        <div className={styles.quantity_buttons}>
                          <div onClick={() => handleGrammageChange(cartItem, 'up')}><FaAngleUp /></div>
                          <div onClick={() => handleGrammageChange(cartItem, 'down')}><FaAngleDown /></div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.product_info_text}>
                      <p>Cəm :</p>
                      <p className={styles.product_subtotal}>{(cartItem.price * cartItem.cartQuantity).toFixed(2)} ₼</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className={styles.total_price}>
                <p>Ümumi qiymət : {cartTotalAmount.toFixed(2)} ₼</p>
              </div>
            </div>
            <div className={styles.let_order}>
              <button onClick={generateWhatsAppMessage}>Sifariş et</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BasketDashboard;
