import React from 'react';
import { getPlayers } from './services/players';
import lotus from './static/lotus.jpg';
import './footer.css';

function Footer() {
  const players = getPlayers();
  return (
    <div className="footer">
      <span><img src={lotus} /></span>
      {Object.keys(players).map(player => <span key={player}>{players[player].firstName}</span>)}
    </div>
  );
}

export default Footer;
