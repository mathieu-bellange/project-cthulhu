const WreckShip = {
  id: 'wreck-ship',
  title: `L’épave du vaisseau IEX-4Z32`,
  dashboard: false,
  desc: [`L’épave du IEX-4Z32 mesure vingt-cinq mètres
    de long, et est légèrement inclinée sur le côté. L'engin
    était initialement peint en noir, mais il est désormais
    largement couvert de rouille.`, `Les disques à magnétrine
    récupèrent l’eau de pluie, les vieilles antennes servent de
    perchoirs d’où les oiseaux surveillent le rivage, et sur un
    côté, près du sol, la seule porte visible est bloquée depuis
    l’extérieur par une barre de fer.`, `Des
    oiseaux entrent et sortent de l’épave par des fentes, par
    lesquelles s'échappent des bruits de ventilateurs et des
    piaillements.`],
  overview: 'killing-birds/wreck-ship.png',
  clues: [
    {
      condition: {
        title: `Ouvrir la porte`,
        type: 'roll'
      },
      clue: `Test leur force pour ouvrir la porte`,
      sideEffects: [`Ils subissent un État en cas d'échec`]
    },
    {
      condition: {
        title: `Entrer dans le vaisseau`,
        type: 'place'
      },
      clue: `Derrière la porte se trouve une échelle et juste
        après l’entrée se trouvent une machinerie et
        des soutes.`,
      sideEffects: [`Monte vers la confrontation finale`]
    },
    {
      condition: {
        title: `Se faufiler dans le vaisseau`,
        type: 'roll'
      },
      clue: `Nécessite de réussir un test de furtivité pour chaque Enfant`,
      sideEffects: [`Si un seul d’entre
        eux échoue, Gunnar remarque leur présence. Il appelle
        l’autour et il attend les Enfants dans le cockpit`, `Si tous
        les Enfants réussissent leur test de furtivité, Gunnar
        est pris par surprise et ne jaillit de son placard qu’au
        moment où ils arrivent. Il se contente d'appeler l’au-
        tour, qui mettra quelques minutes à arriver, accompa-
        gné de nombreux autres oiseaux tueurs.`]
    },
    {
      condition: {
        title: `Gunnar les surveille`,
        type: 'description'
      },
      clue: `Si Gunnar repère les Enfants, il reste caché
        et les épie jusqu’à ce qu’ils atteignent le cockpit.`,
      sideEffects: [` Il sort alors de sa cachette, menaçant de les tuer s’ils ne partent pas.`]
    }
  ],
  insidePlaces: ['wreck-ship-deck']
};

module.exports = WreckShip;
