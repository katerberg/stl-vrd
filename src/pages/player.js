import React from 'react';
import { getPlayers } from '../services/players';
import { Redirect } from "react-router-dom";
import './player.css';

function Player(props) {
  const player = getPlayers()[props.match.params.playerName];
  if (!player) {
    return <Redirect to="/" />
  }

  return (
    <div className="player">
      <div className="content">
        <img className="profile-picture" src={player.picture} alt={`Large format of ${player.firstName}`} />
        <div className="name">
          <h1>{player.firstName}</h1>
          <h1>{player.lastName}</h1>
        </div>
        <div className="text-block">
          <div><label>Competitive Deck:</label> {player.competitiveDeck}</div>
          <div><label>EDH Deck:</label> {player.edhDeck}</div>
          <div><label>Previous VRD:</label> {player.previousDeck ? player.previousDeck : 'N/A'}{player.previousPlace ? ` (${player.previousPlace})`: ''}</div>
          <div><label>Judge Level:</label> {player.judgeLevel}</div>
        </div>
      </div>
    </div>
  );
}

export default Player;
