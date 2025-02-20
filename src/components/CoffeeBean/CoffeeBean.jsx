import React from "react";
import styles from "./CoffeeBean.module.css";

const CoffeeBean = () => {
  return (
    <>
      <div className={styles.green_background}>
        <div className="container">
          <div className={styles.smoke_animation}>
            <div className={styles.image}>
              <img
                src="/assets/coffee-bean.png"
                alt="coffee"
                className={styles.coffeeImage}
              />
            </div>
            <div className={styles.smoke_wrap}>
              <img
                className={styles.smoke}
                src="/assets/coffee-smoke.png"
                alt="smoke"
              />
            </div>
            <div className={styles.smoke_wrap}>
              <img
                className={styles.smoke2}
                src="/assets/coffee-smoke.png"
                alt="smoke"
              />
            </div>
            <div className={styles.smoke_wrap}>
              <img
                className={styles.smoke3}
                src="/assets/coffee-smoke.png"
                alt="smoke"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeBean;
