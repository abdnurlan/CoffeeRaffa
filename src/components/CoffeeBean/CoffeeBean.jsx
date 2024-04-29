import React from 'react';
import styles from './CoffeeBean.module.css';
import Coffee from '../../assets/coffee-bean.png';
import Smoke from '../../assets/coffee-smoke.png'

const CoffeeBean = () => {
  return (
    <>
      <div className={styles.green_background}>
        <div className='container'>
            <div className={styles.smoke_animation}>
                <div className={styles.image}>
                    <img src={Coffee} alt="coffee" className={styles.coffeeImage} />
                </div>
                <div className={styles.smoke_wrap}>
                    <img className={styles.smoke} src={Smoke} alt="smoke" />
                </div>
                <div className={styles.smoke_wrap}>
                    <img className={styles.smoke2} src={Smoke} alt="smoke" />
                </div>
                <div className={styles.smoke_wrap}>
                    <img className={styles.smoke3} src={Smoke} alt="smoke" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeBean;
