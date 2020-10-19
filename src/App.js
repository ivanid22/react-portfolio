import React, { useState } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar/Navbar';
import NavbarItem from './components/NavbarItem/NavbarItem';

library.add(faTimes, faChevronRight);

function App() {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <Navbar open={navOpen} handleClose={() => setNavOpen(!navOpen)}>
        <NavbarItem>Portfolio</NavbarItem>
        <NavbarItem>About</NavbarItem>
        <NavbarItem>Contact</NavbarItem>
      </Navbar>
      <button onClick={() => setNavOpen(!navOpen) }>Toggle nav</button>
    </div>
    
  );
}

export default App;
