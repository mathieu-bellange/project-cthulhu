const DocteurHardstom = {
  url: 'pnj/docteur-hardstom',
  pnj: {
    id: 'docteur-hardstom',
    title: 'Docteur Hardstrom',
    desc: `le docteur des
      Macario a quitté la ville. Le médecin qui le
      remplace est le Docteur Hardstrom de
      l’asile d’Arkham.`,
    overview: 'haunting-house/medecin-macario.jpg',
    clues: [
      {
        condition: {
          title: 'Est - il présent ?',
          type: 'roll'
        },
        clue: `Réussir un test de chance`,
        sideEffects: [`Il peut répondre à quelques questions, aucun indice vitale pour la mission`]
      },
      {
        condition: {
          title: 'La cas Macario',
          type: 'chat'
        },
        clue: `Il a déjà traité des cas similaires à Arkham.`,
        sideEffects: [`Noter l'information pour une piste dans une suite de scénario`]
      }
    ]
  }
};

module.exports = DocteurHardstom;
