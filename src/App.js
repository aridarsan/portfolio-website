import React from "react"
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
      </Switch>

    </React.Fragment>
  );
}

export default App;
