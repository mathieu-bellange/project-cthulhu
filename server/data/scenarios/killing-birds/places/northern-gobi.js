const NorthernGobi = {
  id: 'northern-gobi',
  title: `Le Gobi Nordique`,
  dashboard: true,
  desc: [`Le Gobi nordique est une série d’îles du nord-est de
    Munsö qui servent de décharge où
    l'on abandonne les vestiges de diverses merveilles tech-
    nologiques.`, `On trouve dans l'eau des morceaux rouil-
    lés de lames acérées, des vaisseaux à moitié immer-
    gés, des coupoles étranges, des tours circulaires et des
    disques à magnétrine.`],
  overview: 'killing-birds/northern-gobi.png',
  clues: [
    {
      condition: {
        title: `En arrivant`,
        type: 'place'
      },
      clue: `Une faune riche y vivait autre-
        fois, mais lorsque les Enfants s’y aventurent, tout est
        calme et sinistre.`,
      sideEffects: [`À distance, on peut voir les oiseaux
        tueurs patrouiller dans les cieux.`]
    },
    {
      condition: {
        title: `En vue de l'épave`,
        type: 'place'
      },
      clue: `L’épave du vaisseau IEX-4Z32 repose sur la petite
        île de Skärholmen`,
      sideEffects: [`les Enfants
        peuvent atteindre en nageant (ce qui nécessite un test
        d’agilité) ou en utilisant un bateau (ce qui nécessite un
        test de bricolage ou de réseau).`]
    },
    {
      condition: {
        title: `Les patrouilles aviaires`,
        type: 'roll'
      },
      clue: `Pour éviter d’être repérés par les patrouilles aviaires sur
        le chemin de Skärholmen, les Enfants
        doivent réussir un test de furtivité.`,
      sideEffects: [`En cas d’échec,
        ils doivent réussir un test d’agilité pour parvenir à
        s’échapper, et un nouvel échec leur fait subir un État.`]
    }
  ],
  insidePlaces: ['wreck-ship']
};

module.exports = NorthernGobi;
