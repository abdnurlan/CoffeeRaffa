import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header_text} id="header">
        <h2>Coffee<span>Raffa</span></h2>
        <p>
          Siz də yeni qovrulmuş qəhvəni dadın! Öz Qovurmamız – Öz dadımız...!
        </p>
      </div>
    </>
  );
};

export default Header;
