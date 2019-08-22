import jeffLarge from '../static/pictures/jeff-blyden.png';
import jeffSmall from '../static/pictures/jeff-blyden-small.jpg';
import joeLarge from '../static/pictures/joe-wisdom.png';
import joeSmall from '../static/pictures/joe-wisdom-small.jpg';
import stephenLarge from '../static/pictures/stephen-hagan.png';
import stephenSmall from '../static/pictures/stephen-hagan-small.jpg';
import elaineLarge from '../static/pictures/elaine-cao.png';
import elaineSmall from '../static/pictures/elaine-cao-small.jpg';
import kyleLarge from '../static/pictures/kyle-vance.png';
import kyleSmall from '../static/pictures/kyle-vance-small.jpg';
import alecLarge from '../static/pictures/alec-dishaw.png';
import alecSmall from '../static/pictures/alec-dishaw-small.jpg';
import justinLarge from '../static/pictures/justin-strohm.png';
import justinSmall from '../static/pictures/justin-strohm-small.jpg';
import brandonLarge from '../static/pictures/brandon-curry.png';
import brandonSmall from '../static/pictures/brandon-curry-small.jpg';

const jeffblyden = {
  firstName: 'Jeff',
  lastName: 'Blyden',
  picture: jeffLarge,
  thumbnail: jeffSmall,
  competitiveDeck: 'Legacy Elves',
  edhDeck: 'Foil Skithiryx',
  previousDeck: 'Reanimator',
  previousPlace: 4,
  judgeLevel: 1,
};

const brandoncurry = {
  firstName: 'Brandon',
  lastName: 'Curry',
  picture: brandonLarge,
  thumbnail: brandonSmall,
  competitiveDeck: 'Unknown',
  edhDeck: 'Unknown',
  previousDeck: 'N/A',
  previousPlace: null,
  judgeLevel: 0,
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
  previousDeck: 'Grixis Control',
  previousPlace: 3,
  judgeLevel: 2,
};

const alecdishaw = {
  firstName: 'Alec',
  lastName: 'Dishaw',
  picture: alecLarge,
  thumbnail: alecSmall,
  competitiveDeck: 'Unknown',
  edhDeck: 'Unknown',
  previousDeck: 'N/A',
  previousPlace: null,
  judgeLevel: 0,
};

const kylevance = {
  firstName: 'Kyle',
  lastName: 'Vance',
  picture: kyleLarge,
  thumbnail: kyleSmall,
  competitiveDeck: 'Amulet Titan',
  edhDeck: 'Tasigur Storm',
  previousDeck: 'N/A',
  previousPlace: null,
  judgeLevel: 0,
};

const joewisdom = {
  firstName: 'Joe',
  lastName: 'Wisdom',
  picture: joeLarge,
  thumbnail: joeSmall,
  competitiveDeck: 'Titanshift',
  edhDeck: 'Najeela Hulk',
  previousDeck: 'N/A',
  previousPlace: null,
  judgeLevel: 0,
};

const justinstrohm = {
  firstName: 'Justin',
  lastName: 'Strohm',
  picture: justinLarge,
  thumbnail: justinSmall,
  competitiveDeck: 'Unknown',
  edhDeck: 'Unknown',
  previousDeck: 'N/A',
  previousPlace: null,
  judgeLevel: 0,
};

export const getPlayers = () => ({
  jeffblyden,
  kylevance,
  elainecao,
  stephenhagan,
  brandoncurry,
  joewisdom,
  justinstrohm,
  alecdishaw,
});

export default {
  getPlayers,
};
