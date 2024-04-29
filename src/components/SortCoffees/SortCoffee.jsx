import React from 'react'
import styles from './SortCoffee.module.css'
import GreenCoffee from '../../assets/green_coffee.jpg'

const SortCoffee = () => {
  return (
    <>
      <div className={styles.background}>
        <div className='container'>
            <div className={styles.information}>
                <div className={styles.information_text}>
                    <p>Morbi eu varius neque, a ultricies sem. Fusce vitae convallis mi. Etiam dictum arcu posuere mauris <span style={{color: '#4d8b55'}}>semper accumsan</span>. Ut vel nibh a risus hendrerit efficitur. Integer ligula lacus, placerat et egestas vel, ultricies ac purus.</p>
                </div>
                <div className={styles.coffee_sorts}>
                    <div className={styles.coffee_sort}>
                        <div className={styles.coffee_image} style={{backgroundImage: `url(${GreenCoffee})`, backgroundPosition: '50%'}}>
                          
                        </div>
                        <div className={styles.coffee_number}>01</div>
                        <div className={styles.coffee_sort_name}>
                            <h4>Arabica Green</h4>
                        </div>
                        <div className={styles.coffee_sort_info}>
                            <p>Curabitur semper erat a lacus consequat, sit amet quam convallis.</p>
                        </div>
                    </div>
                    <div className={styles.coffee_sort}>
                        <div className={styles.coffee_image} style={{backgroundImage: `url(${GreenCoffee})`, backgroundPosition: '50%'}}>
                          
                        </div>
                        <div className={styles.coffee_number}>02</div>
                        <div className={styles.coffee_sort_name}>
                            <h4>Arabica Green</h4>
                        </div>
                        <div className={styles.coffee_sort_info}>
                            <p>Curabitur semper erat a lacus consequat, sit amet quam convallis.</p>
                        </div>
                    </div>
                    <div className={styles.coffee_sort}>
                        <div className={styles.coffee_image} style={{backgroundImage: `url(${GreenCoffee})`, backgroundPosition: '50%'}}>
                        </div>
                        <div className={styles.coffee_number}>03</div>
                        <div className={styles.coffee_sort_name}>
                            <h4>Arabica Green</h4>
                        </div>
                        <div className={styles.coffee_sort_info}>
                            <p>Curabitur semper erat a lacus consequat, sit amet quam convallis.</p>
                        </div>
                    </div>
                    <div className={styles.coffee_sort}>
                        <div className={styles.coffee_image} style={{backgroundImage: `url(${GreenCoffee})`, backgroundPosition: '50%'}}>
                        </div>
                        <div className={styles.coffee_number}>04</div>
                        <div className={styles.coffee_sort_name}>
                            <h4>Arabica Green</h4>
                        </div>
                        <div className={styles.coffee_sort_info}>
                            <p>Curabitur semper erat a lacus consequat, sit amet quam convallis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SortCoffee
