import React, { useState } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faChevronRight, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/js/bootstrap';

import Navbar from './components/Navbar/Navbar';
import NavbarItem from './components/NavbarItem/NavbarItem';
import NavigationItem from './components/NavigationItem/Navigationitem';
import Nav from './components/Nav/Nav';
import NavSocial from './components/NavSocial/NavSocial';
import Header from './components/Header/Header';
import styles from './Portfolio.module.scss';
import RecentWorkSection from './components/RecentWorkSection/RecentWorkSection';
import ContactSection from './components/ContactSection/ContactSection';

library.add(faTimes, faChevronRight, faBars);

function App() {

  const [navOpen, setNavOpen] = useState(false);

  console.log(styles)

  return (
    <div className={`${styles.mainContainer} container`}>
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
          <NavSocial />
        </NavigationItem>
        <div className={styles.navBarToggle} onClick={() => setNavOpen(!navOpen)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      </Nav>
      <Header />
      <RecentWorkSection />
      <ContactSection />
    </div>
  );
}

export default App;
