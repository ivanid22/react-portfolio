import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router';
import styles from './NavbarItem.module.css';

const NavbarItem = ({children}) => {
  
  return (
    <div className={styles.navbarItem}>
      {children}
    </div>
  )
}
