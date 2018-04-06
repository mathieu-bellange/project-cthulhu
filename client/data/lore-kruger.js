const loreKruger = {
  civilState: {
    name: 'Lore Krüger',
    player: '',
    occupation: 'Journaliste',
    img: '/images/lore-kruger.jpg',
    age: 27
  },
  stats: {
    str: 35,
    dex: 45,
    con: 45,
    int: 70,
    edu: 75,
    pou: 75,
    app: 65,
    tai: 50
  },
  health: {
    current: 9,
    max: 9
  },
  mentalHealth: {
    current: 75,
    max: 99
  },
  magicPower: {
    current: 15,
    max: 15
  },
  luck: {
    current: 0
  },
  skills: [
    {
      name: 'Anthropologie',
      mastery: 41
    },
    {
      name: 'Photographie',
      mastery: 60
    },
    {
      name: 'Bibliothèque',
      mastery: 35
    },
    {
      name: 'Crochetage',
      mastery: 31
    },
    {
      name: 'Ecouter',
      mastery: 65
    },
    {
      name: 'Histoire',
      mastery: 45
    },
    {
      name: 'Baratin',
      mastery: 75
    },
    {
      name: 'Psychologie',
      mastery: 65
    },
    {
      name: 'Premier soins',
      mastery: 50
    },
    {
      name: 'TOC',
      mastery: 75
    },
    {
      id: 'dodge',
      name: 'Esquive',
      mastery: 22
    },
    {
      name: 'Crédit',
      mastery: 15
    }
  ],
  weapons: [],
  profile: [
    {
      name: 'Description',
      value: 'Elégante, très avenante, très bon relationnel avec les gens'
    },
    {
      name: 'Bien précieux',
      value: 'Son appareil photo qu\'elle possède depuis son enfance'
    },
    {
      name: 'Traits',
      value: 'Tenace, cherche la vérité quoiqu\'il en coûte. Une très forte volonté'
    }
  ],
  stuff: [
    'Appareil photo',
    'Calepin + crayon'
  ],
  wealth: {
    current: 'Moyenne (10$)',
    cash: '30$',
    capital: '750$'
  },
  navData: {
    displayStats: true,
    displayStuff: false,
    displaySkills: false,
    displayProfile: false
  }
};

export default loreKruger;
