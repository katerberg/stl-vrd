import React from 'react';
import { getPlayers } from '../services/players';
import { Redirect } from "react-router-dom";

function Player(props) {
  const player = getPlayers()[props.match.params.playerName];
  if (!player) {
    return <Redirect to="/" />
  }
  return (
    <div className="player">
      <h1>{`${player.firstName} ${player.lastName}`}</h1>
      <div>Competitive Deck: {player.competitiveDeck}</div>
      <div>EDH Deck: {player.edhDeck}</div>
      <div>Previous VRD: {player.previousDeck}</div>
      <img className="profile-picture" src={player.picture} alt={`Large format of ${player.firstName}`} />
    </div>
  );
}

export default Player;

