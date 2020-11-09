import React from 'react';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ScrollBrand.module.scss';

const brandClick = () => {
  const target = document.querySelector('#recentWorkSectionContainer');
  window.scrollTo({ behavior: 'smooth', top: target.offsetTop });
}


const ScrollBrand = ({ icon, caption }) => {
  return (
    <div className={styles.scrollBrand} onClick={brandClick}>
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

