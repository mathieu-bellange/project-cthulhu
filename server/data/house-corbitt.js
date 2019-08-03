const GroundFloor = require('./ground-floor');
const FirstFloor = require('./first-floor');
const Cave = require('./cave');

const CorbittHouse = {
  url: 'place/house',
  dashboard: true,
  place: {
    title: 'La maison Corbitt',
    desc: `cette bâtisse en briques est flanquée de deux grands immeubles de bureaux de
      construction récente. Sa façade donne directement sur la rue. De chaque côté de la
      maison, d'étroits passages permettent d'accéder à un potager envahi par la
      végétation qui se trouve sur l'arrière.`,
    overview: 'haunting-house/house-corbitt.jpg',
    music: ['https://tabletopaudio.com/download.php?downld_file=18_House_on_the_Hill.mp3'],
    clues: [
      {
        condition: {
          title: 'Observer la façade de loin',
          type: 'see'
        },
        clue: `En observant un peu la bâtisse, on ne peut
          manquer de remarquer comment elle
          semble se fondre dans l'ombre projetée par
          les immeubles voisins. Ses fenêtres tendues
          de rideaux blancs ne laissent rien voir de
          l'intérieur. `
      },
      {
        condition: {
          title: 'Devant la porte',
          type: 'see'
        },
        clue: `En plus d'une serrure normale, la porte d'entrée est dotée sur sa face interne de
          quatre verrous, qui paraissent avoir été rajoutés au cours des deux dernières années.`,
        sideEffects: [
          `à regarder de plus près les fenêtres du rez-de-chaussée, ils
          constateront qu'elles ont toutes été clouées de façon à ne pas pouvoir être ouvertes.`
        ]
      },
      {
        condition: {
          title: 'Accès au rez de chaussée',
          type: 'place'
        },
        clue: `deux accès possible, une sur le devant et une sur le côté.`
      }
    ],
    insidePlaces: {
      'ground-floor': GroundFloor,
      'first-floor': FirstFloor,
      cave: Cave
    }
  }
};

module.exports = CorbittHouse;
