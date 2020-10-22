import React from 'react';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ScrollBrand.module.scss';

const ScrollBrand = ({ icon, caption }) => {
  return (
    <div className={styles.scrollBrand}>
      <FontAwesomeIcon icon={icon} size="lg" />
      <span>{caption}</span>
    </div>
  );
};

ScrollBrand.propTypes = {
  icon: PropTypes.func,
  caption: PropTypes.string,
}

export default ScrollBrand;

