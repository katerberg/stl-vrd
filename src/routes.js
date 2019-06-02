import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Naveen from './pages/players/naveen-balaji';
import Home from './pages/home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/player/naveen" exact component={Naveen} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
