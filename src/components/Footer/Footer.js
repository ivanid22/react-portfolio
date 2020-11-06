import React from 'react';
import SocialBar from '../SocialBar/SocialBar';
import styles from './Footer.module.scss';

const urls = {
  github: 'localhost',
  linkedin: 'localhost',
  twitter: 'localhost',
  angelist: 'localhost',
};

const Footer = () => {
  return(
    <div className={styles.footerContainer}>
      <SocialBar urls={urls} size="2x" />
      <p className={styles.emailBrand}>ivanid22@gmail.com</p>
    </div>
  )
}

export default Footer;