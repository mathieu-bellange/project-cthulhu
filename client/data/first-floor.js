export const FirstFloor = {
  url: '/first-floor',
  place: {
    title: '1er étage',
    desc: `Petit escalier grinçant monte vers le premier étage.
      Il dessert un couloir très étroit qui donne sur 4 chambres.`,
    overview: 'haunting-house/first-floor.jpg',
    clues: [
      {
        condition: {
          title: 'L\'intérieur du couloir',
          type: 'see'
        },
        clue: `Il fait très sombre, si les investigateurs tentent d'allumer, les plombs sautent immédiatement.`
      },
      {
        condition: {
          title: 'Pièce 1',
          type: 'place'
        },
        clue: `une chambre ordinaire, qui
          devait être occupée par Vittorio et Gabriela
          Macario. Elle contient un lit double et une
          bibliothèque, ainsi que plusieurs croix. Un
          rosaire et un bréviaire sont posés sur une
          table de nuit, à côté du lit.`
      },
      {
        condition: {
          title: 'Pièce 2',
          type: 'place'
        },
        clue: `La chambre des enfants : deux
          petits lits, des jouets, des armoires et des
          images représentant des avions et des cow-
          boys.`
      },
      {
        condition: {
          title: 'Pièce 3',
          type: 'place'
        },
        clue: `elle contient un cadre de lit et un
          sommier à ressorts, ainsi qu'une armoire
          vide. Bien qu'elle n'ait pas été occupée,
          cette pièce ressemble tout à fait aux deux
          autres`,
        sideEffects: [`les investigateurs
          trouve une carte de visite dans un tiroir
          d’une commode. Elle porte le nom du
          docteur Henry Armitage, avec au dos un
          numéro de téléphone.`, `Corbitt peut faire apparaître du sang
            (fourni par les rats) sur le sol, le
            plafond ou les murs.`, `Corbitt détourne l'attention par des
            grattements à la fenêtre, puis il se sert du
            lit afin de le projeter au travers de la vitre.`,
            `Les coupures dues au verre cassé et la chute
            feront perdre 2D6 Points de Vie à
            l'imprudent.`]
      },
      {
        condition: {
          title: 'Pièce 4',
          type: 'place'
        },
        clue: `un lavabo, une baignoire et des
          toilettes avec chasse d'eau suspendue. Des
          serviettes et divers objets indiquent que
          cette salle de bains était utilisée par quatre
          personnes. Une mare d'eau brunâtre,
          alimentée par un robinet qui fuit, stagne au
          fond de la baignoire.`
      }
    ]
  }
};
