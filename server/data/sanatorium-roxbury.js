const SanatoriumRoxbury = {
  url: 'place/sanatorium',
  place: {
    title: 'Le Sanatorium Roxbury',
    desc: `Un établissement situé
      à quelques kilomètres du centre de Boston,
      c'est un hôpital construit au début du siècle pour le traitemet de la tuberculose.
      Il consiste en un complexe de dix-huit bâtiments historiques sur un terrain de 21 hectares.
      Ce sont principalement des bâtiments en brique de caractère néo-colonial
      mais une partie de l'hôpital est encore en cours de construction.`,
    overview: 'haunting-house/sanatorium-roxbury.jpg',
    music: ['https://tabletopaudio.com/download.php?downld_file=86_Dark_City.mp3'],
    pnjs: [{
      title: 'Gabriela Macario',
      desc: `Une jeune femme paraîssant 10 ans de plus, peu confuse dans ses propos,
        elle repart rapidement dans un délire paranoïaque sur le fait qu'on la surveille toujours (en montrant les soignant).`,
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
    },
    {
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
    },
    {
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
    }]
  }
};

module.exports = { SanatoriumRoxbury };
