import jeffLarge from '../static/pictures/jeff-blyden.png';
import jeffSmall from '../static/pictures/jeff-blyden-small.jpg';
import joeLarge from '../static/pictures/joe-wisdom.png';
import joeSmall from '../static/pictures/joe-wisdom-small.jpg';
import stephenLarge from '../static/pictures/stephen-hagan.png';
import stephenSmall from '../static/pictures/stephen-hagan-small.jpg';
import elaineLarge from '../static/pictures/elaine-cao.png';
import elaineSmall from '../static/pictures/elaine-cao-small.jpg';
import markLarge from '../static/pictures/mark-katerberg.png';
import markSmall from '../static/pictures/mark-katerberg-small.jpg';
import alecLarge from '../static/pictures/alec-dishaw.png';
import alecSmall from '../static/pictures/alec-dishaw-small.jpg';
import codyLarge from '../static/pictures/cody-owen.png';
import codySmall from '../static/pictures/cody-owen-small.jpg';
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
  competitiveDeck: 'Bogles',
  edhDeck: 'None',
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
  previousDeck: 'Two Card Monte (2)',
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
  competitiveDeck: 'Vizier Combo',
  edhDeck: 'Riku',
  previousDeck: 'N/A',
  previousPlace: null,
  judgeLevel: 0,
};

const markkaterberg = {
  firstName: 'Mark',
  lastName: 'Katerberg',
  picture: markLarge,
  thumbnail: markSmall,
  competitiveDeck: 'Doomsday',
  edhDeck: '70-Land Child of Alara',
  previousDeck: 'Pikula',
  previousPlace: 2,
  judgeLevel: 2,
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

const codyowen = {
  firstName: 'Cody',
  lastName: 'Owen',
  picture: codyLarge,
  thumbnail: codySmall,
  competitiveDeck: 'Eldrazi & Taxes',
  edhDeck: 'Yuriko Ninjas',
  previousDeck: 'N/A',
  previousPlace: null,
  judgeLevel: 1,
};

export const getPlayers = () => ({
  jeffblyden,
  markkaterberg,
  elainecao,
  stephenhagan,
  brandoncurry,
  joewisdom,
  codyowen,
  alecdishaw,
});

export default {
  getPlayers,
};
