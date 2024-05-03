import React, { useState, useEffect } from 'react';
import styles from './PopularProduct.module.css';
import Data from '../../data/data.json';

const PopularProduct = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [isChangingProduct, setIsChangingProduct] = useState(false); // State to track product change

  const fiveStarProducts = Data.filter(product => product.star === 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChangingProduct(true); // Trigger product change animation
      setTimeout(() => {
        setCurrentProductIndex(prevIndex =>
          prevIndex === fiveStarProducts.length - 1 ? 0 : prevIndex + 1
        );
        setIsChangingProduct(false); // Reset animation state after product change
      }, 500); // Adjust this timing according to your preference
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const emptyStars = totalStars - filledStars;
    const starFilled = '★';
    const starEmpty = '☆';

    return (
      <div className={styles.stars}>
        {[...Array(filledStars)].map((_, index) => (
          <span key={index} role="img" aria-label="filled-star">{starFilled}</span>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={index} role="img" aria-label="empty-star">{starEmpty}</span>
        ))}
      </div>
    );
  };

  const renderQualityList = (qualities) => (
    <div>
      <ul className={styles.quality_list}>
        {qualities.map((quality, index) => (
          <li key={index}>
            {quality}
          </li>
        ))}
      </ul>
    </div>
  );

  if (fiveStarProducts.length === 0) {
    return <div>No products with 5 stars found.</div>;
  }

  const currentProduct = fiveStarProducts[currentProductIndex];

  return (
    <div className='container'>
      <div className={styles.popular_product_container}>
        <div className={styles.header}>
          <div className={styles.header_h6}>
            <h6>Online Store</h6>
          </div>
          <div className={styles.header_h3}>
            <h3>Popular Product</h3>
          </div>
          <div className={styles.header_text}>
            <p>Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros. Aliquam eget sapien sed orci accumsan interdum at ac mi.</p>
          </div>
        </div>
        <div className={`${styles.popular_product_details} ${isChangingProduct ? styles.product_container_transition : ''}`}>
          <div className={styles.popular_product_image}>
            <img src={currentProduct.img} alt="" />
          </div>
          <div className={styles.popular_product_info}>
            {renderStars(currentProduct.star)}
            <div className={styles.product_name}>
              <h4>{currentProduct.name}</h4>
            </div>
            <div className={styles.product_description}>
              <p>{currentProduct.description}</p>
            </div>
            <div className={styles.product_quality}>
              {renderQualityList(currentProduct.quality)}
            </div>
            <div className={styles.product_prices}>
              {currentProduct.discount_price ? (
                <>
                  <div className={styles.original_price}>
                    <span>${currentProduct.price}</span>
                  </div>
                  <div className={styles.discount_price}>
                    <span>${currentProduct.discount_price}</span>
                  </div>
                </>
              ) : (
                <div className={styles.original_price_green}>
                  <span>${currentProduct.price}</span>
                </div>
              )}
            </div>
            <div className={styles.buttons}>
              <div className={`${styles.button}`}>Add to cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
