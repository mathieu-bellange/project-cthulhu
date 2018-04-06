import harveyBullock from './harvey-bullock';
import rosaParker from './rosa-parker';

const investigators = [
  harveyBullock,
  rosaParker,
  {
    civilState: {
      name: 'Harvey Bullock',
      player: 'Mathieu',
      occupation: 'Inspecteur 3',
      img: '/images/harvey-bullock.jpg',
      age: 59
    },
    stats: {
      str: 71,
      dex: 71,
      con: 65,
      int: 75,
      edu: 60,
      pou: 55,
      app: 45,
      tai: 70
    },
    health: {
      current: 17,
      max: 19
    },
    mentalHealth: {
      current: 17,
      max: 19
    },
    magicPower: {
      current: 17,
      max: 19
    },
    luck: {
      current: 17
    },
    skills: [
      {
        id: 'dodge',
        name: 'Esquive',
        mastery: 65
      },
      {
        name: 'Baratin',
        mastery: 65
      },
      {
        name: 'Anthropologie',
        mastery: 45
      },
      {
        name: 'Charme',
        mastery: 65
      },
      {
        name: 'Droit',
        mastery: 35
      },
      {
        name: 'Orientation',
        mastery: 69
      },
      {
        name: 'Persuasion',
        mastery: 86
      },
      {
        name: 'Pister',
        mastery: 75
      },
      {
        name: 'Psychologie',
        mastery: 85
      }
    ],
    weapons: [
      {
        name: 'Auto cal 32',
        mastery: 75,
        dmg: '1D8',
        range: '15m',
        rate: '1 (3)',
        capacity: '8',
        breakdown: '99'
      },
      {
        name: 'Auto cal 32',
        mastery: 75,
        dmg: '1D8',
        range: '15m',
        rate: '1 (3)',
        capacity: '8',
        breakdown: '99'
      }
    ],
    stuff: [
      'Ma bite',
      'Et mon couteau'
    ],
    profile: [
      {
        name: 'Description',
        value: 'mon cul'
      }
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
  },
  {
    civilState: {
      name: 'Harvey Bullock',
      player: 'Mathieu',
      occupation: 'Inspecteur 4',
      img: '/images/harvey-bullock.jpg',
      age: 69
    },
    stats: {
      str: 72,
      dex: 72,
      con: 65,
      int: 75,
      edu: 60,
      pou: 55,
      app: 45,
      tai: 72
    },
    health: {
      current: 18,
      max: 19
    },
    mentalHealth: {
      current: 18,
      max: 19
    },
    magicPower: {
      current: 18,
      max: 19
    },
    luck: {
      current: 18
    },
    skills: [
      {
        id: 'dodge',
        name: 'Esquive',
        mastery: 65
      },
      {
        name: 'Baratin',
        mastery: 65
      },
      {
        name: 'Anthropologie',
        mastery: 45
      },
      {
        name: 'Charme',
        mastery: 65
      },
      {
        name: 'Droit',
        mastery: 35
      },
      {
        name: 'Orientation',
        mastery: 69
      },
      {
        name: 'Persuasion',
        mastery: 86
      },
      {
        name: 'Pister',
        mastery: 75
      },
      {
        name: 'Psychologie',
        mastery: 85
      }
    ],
    weapons: [],
    stuff: [],
    profile: [
      {
        name: 'Description',
        value: 'mon cul'
      }
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
  },
  {
    civilState: {
      name: 'Harvey Bullock',
      player: 'Mathieu',
      occupation: 'Inspecteur 5',
      img: '/images/harvey-bullock.jpg',
      age: 79
    },
    stats: {
      str: 49,
      dex: 52,
      con: 65,
      int: 75,
      edu: 60,
      pou: 55,
      app: 45,
      tai: 50
    },
    health: {
      current: 19,
      max: 19
    },
    mentalHealth: {
      current: 19,
      max: 19
    },
    magicPower: {
      current: 19,
      max: 19
    },
    luck: {
      current: 19
    },
    skills: [
      {
        id: 'dodge',
        name: 'Esquive',
        mastery: 65
      },
      {
        name: 'Baratin',
        mastery: 65
      },
      {
        name: 'Anthropologie',
        mastery: 45
      },
      {
        name: 'Charme',
        mastery: 65
      },
      {
        name: 'Droit',
        mastery: 35
      },
      {
        name: 'Orientation',
        mastery: 69
      },
      {
        name: 'Persuasion',
        mastery: 86
      },
      {
        name: 'Pister',
        mastery: 75
      },
      {
        name: 'Psychologie',
        mastery: 85
      }
    ],
    weapons: [],
    stuff: [],
    profile: [],
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
  }
];

export default investigators;
