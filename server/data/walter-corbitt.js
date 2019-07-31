const WalterCorbitt = {
  url: 'pnj/walter-corbitt',
  pnj: {
    id: 'walter-corbitt',
    title: 'Walter Corbitt, mort vivant démoniaque',
    desc: `C'est une maigre créature humanoïde d'un
      mètre quatre-vingt, totalement nue, aux
      traits tirés et au nez aquilin. Sa peau
      desséchée a l'aspect du bois.`,
    overview: 'haunting-house/walter-corbitt.jpg',
    clues: [
      {
        condition: {
          title: 'Corbitt prend vie',
          type: 'see'
        },
        clue: `Ses grands
          yeux écarquillés lui donnent un regard
          terrifiant. Corbitt a perdu tous ses cheveux,
          et ses gencives rétractées donnent
          l'impression qu'il possède de très grandes
          dents. Il émane de lui une odeur douceâtre
          et insidieuse rappelant celle du blé moisi.`,
        sideEffects: [`Voir ce mort-
          vivant bouger coûte 1/1D8 points de Santé
          Mentale.`]
      },
      {
        condition: {
          title: 'Dégats liés aux griffes',
          type: 'fight'
        },
        clue: `Toute personne blessée par ces griffes
          risquera de contracter une maladie
          grave.`,
        sideEffects: [`Le lendemain, elle sombrera dans
          un délire qui durera 30 - CON / 5 jours.`]
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
      { name: 'Discrétion', mastery: 80 },
      { name: 'Dissimulation', mastery: 30 },
      { name: 'Ecouter', mastery: 60 },
      { name: 'Mentir', mastery: 72 },
      { name: 'Mythe de Cthulhu', mastery: 17 },
      { name: 'Tromper', mastery: 64 }
    ],
    weapons: [
      { name: 'Griffes', mastery: 50, dmg: '2D3 + imp' },
      { name: 'Dague magique', mastery: '(PM * 5)', dmg: '1D4 + 2' }
    ],
    stuffs: [
      { name: 'Gemme noire', description: 'Suspendu à son cou par une chaînette',
        type: 'object',
        effect: `Si quelqu'un
          s'en empare, elle tombera instantanément
          en poussière en augmentant d'1 point son
          POU.`
      },
      { name: 'Dague magique', description: `vieux couteau
          ouvragé dont la lame est
          recouverte d'une épaisse couche
          de rouille.
          En fait de "rouille", il s'agit du
          sang séché des victimes qui ont été
          tuées avec cette arme.`,
        type: 'weapon',
        effect: `Corbitt est
          capable de la faire flotter dans les airs et
          de s'en servir pour poignarder quelqu'un,
          au prix d'1 Point de Magie par tentative.`
      }
    ],
    spells: [
      { name: 'Immunisation', cost: 'x PM', time: '5 rounds', duration: '24 h',
        effect: `Chaque point de magie donne au lanceur, ou à une cible choisie,
          1D6 pt d'armure contre les attaques non magiques.
          Cette protection disparaît au fur et à mesure qu'elle bloque des dommages.`,
        restriction: `Le sort ne peut être renforcé en utilisant d'autres pt de magie,
          ni être relancé tant que l'ancienne protection est en place.`,
        visibleEffect: `Chaque balle ou coup porté,
          ne fait qu’arracher des morceaux de sa
          chair, le rendant encore plus horrible qu’il
          ne l’était.`
      },
      { name: 'Domination', cost: '1 PM', time: '1 round', duration: '2D3 round',
        effect: `Après un test opposé de POU réussi, plie l'esprit de la victime à la volonté du magicien`,
        restriction: `Ce sort ne peut affecter qu'un seule personne simultanément et à une distance de 10 mètres.
        Les sorts ne doivent pas violer l'instinct de survie de la victime.`,
        visibleEffect: `La cible visée est ahuri pendant la durée du sort.`
      }
    ]
  }
};

module.exports = WalterCorbitt;
