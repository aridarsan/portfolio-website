import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Hero from "./Components/Hero";
import Navbar from "./Components/NavBar/Navbar"
import GlobalStyles from "./Styles/Global"
import NotFound from "./Components/NotFound"

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <React.Fragment>
    <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar}/>
    <GlobalStyles/>
      <Switch>
        <Route exact path='/'>
          <Hero/>
        </Route>

        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>

    </React.Fragment>
  );
}

export default App;
