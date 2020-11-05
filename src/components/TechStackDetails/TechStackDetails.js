import React from 'react';
import styles from './TechStackDetails.module.scss'

const renderStack = (stack) => stack.map((stackItem) => (
  <span className={styles.stackItem}>
    {stackItem}
  </span>
));


const TechStackDetails = ({ stack }) => {
  return (
    <div className={styles.stackDetailsContainer}>
      <div className={styles.stack}>
        { renderStack(stack) }
      </div>
    </div>
  )
};

export default TechStackDetails;
