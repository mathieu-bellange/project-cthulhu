const PigeonNest = {
  id: 'pigeon-nest',
  title: `Le nid des pigeons`,
  dashboard: true,
  desc: [`Une centaine de pigeons se sont installés à l’extrême nord de Färingsö.
    Ils ont construit un gigantesque nid de branches, de morceaux
    de métal et d’éclats de verre,`, `Le nid est surveillé par un groupe de mouettes,
    de goélands et de grands cormorans qui attaquent
    les pigeons imprudents, les picorant à mort.`],
  overview: 'killing-birds/birds_nest.png',
  clues: [
    {
      condition: {
        title: `Près des pigeons`,
        type: 'ear'
      },
      clue: `Ils discutent constamment de la qualité des
        matériaux de construction, et se querellent au sujet de
        la nourriture et des partenaires. Leurs voix sont métalliques et ponctuées de pépiements.`
    },
    {
      condition: {
        title: `Test de compréhension`,
        type: 'roll'
      },
      clue: `Les oiseaux tueurs essayent de prendre le
        contrôle des pigeons, qui coopèrent pour se protéger
        et défendre leur nid.`,
      sideEffects: [`Si les Enfants commencent à étudier les oiseaux tueurs,
        ceux-ci s’enfuient brusquement,
        comme s’ils obéissaient à un ordre, et disparaissent au
        loin.`]
    },
    {
      condition: {
        title: `Approcher du nid`,
        type: 'place'
      },
      clue: `Il est compliqué de grimper jusqu’au nid, les Enfants
        doivent passer par des rochers aux arêtes vives et de
        hautes falaises, testant leur agilité ou leur furtivité
        pour s’approcher sans être vus`,
      sideEffects: [`Si les pigeons les
        surprennent, les oiseaux deviennent anxieux et se
        regroupent. Plusieurs volatiles se mettent à décrire
        des cercles dans les airs au-dessus des Enfants, et les
        attaquent s’ils se rapprochent encore.`, `Les Enfants
        n’ont pas d'autre choix que de partir, en testant leur
        force ou leur agilité, subissant un État en cas d’échec`]
    },
    {
      condition: {
        title: `Test de découverte`,
        type: 'roll'
      },
      clue: `Trouve une pièce estampillée du logo IEX-4Z32`,
      sideEffects: [`Un nouveau test de compréhension ou d’analyse permettra
        de comprendre qu’il s’agit d’un numéro d’immatriculation de
        vaisseau à magnétrine. À la bibliothèque, ils pourront
        trouver de quel vaisseau il s’agit et le localiser.`]
    },
    {
      condition: {
        title: `Quitter le nid`,
        type: 'place'
      },
      clue: `Les Enfants voient une jeune
        femme à plusieurs centaines de mètres, qui observe les
        oiseaux avec des jumelles.`,
      sideEffects: [`Elle se lève, et part à vélo en
        direction du sud.`, `Si les Enfants la suivent, elle les
        conduit à la maison abandonnée de Gunnar Granat,
        près de Kungsberga.`]
    }
  ],
  insidePlaces: ['gunnar-house']
};

module.exports = PigeonNest;
