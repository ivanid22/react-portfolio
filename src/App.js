import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import RouteTest from './components/RouteTest/RouteTest';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [navOpen, setNavOpen] = useState(false);

  let open = false;
  return (
    <div>
      <Navbar open={navOpen} handleClose={() => setNavOpen(!navOpen)} />
      <button onClick={() => setNavOpen(!navOpen) }>Toggle nav</button>
    </div>
    
  );
}

export default App;
