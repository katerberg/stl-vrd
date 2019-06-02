import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Player from './pages/player';
import Home from './pages/home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/player/:playerName" exact component={Player} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
