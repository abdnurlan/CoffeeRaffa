import React, { useState } from 'react';
import styles from './ProductShop.module.css';
import Data from '../../data/data.json';

const ProductShop = () => {
    const [displayCount, setDisplayCount] = useState(4);
    const [isLoading, setIsLoading] = useState(false);

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

    const handleShowMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setDisplayCount(prevCount => prevCount + 4);
            setIsLoading(false);
        }, 2000); 
    };

    return (
        <div className='container'>
            <div className={styles.shop_container}>
                <div className={styles.products_list}>
                    {Data.slice(0, displayCount).map(product => (
                        <div key={product.id} className={styles.product}>
                            <img src={product.img} alt={product.name} />
                            <div className={styles.product_info}>
                                <div className={styles.stars}>
                                    {renderStars(product.star)}
                                </div>
                                <h3>{product.name}</h3>
                                <div className={styles.product_prices}>
                                    {product.discount_price ? (
                                        <>
                                            <div className={styles.original_price}>
                                                <span>{`$${product.price}`}</span>
                                            </div>
                                            <div className={styles.discount_price}>
                                                <span>{`$${product.discount_price}`}</span>
                                            </div>
                                        </>
                                    ) : (
                                        <div className={styles.original_price_green}>
                                            <span>{`$${product.price}`}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {Data.length > displayCount && (
                    <div className={styles.button} onClick={handleShowMore}>
                        {isLoading ? "Loading..." : "Show More"}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductShop;
