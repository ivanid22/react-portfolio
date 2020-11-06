import React from 'react';
import styles from './Button.module.scss';

const Button = ({ enabled, onClick, children, width, type }) => {
  console.log(styles);
  return(
    <button type={type ? type : 'button'} className={styles.button} disabled={!enabled} onClick={onClick} style={{width}}> 
      { children } 
    </button>
  )
};

export default Button;