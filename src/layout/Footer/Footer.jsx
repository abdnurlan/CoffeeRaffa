import React from 'react'
import styles from './Footer.module.css'
import Logo from '/assets/kaffa_logo.png'
import { FaFacebookF, FaInstagram, FaLocationDot, FaPhoneVolume, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className={styles.footer_bg} id='contact'>
      <div className='container'>
        <div className={styles.footer_section}>
          <div className={styles.footer_social}>
            <div className={styles.footer_img}>
              <img src={Logo} alt="logo" />
            </div>
            <div className={styles.footer_text}>
              <p>Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo. Vestibulum mattis, nisi ut.</p>
            </div>
            <div className={styles.social_icons}>
              <FaFacebookF />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>
          <div className={styles.contact_info}>
            <div className={styles.contact_info_header}>Əlaqə</div>
            <div className={styles.contact_info_location}>
              <div className={styles.location_icon}>
                <FaLocationDot />
              </div>
              <div className={styles.location_link}>
                <h3>Ünvan : </h3>
                <h3>Bakı şəhəri, Nərimanov rayonu., Daş karxanası küç. 154</h3>
              </div>
            </div>
            <div className={styles.contact_phones}>
              <div className={styles.contact_phones_icon}>
                <FaPhoneVolume />
              </div>
              <div className={styles.contact_phones_link}>
                <h3>Phones : </h3>
                <h3 className={styles.contact_phones_number}>+994 50 888 20 60</h3>
                <h3 className={styles.contact_phones_number}>+994 55 888 20 60</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <div className='container'>
          <h6 className={styles.copyright_text}>Copyright © 2024 | Nurlan Abdullayev & Ayaz Dəmirov</h6>
        </div>
      </div>
    </div>
  )
}

export default Footer
