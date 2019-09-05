const VittorioMacario = {
  id: 'vittorio-macario',
  title: 'Vittorio Macario',
  desc: `Jeune homme paraîssant 20 ans de plus.
    Bredouille des choses incompréhensibles et très confus.`,
  overview: 'haunting-house/vittorio-macario.jpg',
  clues: [
    {
      condition: {
        title: 'Interroger Vittorio',
        type: 'chat'
      },
      clue: `L’état de Vittorio ne s’est pas arrangé et
        une entrevue avec cet homme bredouillant
        et confus ne permet pas d’apprendre quoi
        que ce soit d’intéressant.`
    }
  ]
};

module.exports = VittorioMacario;
