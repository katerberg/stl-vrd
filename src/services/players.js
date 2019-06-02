import naveenLarge from '../pictures/naveen-balaji.jpg';
import jeffLarge from '../pictures/jeff-blyden.jpg';

const naveenbalaji = {
  firstName: 'Naveen',
  lastName: 'Balaji',
  picture: naveenLarge,
  competitiveDeck: 'Modern Tron',
  edhDeck: '5-color Charms',
  previousDeck: 'Time Vault',
};

const jeffblyden = {
  firstName: 'Jeff',
  lastName: 'Blyden',
  picture: jeffLarge,
  competitiveDeck: 'Legacy Elves',
  edhDeck: 'Foil Skithiryx',
  previousDeck: 'Reanimator',
};

export const getPlayers = () => ({naveenbalaji, jeffblyden});

export default {
  getPlayers,
};
