import React from 'react';
import styles from './Navbar.module.css'
import classNames from 'classnames/bind';

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
        <button className={styles.closeButton} onClick={handleClose}>x</button>
      </div>
      <div className={styles.shapeOne} />
      <div className={styles.shapeTwo} />
      { children }
    </div>
  )
}

export default Navbar;