import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Header from '../../components/Header/Header';
import Logo from '/assets/kaffa_logo.png';
import Logo_Light from '/assets/kaffa_logo_light.png';
import { FaBagShopping, FaBars, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../../features/cartSlice';

const Navbar = () => {
  const { cartTotalQuantity } = useSelector(state => state.cart)
  const cart = useSelector((state) => state.cart)
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [cart])

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = clicked ? 'hidden' : 'auto';
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [clicked]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <>
      <div className={styles.background}>
        <div className='container'>
          <div className={styles.navbar_header}>
            <div className={styles.navbar_medias}>
              <h4>Bizi İzləyin</h4>
              <div className={styles.line}></div>
              <a href="https://www.instagram.com/coffee.raffa/" target="_blank" onClick={closeMenu}>
                <div className={styles.navbar_media}>
                  <FaInstagram />
                </div>
              </a>
              <a href="" onClick={closeMenu}>
                <div className={styles.navbar_media}>
                  <FaYoutube />
                </div>
              </a>
            </div>
            <div className={`${styles.navbar_logo} ${styles.navbar_logo_main}`}>
              <img src={Logo} alt="logo" />
            </div>
            <div className={styles.navbar_basket}>
              <div className={styles.product_counter}>
                <span>{cartTotalQuantity}</span>
              </div>
              <Link to="/basket" onClick={closeMenu}>
                <div className={styles.navbar_basket_icon}>
                  <FaBagShopping />
                </div>
              </Link>
              <div className={`${styles.hamburger}`} onClick={handleClick}>
                {clicked ? '' : <FaBars className={styles.hamburger_icon} />}
              </div>
            </div>
          </div>
          <div className={`${styles.navbar_links} ${clicked ? `${styles.active}` : ''}`}>
            <div className={`${styles.times}`} onClick={handleClick}>
              {clicked ? <FaTimes className={styles.times_icon} /> : ''}
            </div>
            <div className={`${styles.navbar_links_logo} ${styles.navbar_logo}`}>
              <img src={Logo_Light} alt="logo" />
            </div>
            <div className={styles.navbar_mobile}>
              <ul>
                <li><a href="#header" onClick={closeMenu}>Ana Səhifə</a></li>
                <li><a href="#about" onClick={closeMenu}>Haqqımızda</a></li>
                <li><a href="#products" onClick={closeMenu}>Məhsullar</a></li>
                <li><a href="#contact" onClick={closeMenu}>Əlaqə</a></li>
              </ul>
              <div className={styles.basket_mobile}>
                <div className={styles.product_counter_mobile}>
                  <span>{cartTotalQuantity}</span>
                </div>
                <Link to="/basket" onClick={closeMenu}>
                  <div className={styles.basket_mobile_icon}>
                    <FaBagShopping />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Header></Header>
        </div>
      </div>
    </>
  );
}

export default Navbar;
