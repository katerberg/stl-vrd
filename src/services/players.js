import jeffLarge from '../static/pictures/jeff-blyden.png';
import jeffSmall from '../static/pictures/jeff-blyden-small.jpg';
import elaineLarge from '../static/pictures/elaine-cao.png';
import elaineSmall from '../static/pictures/elaine-cao-small.jpg';
import johnLarge from '../static/pictures/john-morris.png';
import johnSmall from '../static/pictures/john-morris-small.jpg';
import cotyLarge from '../static/pictures/coty-gunnet.png';
import cotySmall from '../static/pictures/coty-gunnet-small.jpg';
import brandonLarge from '../static/pictures/brandon-curry.png';
import brandonSmall from '../static/pictures/brandon-curry-small.jpg';
import cjLarge from '../static/pictures/cj-voege.jpg';
import cjSmall from '../static/pictures/cj-voege-small.jpg';
import kyleLarge from '../static/pictures/kyle-richter.jpg';
import kyleSmall from '../static/pictures/kyle-richter-small.jpg';
import mikeLarge from '../static/pictures/mike-viviano.jpg';
import mikeSmall from '../static/pictures/mike-viviano-small.jpg';

const nickcalcaterra = {
  firstName: 'Nick',
  lastName: 'Calcaterra',
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
  competitiveDeck: 'Grixis Control',
  edhDeck: 'Nicol Bolas',
  previousDeck: null,
  previousPlace: null,
  judgeLevel: 0,
}

const johnmorris = {
  firstName: 'John',
  lastName: 'Morris',
  picture: johnLarge,
  thumbnail: johnSmall,
  competitiveDeck: '??',
  edhDeck: '??',
  previousDeck: null,
  previousPlace: null,
  judgeLevel: 0,
}

const cotygunnet = {
  firstName: 'Coty',
  lastName: 'Gunnet',
  picture: cotyLarge,
  thumbnail: cotySmall,
  competitiveDeck: '??',
  edhDeck: '??',
  previousDeck: null,
  previousPlace: null,
  judgeLevel: 1,
}

export const getPlayers = () => ({
  nickcalcaterra,
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
