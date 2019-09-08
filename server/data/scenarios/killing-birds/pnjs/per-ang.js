const PerAng = {
  id: 'per-ang',
  title: 'Per « le Péteur » Äng',
  desc: [`Per est un petit homme trapu, dont les cheveux blancs
    sont maintenus en place par une casquette rouge
    déchirée.`, `Il parle lentement,
    d’une voix presque atone, et ne regarde jamais personne dans les yeux.`,
    `On le voit souvent en train de lire,
    il est très cultivé : il apprécie l’art et la musique clas-
    sique`],
  overview: 'per-ang.png',
  clues: [
    {
      condition: {
        title: `Sa vrai nature`,
        type: 'description'
      },
      clue: `Il déteste les élèves, surtout depuis qu’il est
        un cyborg.`,
      sideEffects: [`Son moment préféré de la journée, c’est
        quand ils rentrent chez eux et arrêtent de vandaliser le
        bâtiment.`]
    },
    {
      condition: {
        title: `Entend son approche`,
        type: 'ear'
      },
      clue: `Le Péteur a un gros problème de flatulences,
        on peut l’entendre et le sentir arriver de loin.`
    }
  ]
};
module.exports = PerAng;
