const Cave = {
  id: 'cave',
  title: 'Cave',
  dashboard: false,
  desc: `Petit escalier grinçant monte vers le premier étage.
    Il dessert un couloir très étroit qui donne sur 4 chambres.`,
  overview: 'haunting-house/cave.jpg',
  music: ['https://tabletopaudio.com/download.php?downld_file=125_Existential_Dread.mp3'],
  pnjs: ['walter-corbitt'],
  clues: [
    {
      condition: {
        title: 'La porte qui mène à la cave',
        type: 'place'
      },
      clue: `la porte donnant sur la cave est
        équipée d'une serrure et de trois loquets
        qui ne peuvent être manipulés que depuis
        le rez-de-chaussée. Un escalier branlant
        descend jusqu'à un grand débarras. Les
        marches sont en très mauvais état.`,
      sideEffects: [`Chaque investigateur qui viendra
        ici devra réussir un Test de DEX normal
        pour ne pas tomber dans l'escalier et perdre
        1D6 points de vie.`]
    },
    {
      condition: {
        title: 'Pièce 1',
        type: 'place'
      },
      clue: `Toutes sortes d'objets sont éparpillés dans
        cette pièce : outils, bouts de tuyaux,
        morceaux de poutres, clous, vis, etc. Les
        murs latéraux sont en briques, alors que
        celui du fond (#3) est en bois, tout comme
        les parois du réduit aménagé sous l'escalier
        (#2).`,
      sideEffects: [`Si un
        investigateur fouille dans ce
        fatras et réussit un jet en
        Trouver Objet Caché, il
        découvrira un vieux couteau
        ouvragé dont la lame est
        recouverte d'une épaisse couche
        de rouille.`, `Il s'agit du
        sang séché des victimes qui ont été
        tuées avec cette arme. Corbitt est
        capable de la faire flotter dans les airs et
        de s'en servir pour poignarder quelqu'un.`, `Le personnage visé peut essayer de parer
        au moyen d'un couvercle de poubelle
        (chances de base : 30%), aucun autre objet
        ne pouvant faire l'affaire dans cette pièce.
        Tous les spectateurs du combat perdront 1
        / 1D4 points de Santé Mentale.`, `L'investigateur peut aussi tenter d'attraper
        le couteau au vol (il doit pour cela réussir
        un jet de pourcentage inférieur ou égal à sa
        DEX). S'il y parvient, il lui faudra ensuite
        faire un test de FOR face à PM * 5 de Corbitt. Si ce
        dernier l'emporte, le poignard se libérera
        en se tordant violemment, infligeant à
        l'audacieux 1 point de dommages sous la
        forme de coupures aux mains. Libérer
        l'arme de cette manière coûtera à Corbitt
        un autre point de magie.`]
    },
    {
      condition: {
        title: 'Pièce 2',
        type: 'place'
      },
      clue: `une petite cave à charbon, vide.
        Le soupirail qui permettait d'introduire le
        combustible a été condamné.`
    },
    {
      condition: {
        title: 'Pièce 3',
        type: 'place'
      },
      clue: `Une puanteur immonde émane de ce réduit où ce sont installés des rats.`,
      sideEffects: [`le mur du fond de la pièce 1 est
          fait d'un lattis de bois. Si ces planches sont
          arrachées, elles révéleront un étroit
          passage et une nouvelle paroi de bois`, `Si les
          investigateurs ne leur laissent pas la
          possibilité de fuir, les rats attaqueront
          quiconque se risquera à explorer le réduit.
          Il y a 6 groupes de rats.`,
          `Chaque horde inflige 1D3 dégats et leur chance de toucher est nb de horde * 5.`,
          `Un coup réussit fait fuir une horde de rat`,
          `La paroi intérieure porte une inscription :
          « Chapelle de la Contemplation ». Mais
          ces mots ont été gravés avec tellement de
          maladresse qu'il faudra réussir un jet en
          Trouver Objet Caché pour les remarquer.`]
    },
    {
      condition: {
        title: 'Pièce 4',
        type: 'place'
      },
      clue: `voici la cachette de Corbitt. Il
        gît, immobile et apparemment mort, sur
        une planche soutenue par des tréteaux, au
        milieu de la pièce. Le sol est en terre battue
        et il y a une table dans le coin sud-ouest,
        sur laquelle se trouvent des papiers
        froissés qui tomberont en poussière si on
        les touche.`,
      sideEffects: [`Corbitt doit dépenser 2 Points de Magie
        pour être en mesure de se déplacer pendant
        5 rounds, aussi ne se lèvera-t-il que s'il se
        sent menacé. Dans ce cas, toutes les
        personnes présentes perdront 1 / 1D8
        points de Santé Mentale en contemplant ce
        spectacle.`]
    }
  ]
};

module.exports = Cave;
