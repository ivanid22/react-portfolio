import React from 'react';
import styles from './NavSocial.module.scss';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavSocial = () => {
  return(
    <div className={styles.navSocial}>
      <span className={styles.navSocialItem}>
        Portfolio
      </span>
      <span className={styles.navSocialItem}>
        About
      </span>
      <span className={styles.navSocialItem}>
        Contact
      </span>
      <span className={styles.navSocialItem}>
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </span>
    </div>
  )
}

export default NavSocial;