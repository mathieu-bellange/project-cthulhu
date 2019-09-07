const OrnithologistHouse = {
  id: 'ornithologist-house',
  title: `La maison de l'ornithologue`,
  dashboard: true,
  desc: [`Mats Tingblad vit seul dans un
    chalet à l’est de Lunda.`, `Une haute
    clôture métallique au portail verrouillé entoure un
    jardin à l’abandon, mais plein de nichoirs et de man-
    geoires.`, ` La maison possède un étage et penche de façon
    inquiétante. À l’étage se trouve un balcon, et sur le toit
    sont fixés de nombreux perchoirs à oiseaux. Tous les
    volets des fenêtres sont fermés.`],
  overview: 'killing-birds/ornithologist-house.jpg',
  pnjs: ['mats-tingblad'],
  clues: [
    {
      condition: {
        title: `Essayer d'entrer dans la propriété`,
        type: 'search'
      },
      clue: `Pour entrer dans la maison, les Enfants doivent escala-
        der la clôture ou ouvrir le portail verrouillé.`,
      sideEffects: [`Mats est à
        l’intérieur mais n’ouvrira pas, même si on frappe à la
        porte.`, `Les Enfants peuvent voir par la fenêtre qu’il
        se déplace à l’étage.`]
    },
    {
      condition: {
        title: `Essayer d'entrer dans la maison`,
        type: 'search'
      },
      clue: `La porte d’entrée est fermée.`,
      sideEffects: [` il est possible d’ouvrir
        l’une des fenêtres de l’étage depuis
        l’extérieur`]
    },
    {
      condition: {
        title: `Escalader la façade`,
        type: 'roll'
      },
      clue: `Si les Enfants escaladent la façade, ils doivent
        tester leur agilité`
    },
    {
      condition: {
        title: `En entrant dans la maison`,
        type: 'place'
      },
      clue: `L’intérieur sent la fiente
        et la moisissure, et on y trouve des cages contenant des
        perroquets, des perruches, des calopsittes, ainsi qu’un
        corbeau en liberté.`,
      sideEffects: [`Le corbeau se pose souvent sur la tête de
        Mats.`]
    }
  ],
  insidePlaces: ['']
};

module.exports = OrnithologistHouse;
