import React from "react";
import styles from "./Header.module.scss";
import SkillsList from '../SkillsList/SkillsList'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerCentered}>
        <h2 className={styles.name}>Ivan Diaz</h2>
        <h3 className={styles.title}>Software Developer</h3>
        <div className={styles.paragraph}>
          I can help you build a product , feature or website Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don’t hestiate to contact me
        </div>
        <div className={`${styles.skills} row`}>
            <SkillsList heading="Languages">
                <span>HTML</span>
                <span>CSS</span>
                <span>Sass</span>
                <span>JavaScript</span>
                <span>Ruby</span>
            </SkillsList>
            <SkillsList heading="Frameworks">
                <span>Bootstrap</span>
                <span>Ruby on Rails</span>
                <span>RSpec / Capybara</span>
                <span>Node.js</span>
                <span>React/Redux</span>
                <span>Jest</span>
            </SkillsList>
        </div>
      </div>
    </div>
  );
};

export default Header;