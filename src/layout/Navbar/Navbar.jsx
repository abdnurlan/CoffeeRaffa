import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import {
  FaBagShopping,
  FaBars,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { getTotals } from "../../features/cartSlice";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = clicked ? "hidden" : "auto";
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "auto";
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
        <div className="container">
          <div className={styles.navbar_header}>
            <div className={styles.navbar_medias}>
              <h4>Bizi İzləyin</h4>
              <div className={styles.line}></div>
              <a
                href="https://www.instagram.com/coffee.raffa/"
                target="_blank"
                onClick={closeMenu}
              >
                <div className={styles.navbar_media}>
                  <FaInstagram />
                </div>
              </a>
              <a
                href="https://www.youtube.com/@elnurtarverdiyev3941"
                target="_blank"
                onClick={closeMenu}
              >
                <div className={styles.navbar_media}>
                  <FaYoutube />
                </div>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61561011951111&mibextid=ZbWKwL"
                target="_blank"
                onClick={closeMenu}
              >
                <div className={styles.navbar_media}>
                  <FaFacebook />
                </div>
              </a>
            </div>
            <Link to="/">
              <div
                className={`${styles.navbar_logo} ${styles.navbar_logo_main}`}
              >
                <img src="/assets/kaffa_logo.png" alt="logo" />
              </div>
            </Link>
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
                {clicked ? "" : <FaBars className={styles.hamburger_icon} />}
              </div>
            </div>
          </div>
          <div
            className={`${styles.navbar_links} ${
              clicked ? `${styles.active}` : ""
            }`}
          >
            <div className={`${styles.times}`} onClick={handleClick}>
              {clicked ? <FaTimes className={styles.times_icon} /> : ""}
            </div>
            <Link to="/">
              <div
                className={`${styles.navbar_links_logo} ${styles.navbar_logo}`}
              >
                <img src="/assets/kaffa_logo.png" alt="logo" />
              </div>
            </Link>
            <div className={styles.navbar_mobile}>
              <ul>
                <li>
                  <a href="#header" onClick={closeMenu}>
                    Ana Səhifə
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={closeMenu}>
                    Haqqımızda
                  </a>
                </li>
                <li>
                  <a href="#products" onClick={closeMenu}>
                    Məhsullar
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={closeMenu}>
                    Əlaqə
                  </a>
                </li>
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
};

export default Navbar;
