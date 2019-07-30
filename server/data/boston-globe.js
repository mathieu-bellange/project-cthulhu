const BostonGlobe = {
  url: 'place/boston-globe',
  place: {
    title: 'Le Boston Globe',
    desc: `Se trouvant sur Washington Street, le Boston Globe jouit d'une bonne réputation.
      L'accès aux archives du Boston Globe est limité et demandera quelques négociations.`,
    overview: 'haunting-house/boston-globe.jpg',
    clues: [
      {
        condition: {
          title: 'Avoir accès aux archives',
          type: 'roll'
        },
        clue: `Ils ont besoin d’une réussite
          en Baratin ou Persuasion, de l’appui d’un
          journaliste ou d’une lettre de
          recommandation émanant de la mairie pour
          avoir accès aux fichiers qui les intéressent.`,
        sideEffects: [`Les coupures de presse sont classées par
          rues.`]
      },
      {
        condition: {
          title: 'Les articles relatifs à l\'affaire Macario',
          type: 'search'
        },
        clue: `Les articles concernant l’affaire
          Macario sont brefs et peu détaillés ; le
          Globe s’est contenté de rapporter les faits
          tels que les investigateurs les connaissent
          déjà. Toutefois, ils découvrent un article non publié de 1918.`,
        sideEffects: [`Il relate,
          qu’en 1880, une famille d’immigrants
          français, qui s’est installée dans la maison,
          avait été victime d’incidents violents qui
          avaient entraîné la mort des parents et laissé
          leurs trois enfants estropiés. La demeure
          était ensuite restée longtemps inoccupée.`,
          `En 1909, une autre famille y a emménagé et
          ses membres sont tombés rapidement
          malades.`,
          `En 1914, le fils aîné a été pris
          d’un accès de folie qui l’a poussé à se
          suicider avec un couteau de cuisine.
          Effondrés, ses parents ont alors décidé de
          déménager.`,
          `En 1917, une troisième famille
          a loué la vieille demeure… pour la quitter
          presque immédiatement après avoir tous
          contracté une maladie bizarre.`
        ]
      },
      {
        condition: {
          title: 'Relation avec l\'archiviste',
          type: 'roll'
        },
        clue: `Les archives ne remontent pas avant 1878. Test APP ou de Crédit réussi`,
        sideEffects: [
          `elle lui révèle que les fichiers du Globe ont été
          détruits lors d’un incendie en 1878. Et qu'il faudra chercher à la bibliothèque
          pour avoir accès à des journaux plus vieux`,
          'Piste vers la bibliothèque'
        ]
      }
    ]
  }
};

module.exports = { BostonGlobe };
