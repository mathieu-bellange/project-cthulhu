const Neighborhood = {
  id: 'neighborhood',
  dashboard: true,
  place: true,
  title: 'Le voisinage',
  desc: `Situé près de Merrimack Street, le quartier de la vieille Maison est en pleine mutation. Des
    immeubles de bureaux et des magasins ont remplacé les anciennes bâtisses datant du XIXème siècle.
    Le quartier est très animé à la sortie des bureaux, on peut y croiser un marchand de journaux et de cigarette.
    Une ligne de tramway traverse la rue ou des centaines de personnes montent et descendent.
    La vieille maison se trouve entre deux immeubles et avec son jardinet en friches,
    elle est désormais la dernière résidence privée des environs.`,
  overview: 'haunting-house/neighborhood.jpg',
  clues: [
    {
      condition: {
        title: 'Dooley,  marchand de cigarettes et de journaux',
        type: 'chat'
      },
      clue: `Il est capable
        d’indiquer où se trouvait le siège de la
        Chapelle de la Contemplation, à quelques
        pâtés de maison de là.`,
      sideEffects: [
        'Piste vers la chapelle'
      ]
    }
  ]
};

module.exports = Neighborhood;
