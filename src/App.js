import React from "react"
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Hero from "./Components/Hero";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/'>
          <Hero/>
        </Route>
      </Switch>

    </React.Fragment>
  );
}

export default App;
