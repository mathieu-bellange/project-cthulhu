const MajsanSivertsson = {
  id: 'majsan-sivertsson',
  title: 'Majsan Sivertsson',
  desc: [`Majsan, quinze ans, est une jeune fille nerveuse, au teint hâlé et
    aux cheveux blonds modelés à la laque. Elle porte des
    lunettes de soleil colorées, un t-shirt de Minnie Mouse.`,
    `Quand elle ne mâche pas du chewing-gum, elle fume`],
  overview: 'killing-birds/majsan-sivertsson.png',
  clues: [
    {
      condition: {
        title: `Test d'empathie`,
        type: 'roll'
      },
      clue: `En utilisant Empathie,
        ils comprennent qu’elle se sent très seule, et qu’elle est
        effrayée par ce qu’elle a découvert dans la maison.`,
      sideEffects: [`Elle
        a envie de rencontrer d’autres gens, mais elle ne peut
        pas, sous aucun prétexte, faire confi ance à des adultes.`]
    },
    {
      condition: {
        title: `Parler avec Majsan`,
        type: 'roll'
      },
      clue: `Les Enfants peuvent la faire changer d’humeur
        grâce à un test de Charme réussi.`
    },
    {
      condition: {
        title: `Connaissance des lieux`,
        type: 'chat'
      },
      clue: `Majsan connaît le nid de pigeon, et sait qu’ils ne sont
        pas dangereux. Elle connaît aussi l’ornithologue Mats
        Tingblad, et pense qu’il en sait plus, mais n’ose pas
        aller lui parler.`
    },
    {
      condition: {
        title: `Son histoire`,
        type: 'chat'
      },
      clue: `Elle vit en secret dans la maison depuis quelques mois. Elle vient du
        centre de Stockholm, d’où elle a fui un beau-père envahissant et autoritaire.`,
      sideEffects: [` Elle a emmené son chien, un teckel à poil dur, gros et joyeux, nommé
      Bullen, qui la défend avec zèle.`, `Bullen boite depuis que le beau-père lui a blessé la patte.`]
    },
    {
      condition: {
        title: `Intérêt pour les oiseaux`,
        type: 'chat'
      },
      clue: `Elle a été agressée par une bande de mouettes. Elle
        en a tué une, qu’elle a autopsiée avec un couteau, une
        paire de tenailles et des ciseaux trouvés dans la cuisine
        de Gunnar.`,
      sideEffects: [`Elle soupçonne Gunnar d’être responsable d’une
        manière ou d’une autre de l’existence des oiseaux
        tueurs, mais ignore où il se trouve actuellement`, `Gunnar est son oncle`]
    }
  ]
};

module.exports = MajsanSivertsson;
