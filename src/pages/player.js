import React from 'react';
import { getPlayers } from '../services/players';
import { Redirect } from "react-router-dom";
import background from './player-background.png';
import './player.css';

function Player(props) {
  const player = getPlayers()[props.match.params.playerName];
  if (!player) {
    return <Redirect to="/" />
  }

  return (
    <div className="player">
      <img className="background" alt={'background'} src={background} />
      <div className="content">
        <img className="profile-picture" src={player.picture} alt={`Large format of ${player.firstName}`} />
        <div className="name">
          <h1>{player.firstName}</h1>
          <h1>{player.lastName}</h1>
        </div>
        <div className="text-block">
          <div>Competitive Deck: {player.competitiveDeck}</div>
          <div>EDH Deck: {player.edhDeck}</div>
          <div>Previous VRD: {player.previousDeck}</div>
          <div>Judge Level: {player.judgeLevel}</div>
        </div>
      </div>
    </div>
  );
}

export default Player;
