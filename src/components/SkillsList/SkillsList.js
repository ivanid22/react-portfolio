import React from "react";
import styles from "./SkillsList.module.scss";

const SkillsList = ({ heading, children }) => {
  const renderChildren = () => {
    return children.map(child => (
      <li className={styles.skill}>
          {child}
      </li>
    ))
  }
  
  return (
    <div className={`${styles.skillsList} col-6 col-lg-4`}>
      <h4>{heading}</h4>
      <ul className={styles.list}>
        { renderChildren() }
      </ul>
    </div>
  );
};

export default SkillsList;
