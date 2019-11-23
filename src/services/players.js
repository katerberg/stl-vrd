import codyLarge from '../static/pictures/cody-owen.png';
import codySmall from '../static/pictures/cody-owen-small.jpg';
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

const codyowen = {
  firstName: 'Cody',
  lastName: 'Owen',
  picture: codyLarge,
  thumbnail: codySmall,
  competitiveDeck: 'Eldrazi & Taxes',
  edhDeck: 'Yuriko Ninjas',
  previousDeck: 'Reanimator',
  previousPlace: 5,
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
  competitiveDeck: 'Modern Titanshift',
  edhDeck: "Friend's extra deck",
  previousDeck: null,
  previousPlace: null,
  judgeLevel: 1,
}

const cjvoege = {
  firstName: 'CJ',
  lastName: 'Voege',
  picture: cjLarge,
  thumbnail: cjSmall,
  competitiveDeck: 'Lantern Control',
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
  competitiveDeck: 'Stoneblade',
  edhDeck: 'Bant',
  previousDeck: null,
  previousPlace: null,
  judgeLevel: 0,
}

const cotygunnet = {
  firstName: 'Coty',
  lastName: 'Gunnet',
  picture: cotyLarge,
  thumbnail: cotySmall,
  competitiveDeck: 'Modern/Pioneer Izzet Phoenix',
  edhDeck: 'Yarok',
  previousDeck: null,
  previousPlace: null,
  judgeLevel: 1,
}

export const getPlayers = () => ({
  codyowen,
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
