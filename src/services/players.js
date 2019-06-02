import naveenLarge from '../static/pictures/naveen-balaji.jpg';
import naveenSmall from '../static/pictures/naveen-balaji-small.jpg';
import jeffLarge from '../static/pictures/jeff-blyden.jpg';
import jeffSmall from '../static/pictures/jeff-blyden-small.jpg';

const naveenbalaji = {
  firstName: 'Naveen',
  lastName: 'Balaji',
  picture: naveenLarge,
  thumbnail: naveenSmall,
  competitiveDeck: 'Modern Tron',
  edhDeck: '5-color Charms',
  previousDeck: 'Time Vault',
};

const jeffblyden = {
  firstName: 'Jeff',
  lastName: 'Blyden',
  picture: jeffLarge,
  thumbnail: jeffSmall,
  competitiveDeck: 'Legacy Elves',
  edhDeck: 'Foil Skithiryx',
  previousDeck: 'Reanimator',
};

export const getPlayers = () => ({naveenbalaji, jeffblyden});

export default {
  getPlayers,
};
