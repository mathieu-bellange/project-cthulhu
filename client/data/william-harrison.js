const williamHarrison = {
  civilState: {
    name: 'William Harrison',
    player: '',
    occupation: 'Boxeur amateur',
    img: '/images/william-harrison.jpg',
    age: 28
  },
  stats: {
    str: 62,
    dex: 74,
    con: 66,
    int: 56,
    edu: 42,
    pou: 42,
    app: 60,
    tai: 60
  },
  health: {
    current: 12,
    max: 12
  },
  mentalHealth: {
    current: 42,
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
      name: 'Discrétion',
      mastery: 60
    },
    {
      name: 'Baratin',
      mastery: 49
    },
    {
      name: 'Crochetage',
      mastery: 64
    },
    {
      name: 'Pickpocket',
      mastery: 40
    },
    {
      name: 'TOC',
      mastery: 25
    },
    {
      name: 'Sauter',
      mastery: 62
    },
    {
      name: 'Grimper',
      mastery: 46
    },
    {
      name: 'Mécanique',
      mastery: 45
    },
    {
      name: 'Conduite',
      mastery: 40
    },
    {
      name: 'Corps à corps',
      mastery: 70
    },
    {
      id: 'dodge',
      name: 'Esquive',
      mastery: 68
    },
    {
      name: 'Crédit',
      mastery: 42
    }
  ],
  weapons: [
    {
      name: 'Grand couteau',
      mastery: 70,
      dmg: '1D8 + Imp',
      range: 'Allonge',
      rate: '1',
      capacity: '',
      breakdown: ''
    }
  ],
  profile: [
    {
      name: 'Description',
      value: 'Visage trahis des années de pratique de la boxe, renfermé et peu bavard'
    },
    {
      name: 'Idéologie croyances',
      value: 'Ne croit en rien d\'autres que lui même'
    },
    {
      name: 'Traits',
      value: 'Débrouillard, prêt à tout pour s\'en sortir'
    },
    {
      name: 'Séquelles cicatrices',
      value: 'De nombreuses cicatrices sur tout le corps, peu visible de l\'extérieur'
    },
    {
      name: 'Phobies et manies',
      value: 'Addict aux jeux d\'argent'
    }
  ],
  stuff: [
    'Grand couteau'
  ],
  wealth: {
    current: 'Moyenne (10$)',
    cash: '84$',
    capital: '-2500$'
  },
  navData: {
    displayStats: true,
    displayStuff: false,
    displaySkills: false,
    displayProfile: false
  }
};

export default williamHarrison;
