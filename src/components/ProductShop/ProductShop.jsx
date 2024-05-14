import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductShop.module.css';
import Data from '../../data/data.json';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';

const ProductShop = () => {
    const [displayCount, setDisplayCount] = useState(4);
    const [isLoading, setIsLoading] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        setCartOpen(true);
    };

    const renderStars = (rating) => {
        const totalStars = 5;
        const filledStars = Math.floor(rating);
        const starFilled = '★';
        const starEmpty = '☆';

        return (
            <div className={styles.stars}>
                {[...Array(totalStars)].map((_, index) => (
                    <span key={index} role="img" aria-label={index < filledStars ? "filled-star" : "empty-star"}>
                        {index < filledStars ? starFilled : starEmpty}
                    </span>
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
                            <div className={styles.product_img_container}>
                                <img src={product.img} alt={product.name} />
                                <div className={styles.product_shadow}></div>
                                {cartOpen ? (
                                    <Link to="/basket" className={styles.hover_btn}>
                                        View Cart
                                    </Link>
                                ) : (
                                    <div className={styles.hover_btn} onClick={() => handleAddToCart(product)}>
                                        Add to Cart
                                    </div>
                                )}
                            </div>
                            <div className={styles.product_info}>
                                {renderStars(product.star)}
                                <h3>{product.name}</h3>
                                <div className={styles.product_prices}>
                                    {product.discount_price ? (
                                        <>
                                            <div className={`${styles.original_price} ${product.discount_price ? '' : styles.original_price_green}`}>
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
                                {cartOpen ? (
                                    <Link to="/basket" className={styles.hover_btn_mobile}>
                                        View Cart
                                    </Link>
                                ) : (
                                    <div className={styles.hover_btn_mobile} onClick={() => handleAddToCart(product)}>
                                        Add to Cart
                                    </div>
                                )}
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
