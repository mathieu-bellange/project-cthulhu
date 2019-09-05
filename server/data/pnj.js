export const BasePnj = {
  url: 'pnj/:id',
  pnj: {
    title: 'Son nom',
    desc: `une petite description visuelle`,
    overview: 'lovecraft.jpg',
    clues: [
      {
        condition: {
          title: '',
          type: 'see'
        },
        clue: ``,
        sideEffects: [``]
      }
    ],
    stats: {
      str: 90,
      dex: 35,
      con: 110,
      pou: 90,
      int: 80,
      edu: 80,
      tai: 55,
      app: 5
    },
    skills: [
      { name: '', mastery: 80 }
    ],
    weapons: [
      { name: '', mastery: 50, dmg: '' }
    ],
    stuffs: [
      { name: '', description: '',
        type: 'object',
        effect: ``
      }
    ],
    spells: [
      { name: '', cost: '', time: '', duration: '',
        effect: ``,
        restriction: ``,
        visibleEffect: ``
      }
    ]
  }
};
