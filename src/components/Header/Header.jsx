import React from 'react'
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <div className={styles.header_text}>
        <h2>Natural</h2>
        <h2>Brazilian Coffee</h2>
        <p>Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
      </div>
    </>
  )
}

export default Header
