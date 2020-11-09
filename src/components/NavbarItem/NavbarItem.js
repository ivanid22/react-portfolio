import React, { useContext } from 'react';
import styles from './NavbarItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CloseContext } from '../Navbar/Navbar'

const NavbarItem = ({children, scrollDestination}) => {
  const handleNavbarClose = useContext(CloseContext)
  
  const handleClick = () => {
    window.scrollTo({ behavior: 'smooth', top: scrollDestination.current.offsetTop });
    handleNavbarClose();
  }
  

  return (
    <div className={styles.navbarItem} onClick={handleClick}>
      {children}
      <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
    </div>
  )
}

export default NavbarItem;