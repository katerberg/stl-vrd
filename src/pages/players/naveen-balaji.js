import React from 'react';
import picture from './naveen-balaji.jpg';

function NaveenBalaji() {
  const naveen = {
    firstName: 'Naveen',
    lastName: 'Balaji',
    picture: picture,
    competitiveDeck: 'Modern Tron',
    edhDeck: '5-color Charms',
    previousDeck: 'Time Vault',
  };
  return (
    <div className="player">
      <h1>{`${naveen.firstName} ${naveen.lastName}`}</h1>
      <div>Competitive Deck: {naveen.competitiveDeck}</div>
      <div>EDH Deck: {naveen.edhDeck}</div>
      <div>Previous VRD: {naveen.previousDeck}</div>
      <img className="profile-picture" src={naveen.picture} />
    </div>
  );
}

export default NaveenBalaji;

