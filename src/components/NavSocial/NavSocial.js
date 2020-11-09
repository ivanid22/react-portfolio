import React from 'react';
import styles from './NavSocial.module.scss';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const onItemClick = (dest) => {
  const destElement = document.querySelector(dest);
  window.scrollTo({ behavior: 'smooth', top: destElement.offsetTop});
}


const NavSocial = () => {
  return(
    <div className={styles.navSocial}>
      <span className={styles.navSocialItem} onClick={() => onItemClick('#recentWorkSectionContainer')}>
        Portfolio
      </span>
      <span className={styles.navSocialItem} onClick={() => onItemClick('#top')}>
        About
      </span>
      <span className={styles.navSocialItem} onClick={() => onItemClick('#contactSectionContainer')}>
        Contact
      </span>
      <a href="mailto:ivan@ivand.me" className={styles.navSocialItem}>
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    </div>
  )
}

export default NavSocial;