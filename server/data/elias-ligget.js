const EliasLigget = {
  url: 'pnj/elias-ligget',
  pnj: {
    id: 'elias-ligget',
    title: 'Elias Ligget',
    desc: `Jeune homme d'affaire d'une quarantaine d'année.`,
    overview: 'haunting-house/elias-ligget.jpg',
    clues: [
      {
        condition: {
          title: 'Pourquoi sommes nous là ?',
          type: 'chat'
        },
        clue: `Il demande aux investigateurs d’aller inspecter une vieille
          Maison dont il est le propriétaire dans le centre de Boston. Les
          derniers locataires ont été victimes d’incidents tragiques
          et il aimerait savoir ce qui se passe exactement dans cette demeure
          de façon à mettre fin aux éventuels problèmes.`,
        sideEffects: [`Il est prêt à dédommager les
          investigateurs pour le temps et les efforts
          qu’ils consacreront à cette tâche.`, `ceci est l'objectif basique de la mission`]
      },
      {
        condition: {
          title: 'Les faits',
          type: 'chat'
        },
        clue: `La famille Macario s’est installée dans la
          maison en 1918. L’année suivante, le père,
          qui avait été victime d’un accident grave,
          est subitement devenu fou furieux, ce qui
          lui a valu d’être interné. Peu de temps
          après, ce fut au tour de la mère de perdre la
          raison. Comme son époux, elle ne cessait de
          bafouiller des phrases sans suite, parlant
          d’un spectre aux yeux rouges et
          d’évènements inexplicables qui se seraient
          produits dans la maison. Apparemment, elle
          éprouvait les plus grandes réticences à
          pénétrer dans une des chambres du premier
          étage.`,
        sideEffects: [`Préciser que ça a fait la une des journaux`, `piste vers le Boston Globe`]
      },
      {
        condition: {
          title: 'Faits antérieurs ?',
          type: 'chat'
        },
        clue: ` Le propriétaire avait entendu parler
          de la mauvaise réputation de la maison
          avant de l’acquérir, mais il n’en a pas tenu
          compte en raison du montant des loyers
          qu’il pensait pouvoir en retirer.`,
        sideEffects: [` Maintenant
          il souhaite que les investigateurs mettent fin
          aux rumeurs, au besoin en exorcisant les
          lieux.`]
      },
      {
        condition: {
          title: 'Témoins des faits ?',
          type: 'chat'
        },
        clue: `Le propriétaire n’a jamais été le témoin
          d’évènements étranges dans la maison et il
          ignore ce qu’ont pu exactement voir les
          Macario.`
      },
      {
        condition: {
          title: 'Terme du contrat',
          type: 'chat'
        },
        clue: `Ils toucheront 20 $ par jour,
          plus une prime de 100 $ lorsqu’ils pourront
          certifier que la maison ne présente plus
          aucun danger.`,
        sideEffects: [`Le propriétaire souhaite
          avoir l’assurance qu’il pourra encore louer
          la maison sans provoquer de nouveau
          drame.`,
          `Il verse une avance de 50 $ aux
          investigateurs et leur remet la clé de la
          vielle demeure, sans oublier de leur préciser
          son adresse.`]
      },
      {
        condition: {
          title: 'Où est la famille Macario',
          type: 'chat'
        },
        clue: `Ils sont devenus fous, leurs enfants ont été placés à Baltimore.
          Monsieur et Madame Macario sont au Sanatorium Roxbury, dans la banlieu de Boston.`,
        sideEffects: [`Piste vers le Sanatorium`]
      }
    ],
    stats: { str: 55, dex: 45, con: 70, tai: 65, app: 75, int: 55, edu: 60, pou: 50 },
    skills: [
      { name: 'Crédit', mastery: 80 },
      { name: 'Psychologie', mastery: 55 },
      { name: 'Persuasion', mastery: 65 }
    ]
  }
};

module.exports = EliasLigget;
