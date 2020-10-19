import React from 'react';
import styles from './NavbarItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const NavbarItem = ({children}) => {
  
  return (
    <div className={styles.navbarItem}>
      {children}
      <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
    </div>
  )
}

export default NavbarItem;