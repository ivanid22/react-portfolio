import React from 'react';
import SocialBar from '../SocialBar/SocialBar';
import styles from './Footer.module.scss';

const urls = {
  github: 'https://github.com/ivanid22',
  linkedin: 'https://linkedin.com/in/ivanid22',
  twitter: 'https://www.twitter.com/ivanid22',
  angelist: 'https://angel.co/u/ivan-diaz-12',
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