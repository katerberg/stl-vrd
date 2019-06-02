import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Player from './pages/player';
import Home from './pages/home';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/player/:playerName" exact component={Player} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
