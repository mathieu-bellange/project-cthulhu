const GunnarHouse = {
  id: 'gunnar-house',
  title: `La maison abandonnée de Gunnar`,
  dashboard: true,
  desc: [`Une demeure suédoise à un étage recouvert de bois rouge et
    aux tuiles rouges.`],
  overview: 'killing-birds/gunnar-house.jpg',
  pnjs: ['majsan-sivertsson'],
  clues: [
    {
      condition: {
        title: `Entrer dans la maison`,
        type: 'place'
      },
      clue: `Si les Enfants tentent de s’introduire dans la maison de
        Gunnar, ils devront être discrets pour ne pas être repérés par un couple de voisins
        qui ont pris l’initiative de surveiller l’endroit.`,
      sideEffects: [`Ils patrouillent à tour de rôle sur les sentiers et les pistes cyclables.`,
        `La porte d’entrée de la
        maison est verrouillée, mais celle du patio n’est pas fer-
        mée.`, ` Il est possible de franchir la clôture par l’arrière,
        en prenant soin d’éviter ceux qui pourraient regarder le
        jardin ou la maison.`]
    },
    {
      condition: {
        title: `Dans la maison`,
        type: 'place'
      },
      clue: `Tout
        est sale et en désordre ; des câbles, des outils et des cro-
        quis bizarres sont éparpillés partout.`,
      sideEffects: [`Les bibliothèques
        sont pleines de livres sur les oiseaux, la neurobiologie
        et l’éthologie, mais aussi sur les sentiments, l’amour,
        et les méthodes permettant d'attirer l'attention de
        quelqu'un`]
    },
    {
      condition: {
        title: `Le salon`,
        type: 'place'
      },
      clue: `Les murs du salon sont couverts de dizaines de
        photos encadrées de scientifiques célèbres. Au côté
        d’Einstein est accrochée une photo d'une femme entre deux âges,
        blonde, au regard fier, portant un pin’s symbolisant le Yin et le Yang sur sa
        blouse de laboratoire.`,
      sideEffects: [` Sur un magnétoscope repose une
        cassette vidéo du fi lm Les Oiseaux d’Alfred Hitchcock.`]
    },
    {
      condition: {
        title: `Les photos de Lena`,
        type: 'see'
      },
      clue: `Dans chaque pièce de la maison on trouve des photos
        de la femme de la photo avec un homme en arrière plan. La plupart du temps, il se trouve
        à l’arrière-plan et sourit timidement en la regardant.`
    },{
      condition: {
        title: `Découverte de Majsan`,
        type: 'clock'
      },
      clue: `Majsan commencera par se cacher et si les Enfants
        rentrent, elle lâche Bullen qui se précipite vers eux en
        aboyant à tue-tête.`,
      sideEffects: [`Elle reste en arrière, armée d’un
        couteau de cuisine, et leur crie de partir sinon elle les
        blessera. Elle leur dit de ne pas révéler sa présence ici
        s’ils ne veulent pas avoir d'ennuis.`]
    },
    {
      condition: {
        title: `Fouiller les affaires de Gunnar`,
        type: 'search'
      },
      clue: `on y trouve des
        croquis de processeurs et d’oiseaux qui peuvent être
        examinés avec un test d’analyse.`,
      sideEffects: [`S’il est réussi, les Enfants comprennent qu'il s'agit des esquisses
        d’une machine qui attire les oiseaux et les modifie automatiquement.`,
        `Les puces électroniques laissent supposer que
        quelqu’un doit contrôler les oiseaux, mais les schémas
        manquent de détails sur le fonctionnement exact de
        l'engin, comme si le concepteur s’était arrêté au milieu
        de son projet.`]
    },
    {
      condition: {
        title: `Sous le lit de Gunnar`,
        type: 'search'
      },
      clue: `Caché sous le lit de Gunnar se trouve un journal
        intime où il y évoque son travail au Loop.`,
      sideEffects: [`À plusieurs endroits, il parle de son amour pour la merveilleuse
        Lena, qui est non seulement magnifique, mais aussi
        dotée d’un esprit brillant qui remportera un jour le
        Prix Nobel.`, ` Il écrit également au sujet des collègues qui
        ne comprennent pas Lena, complotent contre elle et la
        traitent méchamment.`, `La tristesse insondable qu’il a
        ressentie lorsqu’elle a été obligée de quitter son poste
        est décrite en détail, mais deux semaines après il a été
        submergé de joie quand elle lui a proposé de travail-
        ler avec elle sur une nouvelle expérience, dans un lieu
        nommé « IEX-4Z32 ».`, `Un Enfant qui réussit un test de
        compréhension ou d’analyse saura qu’il s’agit d’une
        immatriculation de vaisseau à magnétrine, mais devra
        aller se renseigner pour en savoir plus.`]
    }
  ]
};

module.exports = GunnarHouse;
