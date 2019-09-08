const Library = {
  id: 'library',
  dashboard: true,
  title: 'Bibliothèque de Boston',
  desc: [`Se trouvant au coin de Dartmouth Street et Boylston Street,
    la bibliothèque de Boston est un énorme edifice de 1895 acceullant plus de 2 millions d'ouvrages.
    Sous une très large voute, le silence est impressionnant.
    Tout autant que le rayon rassemblant l'intégralité des journaux de Boston depuis leur première publication.`],
  overview: 'haunting-house/library.jpg',
  clues: [
    {
      condition: {
        title: 'Trouver quelque chose d\'intéressant',
        type: 'roll'
      },
      clue: `Il faudra réussir un jet en
        Bibliothèque pour découvrir chacun des
        renseignements.`,
      sideEffects: [
        `La réussite du jet déterminera la qualité des indices
        et le temps qu'il aura fallu pour les trouver.`,
        `un effort supplémentaire pourra être donné
        pour trouver les autres indices sans jet de dés mais au prix de temps passé en plus. (1h en plus)`,
        `Réussite normal: 4 indices en 4h, Réussite majeur et plus: 4 indices en 2h`,
        `en cas d'échec: 2 indices en 4h`
      ]
    },
    {
      condition: {
        title: 'Date de construction de la maison',
        type: 'search'
      },
      clue: `La maison a été construite en 1835
        par un riche marchand qui est
        aussitôt tombé malade et l’a vendue
        à certain Walter Corbitt.`,
      sideEffects: [`Première mention de Walter Corbitt`]
    },
    {
      condition: {
        title: 'Procédure judiciaire contre Corbitt',
        type: 'search'
      },
      clue: `En 1852, Walter Corbitt fut
        poursuivi en justice par ses voisins
        qui voulaient le contraindre à
        déménager “ en conséquence de ses
        habitudes détestables (sic) et de son
        comportement douteux ”.`
    },
    {
      condition: {
        title: 'Avis de décès de Corbitt',
        type: 'search'
      },
      clue: `Son avis de décès
        précise qu’il habitait toujours au
        même endroit le jour de sa mort, en
        1866. Il est également indiqué
        qu’un nouveau procès a été intenté
        pour l’empêcher d’être enseveli
        dans le sous-sol de sa demeure,
        comme le voulait son testament.`
    },
    {
      condition: {
        title: 'Résultat du procès',
        type: 'search'
      },
      clue: `Il n’est nulle part fait mention des
        résultats de cette seconde procédure
        judiciaire.`,
      sideEffects: [`Piste vers l'hôtel de ville et l'état civil`]
    }
  ]
};

module.exports = Library;
