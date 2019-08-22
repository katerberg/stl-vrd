import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Player from './pages/player';
import Home from './pages/home';

function Routes() {
  return (
    <Switch>
      <Route path="/stl-vrd" exact component={Home} />
      <Route path="/player/:playerName" exact component={Player} />
      <Redirect to="/stl-vrd" />
    </Switch>
  );
}

export default Routes;
