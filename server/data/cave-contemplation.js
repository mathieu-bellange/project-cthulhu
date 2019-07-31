const CaveContemplation = {
  url: '/cave',
  dashboard: false,
  place: {
    title: 'Cave de la chapelle de la contemplation',
    desc: `La cave qu’ils découvrent était
      indépendante du reste du sous-sol et on y
      accédait en empruntant un escalier séparé,
      qui est aujourd’hui recouvert par des tonnes
      de gravats. Elle abrite encore deux
      squelettes vêtus de robe de soie en
      lambeaux ; sans doute des membres de la
      secte qui se sont cachés ici et ont péri au
      cours de l’incendie.`,
    overview: 'place-default.png',
    clues: [
      {
        condition: {
          title: 'Des dossiers moisis',
          type: 'search'
        },
        clue: `Des dossiers moisis
          renfermant les archives de la congrégation.`,
        sideEffects: [`Un jet réussi en Bibliothèque permet de
          trouver un passage indiquant que Walter
          Corbitt a été inhumé dans la cave de sa
          demeure “ conformément à ses vœux et à
          ceux de Celui Qui Attend Dans l’Ombre ”.`]
      },
      {
        condition: {
          title: 'Un énorme volume en cuir relié',
          type: 'search'
        },
        clue: `Enchaîné à un lutrin vermoulu, il y a aussi
          un énorme volume en cuir relié, manuscrit
          en latin, pourri et mangé par les vers.`,
        sideEffects: [`Difficile à dire s'il est exploitable, plusieurs jours d'analyse et éventuellement de restauration`]
      }
    ]
  }
};

module.exports = CaveContemplation;
