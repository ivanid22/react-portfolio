import React from 'react';
import styles from './NavigationItem.module.scss';

const NavigationItem = ({ children }) => {
  return(
    <div className={styles.itemNavigation}>
        <span className={styles.itemNavigationItem}>
            {children}
        </span>
    </div>
  )
}

export default NavigationItem;

