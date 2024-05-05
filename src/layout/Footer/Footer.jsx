import React from 'react'
import styles from './Footer.module.css'
import Logo from '../../../public/assets/kaffa_logo.png'
import { FaFacebookF, FaInstagram, FaLocationDot, FaPhoneVolume, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className={styles.footer_bg}>
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
              <FaTwitter />
              <FaFacebookF />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>
          <div className={styles.contact_info}>
            <div className={styles.contact_info_header}>Contact Info</div>
            <div className={styles.contact_info_location}>
              <div className={styles.location_icon}>
                <FaLocationDot />
              </div>
              <div className={styles.location_link}>
                <h3>Our location : </h3>
                <h3>Rio de Janeiro, RJ Brazil, 04103 Route</h3>
              </div>
            </div>
            <div className={styles.contact_phones}>
              <div className={styles.contact_phones_icon}>
                <FaPhoneVolume />
              </div>
              <div className={styles.contact_phones_link}>
                <h3>Phones : </h3>
                <h3>+994 55 555 55 55</h3>
              </div>
            </div>
          </div>
          <div className={styles.subscribe}>
            <div className={styles.contact_info_header}>Subscribe</div>
            <div className={styles.contact_info_location}>
              <div className={styles.location_icon}>
                <FaLocationDot />
              </div>
              <div className={styles.location_link}>
                <h3>Our location : </h3>
                <h3>Rio de Janeiro, RJ Brazil, 04103 Route</h3>
              </div>
            </div>
            <div className={styles.contact_phones}>
              <div className={styles.contact_phones_icon}>
                <FaPhoneVolume />
              </div>
              <div className={styles.contact_phones_link}>
                <h3>Phones : </h3>
                <h3>+994 55 555 55 55</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <div className='container'>
          <h6 className={styles.copyright_text}>Copyright © 2024 | Nurlan Abdullayev</h6>
        </div>
      </div>
    </div>
  )
}

export default Footer
