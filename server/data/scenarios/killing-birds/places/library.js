const SchoolLibrary = {
  id: 'school-library',
  title: `La bibliothèque scolaire de Stenhamra`,
  dashboard: true,
  desc: [`La bibliothèque scolaire de Stenhamra
    est connue pour sa grande collection de livres anciens,
    et pour son gardien, Per « le Péteur » Äng.`,
    `L’école est aussi fermée, mais de très
    nombreuses portes et fenêtres peuvent
    être ouvertes par des Enfants sans trop
    d’effort.`],
  overview: 'killing-birds/school-library.jpg',
  pnjs: ['per-ang'],
  clues: [
    {
      condition: {
        title: `Information sur l'immatriculation`,
        type: 'roll'
      },
      clue: `Un test de compréhension réussi permet de découvrir que le vaisseau à magnétrine
        immatriculé IEX-4Z32 était à l’origine
        utilisé comme transport de minerai
        vers la Russie`,
      sideEffects: [`mais qu’il a été mis au
        rebut il y a quelques années, sur une
        île au milieu du Gobi nordique, nommée
        Skärholmen`]
    },
    {
      condition: {
        title: `Information sur les oiseaux`,
        type: 'roll'
      },
      clue: `Un test de compréhension réussi permet de découvrir que les
        oiseaux se comportent anormalement. Ils
        ne devraient pas coopérer, parler ou
        attaquer d’autres animaux, et encore
        moins des humains.`
    },
    {
      condition: {
        title: `Information sur les micro processeurs`,
        type: 'roll'
      },
      clue: `le corps
        des oiseaux devrait fi nir par rejeter leur
        puce électronique, ce qui les tuera.`
    },
    {
      condition: {
        title: `En cas d'échec à un test de compréhension`,
        type: 'description'
      },
      clue: `Les enfants sont repérés par « le Péteur »,
        et devront s’enfuir ou trouver une bonne
        explication.`,
      sideEffects: [`Si le Péteur les attrape,
        il les retiendra à l’école le temps
        de prévenir leurs parents pour qu’ils
        viennent les chercher.`, ` Il justifiera sa
        propre présence par une fuite à réparer
        au sous-sol.`]
    }
  ]
};

module.exports = SchoolLibrary;
