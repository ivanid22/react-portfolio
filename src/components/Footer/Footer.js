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
    <footer className={styles.footerContainer}>
      <SocialBar urls={urls} size="2x" />
      <a href="mailto:ivan@ivand.me" className={styles.emailBrand}>ivan@ivand.me</a>
    </footer>
  )
}

export default Footer;