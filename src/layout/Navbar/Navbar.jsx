import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Header from '../../components/Header/Header';
import Logo from '../../../public/assets/kaffa_logo.png';
import Logo_Light from '../../../public/assets/kaffa_logo_light.png';
import { FaBagShopping, FaBars, FaFacebookF, FaInstagram, FaSearchengin, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [clicked]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className={styles.background}>
        <div className='container'>
          <div className={styles.navbar_header}>
            <div className={styles.navbar_medias}>
              <h4>Follow us</h4>
              <div className={styles.line}></div>
              <a href="">
                <div className={styles.navbar_media}>
                  <FaTwitter />
                </div>
              </a>
              <a href="">
                <div className={styles.navbar_media}>
                  <FaFacebookF />
                </div>
              </a>
              <a href="">
                <div className={styles.navbar_media}>
                  <FaInstagram />
                </div>
              </a>
              <a href="">
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
                <span>1</span>
              </div>
              <Link to="/basket">
                <div className={styles.navbar_basket_icon}>
                  <FaBagShopping />
                </div>
              </Link>
              <div className={styles.search}>
                <FaSearchengin />
              </div>
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
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
                <li>Products</li>
              </ul>
              <div className={styles.basket_mobile}>
                <div className={styles.product_counter_mobile}>
                  <span>1</span>
                </div>
                <Link to="/basket">
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
