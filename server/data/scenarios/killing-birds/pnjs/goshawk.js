const Goshawk = {
  id: 'goshawk',
  title: 'Autour des Palombes',
  desc: [`Le meneur des oiseaux tueurs`],
  overview: 'killing-birds/goshawk.jpg',
  clues: [
    {
      condition: {
        title: `Bec Acéré`,
        type: 'description'
      },
      clue: `Il ne l’utilise que si un Enfant le combat en dehors de la
        Difficulté étendue.`
    },
    {
      condition: {
        title: `Non vaincu`,
        type: 'description'
      },
      clue: `Si les Enfants n’ont pas tué l’autour, il pourra être vu
        planant dans la région au cours de prochains Mystères,
        et il pourrait nicher près de la maison de l’un d’eux.`
    }
  ],
  skills: [
    { name: 'Bec Acéré', mastery: 2 }
  ]
};

module.exports = Goshawk;
