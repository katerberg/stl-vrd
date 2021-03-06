import React from 'react';
import { getPlayers } from './services/players';
import { Link } from "react-router-dom";
import './footer.css';

function Footer() {
  const players = getPlayers();
  return (
    <div className="footer">
      {Object.keys(players).map(player => <span key={player}>
        <Link to={`/player/${player}`}>
          <img className="profile-picture" src={players[player].thumbnail} alt={`Small format of ${players[player].firstName}`} />
        </Link>
      </span>)}
    </div>
  );
}

export default Footer;
