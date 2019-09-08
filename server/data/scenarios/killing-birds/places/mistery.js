const Mistery = {
  id: 'mistery',
  title: `Présentation du mystère`,
  dashboard: true,
  desc: [`Mettre en place la présentation du mystère, les enfants doivent être tous présents`],
  overview: 'default_tales.png',
  clues: [
    {
      condition: {
        title: `Un ou plusieurs Enfants entendent des pigeons se parler.`,
        type: 'ear'
      },
      clue: `Ils discutent de nourriture, du vol de bijoux
        brillants pour décorer leur nid, des meilleurs lieux
        de reproduction ou de leurs partenaires avec des voix un peu
        métalliques`,
      sideEffects: [`Les Enfants
        peuvent les entendre lorsqu’ils jouent dans le jardin,
        passent du temps dans leur Repaire ou se promènent
        à vélo.`, ` S’ils ne font rien, les
        oiseaux s’envolent.`]
    },
    {
      condition: {
        title: `Si un Enfant attrape et examine un pigeon, et teste
          son Analyse`,
        type: 'roll'
      },
      clue: `Il voit de petits points de suture sur la
        tête de l’oiseau et le signe qu’un microprocesseur a été
        installé.`
    },
    {
      condition: {
        title: `Un Enfant qui étudie les pigeons peut tester sa compréhension`,
        type: 'roll'
      },
      clue: `Les oiseaux agissent en
        groupe, ce qui est tout à fait inhabituel pour ces animaux.
        Ils s’entraident en portant des branches lourdes
        et collaborent pour trouver de la nourriture.`,
      sideEffects: [`L'Enfant
        comprend aussi qu’un ornithologue ou une bonne
        bibliothèque est nécessaire pour en apprendre plus`, `Un test de réseau permet de connaître l'existence de l'ornitologue`]
    },
    {
      condition: {
        title: `Les Enfants peuvent suivre les pigeons en réussissant un test d’agilité `,
        type: 'roll'
      },
      clue: `Ils trouveront alors le nid des
        pigeons décrit plus loin.`
    }
  ],
  insidePlaces: ['ornithologist-house']
};

module.exports = Mistery;
