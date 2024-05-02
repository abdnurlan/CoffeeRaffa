import React, { useRef, useState } from 'react';
import styles from './ProductDescription.module.css';
import Stamp from '../../../public/assets/stamp.png'

const ProductDescription = () => {
  const [coffeeBackgroundPosition, setCoffeeBackgroundPosition] = useState('center');
  const [coffeeBackgroundSize, setCoffeeBackgroundSize] = useState('100% auto');
  const [girlBackgroundPosition, setGirlBackgroundPosition] = useState('center');
  const [girlBackgroundSize, setGirlBackgroundSize] = useState('100% auto');
  const coffeeRef = useRef(null);
  const girlRef = useRef(null);

  const handleCoffeeMouseMove = (e) => {
    const boundingRect = coffeeRef.current.getBoundingClientRect();
    const posX = e.clientX - boundingRect.left + 5;
    const posY = e.clientY - boundingRect.top + 5;
    setCoffeeBackgroundPosition(`-${posX / 15}px ${posY / 10}px`);
    setCoffeeBackgroundSize('110% auto');
  };

  const handleGirlMouseMove = (e) => {
    const boundingRect = girlRef.current.getBoundingClientRect();
    const posX = e.clientX - boundingRect.left;
    const posY = e.clientY - boundingRect.top;
    setGirlBackgroundPosition(`-${posX / 15}px ${posY / 10}px`);
    setGirlBackgroundSize('110% auto');
  };

  const handleMouseLeave = () => {
    setCoffeeBackgroundPosition('center');
    setCoffeeBackgroundSize('100% auto'); 
    setGirlBackgroundPosition('center');
    setGirlBackgroundSize('100% auto');
  };

  return (
    <>
      <div className={styles.description_container}>
        <div
          ref={coffeeRef}
          className={styles.coffee_image}
          onMouseMove={handleCoffeeMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundPosition: coffeeBackgroundPosition, backgroundSize: coffeeBackgroundSize }}
        >
          <img src={Stamp} alt="stamp" className={styles.stamp} />
        </div>
        <div className={styles.green_bg}>
          <div className={styles.branch_bg}>
            <div className={styles.description}>
              <div className={styles.h2_black}>
                <h2>Divine</h2>
              </div>
              <div className={styles.h2_white}>
                <h2>Aroma</h2>
              </div>
              <div className={styles.h2_white}>
                <h2>in Every Cup</h2>
              </div>
              <div className={styles.text}>
                <p>Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros.</p>
              </div>
              <div className={`${styles.button} ${styles.read_more}`}>Read More</div>
            </div>
          </div>
        </div>
        <div className={styles.girl_image}
            onMouseMove={handleGirlMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundPosition: girlBackgroundPosition, backgroundSize: girlBackgroundSize }}
            ref={girlRef}
        ></div>
      </div>
    </>
  );
};

export default ProductDescription;
