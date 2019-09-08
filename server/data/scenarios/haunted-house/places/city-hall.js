const CityHall = {
  id: 'city-hall',
  dashboard: true,
  title: 'Hôtel de ville de Boston',
  desc: [`Situé au 45 School Street, l'extérieur du bâtiment en granit est caractérisé par des colonnes ornées,
    un toit en mansarde et une baie centrale en saillie.
    La portes d'entrée massive montre une inhabituelle utilisation de bois différents,
    ainsi que l'incrustation d'un cercle de marbre. Sur la plaque de marbre dans le hall d'entrée,
    on peut y lire la commémoration de la pose de la pierre angulaire en 1862 par le maire Joseph Wightman
    ainsi que la dédicace de l'immeuble en 1865 par le maire Frederic W. Lincoln, Jr.
    Les archives des états civils est au premier étage. Un fonctionnaire avenant les acceuille.`],
  overview: 'haunting-house/city-hall.jpg',
  music: ['https://tabletopaudio.com/download.php?downld_file=94_Noir_Procedural.mp3'],
  clues: [
    {
      condition: {
        title: 'Exécuteur testamentaire de Walter Corbitt',
        type: 'roll'
      },
      clue: `l’exécuteur
        testamentaire de Walter Corbitt était un
        certain révérend Michael Thomas, pasteur
        de la Chapelle de la contemplation de Notre
        Seigneur Délivreur de Secrets.`,
      sideEffects: [
        'Réussite normale: La recherche et la lecture des informations prend 2h',
        'Réussite majeur et plus: La recherche et la lecture des informations prend 1h',
        `piste vers la chapelle de la contemplation`
      ]
    },
    {
      condition: {
        title: 'Le Registre des Cultes',
        type: 'search'
      },
      clue: `indique que cette église a
        été fermée en 1912.`
    },
    {
      condition: {
        title: 'Procédure judiciaire contre la chapelle des lamentations',
        type: 'search'
      },
      clue: `Si les investigateurs pensent à consulter les
        archives judiciaires, ils découvriront des
        références à des actions entreprises en 1912
        à l’encontre de la Chapelle de la
        Contemplation, mais les dossiers eux-
        mêmes sont introuvables.`
    },
    {
      condition: {
        title: 'Le fonctionnaire en charge des archives',
        type: 'search'
      },
      clue: `s'ils interrogent
        poliment le fonctionnaire en charge des
        archives, il leur dit que les crimes les plus
        graves sont en principe confiés aux
        tribunaux du Comté ou de l’Etat ou à une
        cour fédérale.`,
        sideEffects: [
          `Les fichiers des arrestations et saisies sont
            regroupés au Poste de Police Central`,
          `piste vers le poste de Police Central`
        ]
    },
    {
      condition: {
        title: 'Un tirage réussi en Droit',
        type: 'roll'
      },
      clue: `les crimes les plus
        graves sont en principe confiés aux
        tribunaux du Comté ou de l’Etat ou à une
        cour fédérale.`,
      sideEffects: [
        `Les fichiers des arrestations et saisies sont
          regroupés au Poste de Police Central`,
        `piste vers le poste de Police Central`
      ]
    }
  ]
};

module.exports = CityHall;
