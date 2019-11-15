import jeffLarge from '../static/pictures/jeff-blyden.png';
import jeffSmall from '../static/pictures/jeff-blyden-small.jpg';
import elaineLarge from '../static/pictures/elaine-cao.png';
import elaineSmall from '../static/pictures/elaine-cao-small.jpg';
import brandonLarge from '../static/pictures/brandon-curry.png';
import brandonSmall from '../static/pictures/brandon-curry-small.jpg';
import cjLarge from '../static/pictures/cj-voege.png';
import cjSmall from '../static/pictures/cj-voege-small.jpg';
import kyleLarge from '../static/pictures/kyle-richter.png';
import kyleSmall from '../static/pictures/kyle-richter-small.jpg';
import mikeLarge from '../static/pictures/mike-viviano.png';
import mikeSmall from '../static/pictures/mike-viviano-small.jpg';

const jeffblyden = {
  firstName: 'Jeff',
  lastName: 'Blyden',
  picture: jeffLarge,
  thumbnail: jeffSmall,
  competitiveDeck: 'Legacy Elves',
  edhDeck: 'Foil Skithiryx',
  previousDeck: 'MUD',
  previousPlace: 2,
  judgeLevel: 1,
};

const brandoncurry = {
  firstName: 'Brandon',
  lastName: 'Curry',
  picture: brandonLarge,
  thumbnail: brandonSmall,
  competitiveDeck: 'Bogles',
  edhDeck: 'None',
  previousDeck: 'BUG pile',
  previousPlace: 3,
  judgeLevel: 0,
};

const elainecao = {
  firstName: 'Elaine',
  lastName: 'Cao',
  picture: elaineLarge,
  thumbnail: elaineSmall,
  competitiveDeck: 'Stoneblade',
  edhDeck: 'None',
  previousDeck: 'UwU control',
  previousPlace: 1,
  judgeLevel: 2,
};

const kylerichter = {
  firstName: 'Kyle',
  lastName: 'Richter',
  picture: kyleLarge,
  thumbnail: kyleSmall,
  competitiveDeck: 'Mono Red',
  edhDeck: 'Mono Red',
  previousDeck: null,
  previousPlace: null,
  judgeLevel: 1,
}

const cjvoege = {
  firstName: 'CJ',
  lastName: 'Voege',
  picture: cjLarge,
  thumbnail: cjSmall,
  competitiveDeck: 'Blue-red cards',
  edhDeck: 'None',
  previousDeck: null,
  previousPlace: null,
  judgeLevel: 0,
}

const mikeviviano = {
  firstName: 'Mike',
  lastName: 'Viviano',
  picture: mikeLarge,
  thumbnail: mikeSmall,
  competitiveDeck: 'Grixis',
  edhDeck: 'Nicol Bolas',
  previousDeck: null,
  previousPlace: null,
  judgeLevel: 0,
}

const johnmorris = {
  firstName: 'John',
  lastName: 'Morris',
  picture: null,  //TODO I don't have pictures of this guy and I don't know what he plays
  thumbnail: null,
  competitiveDeck: '??',
  edhDeck: '??',
  previousDeck: null,
  previousPlace: null,
  judgeLevel: 0,
}

const cotygunnet = {
  firstName: 'Coty',
  lastName: 'MGunnet',
  picture: null, //TODO I don't have pictures of this guy and I don't know what he plays 
  thumbnail: null,
  competitiveDeck: '??',
  edhDeck: '??',
  previousDeck: null,
  previousPlace: null,
  judgeLevel: 0,
}

export const getPlayers = () => ({
  jeffblyden,
  brandoncurry,
  elainecao,
  kylerichter,
  cjvoege,
  mikeviviano,
  johnmorris,
  cotygunnet,
});

export default {
  getPlayers,
};
