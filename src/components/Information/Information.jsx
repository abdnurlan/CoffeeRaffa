import React from 'react';
import styles from './Information.module.css';
import Information_Girl from '../../../public/assets/information_girl.jpg';
import { FaFileAlt, FaPhoneSquareAlt } from 'react-icons/fa';

const Information = () => {
  return (
    <>
      <div className='container'>
        <div className={styles.information}>
          <div className={styles.texts}>
            <div className={`${styles.green_word} ${styles['h3']}`}>
              <h3>Arabica & Robusta</h3>
            </div>
            <div className={styles['h3']}>
              <h3>Exclusive Planted Coffee</h3>
            </div>
            <div className={styles.paragraph}>
              <p>Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros. Aliquam eget sapien sed orci accumsan interdum at ac m lorem ut ante pulvinar finibus non non metusi.</p>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <FaFileAlt className={styles.svg} />
                <h6>Download price</h6>
              </div>
              <div className={styles.icon}>
                <FaPhoneSquareAlt className={styles.svg} />
                <h6>3-068-387-01-39</h6>
              </div>
            </div>
            <div className={styles.buttons}>
                <div className={`${styles.button} ${styles.read_more}`}>Read More</div>
                <div className={`${styles.button} ${styles.shop_now}`}>Show Now</div>
            </div>
          </div>
          <div className={styles.images}>
                <div className={styles.heading_inner}>
                    <h5>since</h5>
                    <h3>1967</h3>
                </div>
            <img src={Information_Girl} alt="girl" className='girl_image' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
