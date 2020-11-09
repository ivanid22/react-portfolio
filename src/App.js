import React, { useState, useRef } from 'react';
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
import Footer from './components/Footer/Footer';

library.add(faTimes, faChevronRight, faBars);

function App() {

  const recentWorkSectionRef = useRef();
  const contactSectionRef = useRef();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={`${styles.mainContainer} container`}>
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
      <div ref={recentWorkSectionRef}> <RecentWorkSection ref={recentWorkSectionRef} /> </div>
      <div ref={contactSectionRef}> <ContactSection /> </div>
      <Footer />
      <Navbar open={navOpen} handleClose={() => setNavOpen(false)}>
        <NavbarItem scrollDestination={recentWorkSectionRef}>Portfolio</NavbarItem>
        <NavbarItem scrollDestination={contactSectionRef} >Contact</NavbarItem>
      </Navbar>
    </div>
  );
}

export default App;
