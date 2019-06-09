import naveenLarge from '../static/pictures/naveen-balaji.png';
import naveenSmall from '../static/pictures/naveen-balaji-small.jpg';
import ericLarge from '../static/pictures/eric-levine.png';
import ericSmall from '../static/pictures/eric-levine-small.jpg';
import stephenLarge from '../static/pictures/stephen-hagan.png';
import stephenSmall from '../static/pictures/stephen-hagan-small.jpg';
import elaineLarge from '../static/pictures/elaine-cao.png';
import elaineSmall from '../static/pictures/elaine-cao-small.jpg';
import vincentLarge from '../static/pictures/vincent-brown.png';
import vincentSmall from '../static/pictures/vincent-brown-small.jpg';
import danielLarge from '../static/pictures/daniel-zielinski.png';
import danielSmall from '../static/pictures/daniel-zielinski-small.jpg';
import brentLarge from '../static/pictures/brent-yard.png';
import brentSmall from '../static/pictures/brent-yard-small.jpg';
import johnLarge from '../static/pictures/john-koines.png';
import johnSmall from '../static/pictures/john-koines-small.jpg';

const naveenbalaji = {
  firstName: 'Naveen',
  lastName: 'Balaji',
  picture: naveenLarge,
  thumbnail: naveenSmall,
  competitiveDeck: 'Modern Tron',
  edhDeck: '5-color Charms',
  previousDeck: 'Time Vault',
  previousPlace: 1,
  judgeLevel: 0,
};

const johnkoines = {
  firstName: 'John',
  lastName: 'Koines',
  picture: johnLarge,
  thumbnail: johnSmall,
  competitiveDeck: 'Vintage DPS',
  edhDeck: 'Sen Triplets',
  previousDeck: 'N/A',
  previousPlace: null,
  judgeLevel: 1,
};

const stephenhagan = {
  firstName: 'Stephen',
  lastName: 'Hagan',
  picture: stephenLarge,
  thumbnail: stephenSmall,
  competitiveDeck: 'Modern Ponza',
  edhDeck: 'Aminatou Prison',
  previousDeck: 'N/A',
  previousPlace: null,
  judgeLevel: 2,
};

const elainecao = {
  firstName: 'Elaine',
  lastName: 'Cao',
  picture: elaineLarge,
  thumbnail: elaineSmall,
  competitiveDeck: 'UW Control',
  edhDeck: 'None',
  previousDeck: 'Hate Bears',
  previousPlace: 3,
  judgeLevel: 2,
};

const danielzielinski = {
  firstName: 'Daniel',
  lastName: 'Zielinski',
  picture: danielLarge,
  thumbnail: danielSmall,
  competitiveDeck: '',
  edhDeck: '',
  previousDeck: 'Power Artifact',
  previousPlace: 5,
  judgeLevel: 0,
};

const vincentbrown = {
  firstName: 'Vincent',
  lastName: 'Brown',
  picture: vincentLarge,
  thumbnail: vincentSmall,
  competitiveDeck: '',
  edhDeck: '',
  previousDeck: '4 Color Mentor',
  previousPlace: 7,
  judgeLevel: 0,
};

const ericlevine = {
  firstName: 'Eric',
  lastName: 'Levine',
  picture: ericLarge,
  thumbnail: ericSmall,
  competitiveDeck: 'Storm',
  edhDeck: 'All of them',
  previousDeck: 'N/A',
  previousPlace: null,
  judgeLevel: 3,
};

const brentyard = {
  firstName: 'Brent',
  lastName: 'Yard',
  picture: brentLarge,
  thumbnail: brentSmall,
  competitiveDeck: 'Paradoxical',
  edhDeck: 'Sygg, River Guide',
  previousDeck: 'N/A',
  previousPlace: null,
  judgeLevel: 1,
};

export const getPlayers = () => ({
  naveenbalaji,
  vincentbrown,
  elainecao,
  stephenhagan,
  johnkoines,
  ericlevine,
  brentyard,
  danielzielinski,
});

export default {
  getPlayers,
};
