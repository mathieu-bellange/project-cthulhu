const karlAbraham = {
  civilState: {
    name: 'Karl Abraham',
    player: '',
    occupation: 'Médecin',
    img: '/images/karl-abraham.jpg',
    age: 31
  },
  stats: {
    str: 55,
    dex: 40,
    con: 60,
    int: 65,
    edu: 76,
    pou: 65,
    app: 50,
    tai: 55
  },
  health: {
    current: 11,
    max: 11
  },
  mentalHealth: {
    current: 65,
    max: 99
  },
  magicPower: {
    current: 13,
    max: 13
  },
  luck: {
    current: 0
  },
  skills: [
    {
      name: 'Bibliothèque',
      mastery: 42
    },
    {
      name: 'Conduite',
      mastery: 30
    },
    {
      name: 'Grimper',
      mastery: 33
    },
    {
      name: 'Sauter',
      mastery: 35
    },
    {
      name: 'Latin',
      mastery: 40
    },
    {
      name: 'Biologie',
      mastery: 35
    },
    {
      name: 'Pharmacologie',
      mastery: 30
    },
    {
      name: 'Psychologie',
      mastery: 55
    },
    {
      name: 'Médecine',
      mastery: 70
    },
    {
      name: 'Premier soins',
      mastery: 75
    },
    {
      name: 'TOC',
      mastery: 25
    },
    {
      name: 'Arme poings',
      mastery: 45
    },
    {
      name: 'Corps à corps',
      mastery: 40
    },
    {
      id: 'dodge',
      name: 'Esquive',
      mastery: 45
    },
    {
      name: 'Crédit',
      mastery: 45
    }
  ],
  weapons: [
    {
      name: 'Cal 45',
      mastery: 45,
      dmg: '1D10 + 2',
      range: '15m',
      rate: '1 (3)',
      capacity: '6',
      breakdown: '100'
    }
  ],
  profile: [
    {
      name: 'Description',
      value: 'Discret, distingué et bien habillé. On remarque rapidement un rang social élevé'
    },
    {
      name: 'Personnes importantes',
      value: 'Lucas Strong, un ancien camarade d\'escouade durant la 1ère guerre mondiale.'
    },
    {
      name: 'Lieux significatifs',
      value: 'Les combats en europe l\'ont marqué fortement'
    },
    {
      name: 'Séquelles cicatrices',
      value: 'Pas visible, mais quelques séquelles psychologiques de la grande guerre'
    }
  ],
  stuff: [
    'Trousse de premier soin',
    'Nourriture pour 2 jours',
    'Sac de couchage',
    'Colt M1911',
    'Chargeur .45 (6)'
  ],
  wealth: {
    current: 'Moyenne (10$)',
    cash: '90$',
    capital: '2250$'
  },
  navData: {
    displayStats: true,
    displayStuff: false,
    displaySkills: false,
    displayProfile: false
  }
};

export default karlAbraham;
