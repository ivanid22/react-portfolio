import React from 'react';
import PropTypes from 'prop-types';
import { faGithub, faLinkedin, faTwitter, faAngellist } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialBar.module.scss';

const SocialBar = ({urls}) => {
  return (
    <div className={styles.socialBar}>
      <div className={styles.socialBarItem}>
        <a href={urls.github} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} size='lg' /> </a>
      </div>
      <div className={styles.socialBarItem}>
        <a href={urls.linkedin} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} size='lg' /> </a>
      </div>
      <div className={styles.socialBarItem}>
        <a href={urls.angelist} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faAngellist} size="lg" /> </a>
      </div>
      <div className={styles.socialBarItem}>
        <a href={urls.twitter} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTwitter} size='lg' /> </a>
      </div>
    </div>
  );
};

SocialBar.propTypes = {
  urls: PropTypes.objectOf(PropTypes.string),
};

export default SocialBar;
