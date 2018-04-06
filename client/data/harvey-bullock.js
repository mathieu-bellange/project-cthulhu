const harveyBullock = {
  civilState: {
    name: 'Harvey Bullock',
    player: '',
    occupation: 'Inspecteur',
    img: '/images/harvey-bullock.jpg',
    age: 47
  },
  stats: {
    str: 67,
    dex: 62,
    con: 63,
    int: 55,
    edu: 60,
    pou: 44,
    app: 40,
    tai: 68
  },
  health: {
    current: 13,
    max: 13
  },
  mentalHealth: {
    current: 44,
    max: 99
  },
  magicPower: {
    current: 8,
    max: 8
  },
  luck: {
    current: 0
  },
  skills: [
    {
      name: 'Droit',
      mastery: 25
    },
    {
      name: 'Ecouter',
      mastery: 55
    },
    {
      name: 'Psychologie',
      mastery: 66
    },
    {
      name: 'Intimidation',
      mastery: 70
    },
    {
      name: 'Pister',
      mastery: 46
    },
    {
      name: 'TOC',
      mastery: 75
    },
    {
      name: 'Corps à corps',
      mastery: 75
    },
    {
      name: 'Fusils',
      mastery: 66
    },
    {
      name: 'Armes poings',
      mastery: 70
    },
    {
      id: 'dodge',
      name: 'Esquive',
      mastery: 31
    },
    {
      name: 'Crédit',
      mastery: 35
    }
  ],
  weapons: [
    {
      name: 'Cal 32',
      mastery: 70,
      dmg: '1D8',
      range: '15m',
      rate: '1 (3)',
      capacity: '8',
      breakdown: '99'
    }
  ],
  profile: [
    {
      name: 'Description',
      value: 'Grand robuste et brutal. Peu avenant pour la majorité des gens'
    },
    {
      name: 'Idéologie et croyances',
      value: 'Les lois et l\'ordre prime sur tout. Il faut être prêt à tout pour les faire respecter'
    },
    {
      name: 'Personnes importantes',
      value: 'Sidney Harris est le suspect qu\'il a tabassé et entraîné sa perte d\'emploi'
    },
    {
      name: 'Lieux significatifs',
      value: 'Le poste de police où il a fait toute sa carrière à Boston'
    },
    {
      name: 'Bien précieux',
      value: 'Son imper et son ancien insigne d\'inspecteur'
    },
    {
      name: 'Traits',
      value: 'Violent et agressif avec les personnes ne suivants pas les lois/l\'ordre établit. Alcoolique'
    },
    {
      name: 'Séquelles cicatrices',
      value: 'La perte de son emploi l\'a profondémment affecté, il hait Sidney Harris pour ça'
    }
  ],
  stuff: [
    'Un grand imperméable',
    'Son insigne d\'inspecteur',
    'Automatique calibre 32',
    'Calibre 12 à canon scié, dissimulé',
    'Une flasque de whiskey',
    'Un chargeur de cal 32',
    'Deux balles de fusil cal 12'
  ],
  wealth: {
    current: 'Moyenne (10$)',
    cash: '70$',
    capital: '1750$'
  },
  navData: {
    displayStats: true,
    displayStuff: false,
    displaySkills: false,
    displayProfile: false
  }
};

export default harveyBullock;
