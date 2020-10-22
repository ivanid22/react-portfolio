import React from 'react';
import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const classes = classNames.bind(styles);

const Navbar = ({ children, open, handleClose }) => {
  
  const className = classes({
    navbarOpen: open,
    navbar: true,
  });

  console.log(className);

  return (
    <div className={className}>
      <div className={styles.navbarHeader}>
        <button className={styles.closeButton} onClick={handleClose}>
          <FontAwesomeIcon icon={['fa', 'times']} />
        </button>
      </div>
      <div className={styles.shapeOne} />
      <div className={styles.shapeTwo} />
      { children }
      <FontAwesomeIcon icon="" />
    </div>
  )
}

export default Navbar;