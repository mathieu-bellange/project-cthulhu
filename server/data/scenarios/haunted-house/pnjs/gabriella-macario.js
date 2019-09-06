const GabriellaMacario = {
  id: 'gabriella-macario',
  title: 'Gabriela Macario',
  desc: [`Une jeune femme paraîssant 10 ans de plus, peu confuse dans ses propos,
    elle repart rapidement dans un délire paranoïaque sur le fait qu'on la surveille toujours (en montrant les soignant).`],
  overview: 'haunting-house/gabriela-macario.jpg',
  clues: [
    {
      condition: {
        title: 'Qu\'a t-elle vu ?',
        type: 'chat'
      },
      clue: `Elle a senti une présence dans la maison, un
        être tellement malveillant que le simple fait
        d’y penser la rend malade. La nuit, il lui
        arrivait de se réveiller et de le voir penché
        au-dessus de son lit. Quand il était en
        colère, il faisait voler des objets dans toute
        la pièce.`
    },
    {
      condition: {
        title: 'l\' état de son mari',
        type: 'chat'
      },
      clue: `Apparemment il détestait
        particulièrement Vittorio, son mari, sur lequel il s’acharnait.`,
      sideEffects: [`mais la malheureuse
        est incapable de donner des informations
        plus précises.`]
    },
    {
      condition: {
        title: 'Des regrets',
        type: 'chat'
      },
      clue: `Elle livre qu'elle aurait du croire les journaux
        et les rumeurs de l'époque sur la mauvaise réputation de la maison.`,
      sideEffects: [`Ne réponds plus à aucune question`, `piste vers le Boston Globe, autres affaires.`]
    }
  ]
};

module.exports = GabriellaMacario;
