const WreckShipDeck = {
  id: 'wreck-ship-deck',
  title: `Le pont du vaisseau`,
  dashboard: false,
  desc: [`Il y a des centaines
    d’oiseaux ici, et chaque centimètre carré est recouvert
    de fientes, de plumes et de carcasses d’oiseaux morts.`,
    `Une machine munie de mangeoires remplies de nourriture, qui ressemble à une
    borne d’arcade avec des lumières clignotantes et de
    longs bras mécaniques.`],
  overview: 'killing-birds/wreck-ship-deck.png',
  pnjs: ['gunnar-granat', 'goshawk'],
  clues: [
    {
      condition: {
        title: `Difficulté étendue`,
        type: 'description'
      },
      clue: `Le niveau de Menace est normal (deux fois le nombre d’Enfants)
        si les Enfants surprennent Gunnar, mais élevé (trois fois
        le nombre d’Enfants) s’ils se sont fait repérer.`,
      sideEffects: [
        `Pour se débarrasser de l’autour et de
        ses sbires, les Enfants peuvent par exemple se servir de
        leur agilité pour les distancer, ou de leur force pour
        les massacrer.`]
    },
    {
      condition: {
        title: `Stopper la machine`,
        type: 'description'
      },
      clue: `la machine peut être détruite par un bricolage ou une programmation`,
      sideEffects: [`En cas d'échec, la machine tombera en panne d'elle même.`]
    },
    {
      condition: {
        title: `Fuite du vaisseau`,
        type: 'description'
      },
      clue: `Si les Enfants échouent à surmonter la Diffi culté
        étendue, ils sont repoussés hors du vaisseau par Gunnar
        et les oiseaux.`,
      sideEffects: [`Une nuée d’oiseaux tueurs écumera la
        région pendant tout l’été, causant de gros dégâts avant
        que la machine ne tombe en panne d’elle-même.`]
    }
  ]
};

module.exports = WreckShipDeck;
