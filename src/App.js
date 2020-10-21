import React, { useState } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faChevronRight, faBars } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar/Navbar';
import NavbarItem from './components/NavbarItem/NavbarItem';
import NavigationItem from './components/NavigationItem/Navigationitem';
import Nav from './components/Nav/Nav';
import styles from './Portfolio.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faTimes, faChevronRight, faBars);

function App() {

  const [navOpen, setNavOpen] = useState(false);

  console.log(styles)

  return (
    <div>
      <Navbar open={navOpen} handleClose={() => setNavOpen(false)}>
        <NavbarItem>Portfolio</NavbarItem>
        <NavbarItem>About</NavbarItem>
        <NavbarItem>Contact</NavbarItem>
      </Navbar>
      <Nav>
        <NavigationItem>
          <span className={styles.navBrand}>Ivan Diaz</span>
        </NavigationItem>
        <NavigationItem>
          <div className={styles.navBarToggle} onClick={() => setNavOpen(!navOpen)}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
        </NavigationItem>
      </Nav>
    </div>
  );
}

export default App;
