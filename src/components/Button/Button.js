import React from 'react';
import styles from './Button.module.css'

const Button = ({ enabled, size, onClick, children }) => {
  console.log(styles);
  return(
    <button className={styles.button} disabled={!enabled} onClick={onClick}> { children } </button>
  )
};

export default Button;