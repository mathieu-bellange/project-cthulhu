const GroundFloor = {
  id: 'ground-floor',
  dashboard: false,
  title: 'Rez de chaussée',
  desc: `Long couloir déservant de nombreuses pièces
    et un escalier à l'opposé de la porte principal. Il règne un bazard sans nom comme si
    les Macario étaient partis en laissant tout derrière eux.
    Sans lumière, il est très difficile de se déplacer sans heurter quelque chose.`,
  overview: 'haunting-house/ground-floor.jpg',
  clues: [
    {
      condition: {
        title: 'L\'intérieur du couloir',
        type: 'see'
      },
      clue: `Il fait très sombre, si les investigateurs tentent d'allumer, les plombs sautent immédiatement.`
    },
    {
      condition: {
        title: 'Pièce 1',
        type: 'place'
      },
      clue: `un débarras encombré de caisses
        et de rebuts, tels que des bouilloires
        rouillées, des vieilles bicyclettes, etc. Sur le
        côté droit, il y a une armoire fermée par une
        planche clouée.`,
      sideEffects: [
        `On trouve à l'intérieur de l'armoir trois vieux livres. C’est
          le journal intime d'un certain W. Corbitt, un ancien occupant de la maison, comme
          l'atteste l'adresse notée sur la page de garde du premier volume.`,
          `Ce journal est rédigé dans un anglais châtié,
          bien qu'assez déconcertant par endroits.`,
          `La lecture des trois tomes prendra en tout trois
          jours et fera gagner 4% en Mythe de
          Cthulhu, tout en coûtant 1D4 points de Santé Mentale.`
      ]
    },
    {
      condition: {
        title: 'Pièce 2',
        type: 'place'
      },
      clue: `Un second débarras, rempli
        essentiellement de meubles cassés qui
        étaient sans doute destinés à être débités
        afin de servir de bois de chauffage.`
    },
    {
      condition: {
        title: 'Pièce 3',
        type: 'place'
      },
      clue: `un vestibule, où on peut encore
        trouver des pardessus, des bottes en
        caoutchouc, des chapeaux et des parapluies.
        Plusieurs sacs de charbon y ont été
        entreposés. Pièce donnant dehors`
    },
    {
      condition: {
        title: 'Pièce 4',
        type: 'place'
      },
      clue: `Le salon. Il contient du mobilier
        conventionnel : un poste de radio, un sofa,
        des chaises rembourrées et des étagères
        couvertes de bibelots.`,
      sideEffects: [
        `Il y a une profusion inhabituelle de
          croix, portraits de la Vierge et autres objets
          pieux`
      ]
    },
    {
      condition: {
        title: 'Pièce 5',
        type: 'place'
      },
      clue: `La salle à manger, qui contient
        une longue table en acajou, un placard
        encastré et sept chaises. Trois couverts sont
        placés autour d'une soupière contenant
        encore une substance nauséabonde qui
        semble avoir été de la soupe au riz.`
    },
    {
      condition: {
        title: 'Pièce 6',
        type: 'place'
      },
      clue: `une cuisine tout à fait classique,
        qui contient une glaciaire, une cuisinière à
        bois et un petit garde-manger. Certains
        aliments sont encore consommables :
        viande et soupe en boîtes, riz, paquets de
        pâtes et quelques bouteilles de vin. Diverses
        denrées ont apparemment été dévorées par
        les rats, si on en juge par les traces visibles
        par terre.`
    },
    {
      condition: {
        title: 'Passage vers la cave',
        type: 'place'
      },
      clue: `Lors de la première approche vers la cave, du bruit se fait entendre à l'étage`,
      sideEffects: [
        `Corbitt tente d'attirer l'attention des investigateurs vers l'étage.`
      ]
    }
  ]
};

module.exports = GroundFloor;
