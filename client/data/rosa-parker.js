const rosaParker = {
  civilState: {
    name: 'Rosa Parker',
    player: 'Julie',
    occupation: 'Chasseuse',
    img: '/images/rosa-parker.jpg',
    age: 36
  },
  stats: {
    str: 45,
    dex: 68,
    con: 74,
    int: 65,
    edu: 65,
    pou: 58,
    app: 55,
    tai: 40
  },
  health: {
    current: 11,
    max: 11
  },
  mentalHealth: {
    current: 58,
    max: 99
  },
  magicPower: {
    current: 11,
    max: 11
  },
  luck: {
    current: 0
  },
  skills: [
    {
      name: 'Discrétion',
      mastery: 44
    },
    {
      name: 'Ecouter',
      mastery: 64
    },
    {
      name: 'Psychologie',
      mastery: 42
    },
    {
      name: 'Orientation',
      mastery: 62
    },
    {
      name: 'survie',
      mastery: 46
    },
    {
      name: 'Pister',
      mastery: 66
    },
    {
      name: 'TOC',
      mastery: 64
    },
    {
      name: 'Botanique',
      mastery: 43
    },
    {
      name: 'Naturalisme',
      mastery: 24
    },
    {
      name: 'Premiers soins',
      mastery: 44
    },
    {
      name: 'Fusils',
      mastery: 68
    },
    {
      id: 'dodge',
      name: 'Esquive',
      mastery: 34
    },
    {
      name: 'Crédit',
      mastery: 20
    }
  ],
  weapons: [
    {
      name: 'Cal 12(2C)',
      mastery: 68,
      dmg: '4D6 2D6 1D6',
      range: '10m 20m 50m',
      rate: '1ou2',
      capacity: '2',
      breakdown: '100'
    }
  ],
  profile: [
    {
      name: 'Description',
      value: 'Petite et athlétique'
    },
    {
      name: 'Personnes importantes',
      value: 'Son père ayant fini en hopital psy après être devenu fou'
    },
    {
      name: 'Lieux significatifs',
      value: 'A chasser toute son enfance avec son père dans la forêt de Green Mountain'
    },
    {
      name: 'Séquelles cicatrices',
      value: 'A enfoui beaucoup de mauvais rêve dans cette forêt'
    }
  ],
  stuff: [
    'Fusil calibre 12',
    'Boite de cartouche (10)',
    'Nourriture pour 2 jours',
    'Sac de couchage',
    'Boussole'
  ],
  wealth: {
    current: 'Moyenne (10$)',
    cash: '40$',
    capital: '1000$'
  },
  navData: {
    displayStats: true,
    displayStuff: false,
    displaySkills: false,
    displayProfile: false
  }
};

export default rosaParker;
