import naveenLarge from '../static/pictures/naveen-balaji.jpg';
import naveenSmall from '../static/pictures/naveen-balaji-small.jpg';
import jeffLarge from '../static/pictures/jeff-blyden.jpg';
import jeffSmall from '../static/pictures/jeff-blyden-small.jpg';
import alexLarge from '../static/pictures/alex-werth.jpg';
import alexSmall from '../static/pictures/alex-werth-small.jpg';
import stephenLarge from '../static/pictures/stephen-hagan.jpg';
import stephenSmall from '../static/pictures/stephen-hagan-small.jpg';

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

const alexwerth = {
  firstName: 'Alex',
  lastName: 'Werth',
  picture: alexLarge,
  thumbnail: alexSmall,
  competitiveDeck: 'Pauper Monarch',
  edhDeck: 'Queen Marchesa',
  previousDeck: 'Mono G Ramp',
};

const stephenhagan = {
  firstName: 'Stephen',
  lastName: 'Hagan',
  picture: stephenLarge,
  thumbnail: stephenSmall,
  competitiveDeck: '',
  edhDeck: '',
  previousDeck: 'N/A',
};

export const getPlayers = () => ({
  naveenbalaji,
  jeffblyden,
  alexwerth,
  stephenhagan,
});

export default {
  getPlayers,
};
