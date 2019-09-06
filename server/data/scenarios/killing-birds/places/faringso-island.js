const FaringsoIsland = {
  id: 'faringso-island',
  title: `L'île Färingso durant l'été`,
  dashboard: true,
  desc: [`Les vacances d’été sont arrivées, le soleil brille pendant
    presque toute la journée, et il fait vraiment chaud. Les
    bouleaux, les pins, les fougères et les buissons de mûres
    couvrent le paysage. Les moustiques harcèlent ceux
    qui s’aventurent dans les sous-bois où lapins, renards
    et chevreuils s’occupent de leurs jeunes portées.`, `Sur
    le rivage, on voit des petits poissons et des mouches
    qui prospèrent au milieu des algues. Les jeunes enfants
    cueillent des fl eurs, nagent et jouent à chat perché,
    tandis que les adolescents restent debout toute la
    nuit en buvant de la bière, en faisant des courses de
    mobylettes trafi quées, en s’essayant au tabac pour la
    première fois et en s’embrassant dans des tentes mala-
    droitement dressées.`, `Les jardins diffusent des odeurs
    de barbecue et de peinture fraîche provenant des palis-
    sades rénovées. Le drapeau suédois fl otte haut sur
    les mâts, et la radio diffuse l’émission Summer dans
    la véranda, tous les jours à treize heures.`, `Le pois-
    son fraîchement pêché par les chalutiers du port, les
    pommes de terre nouvelles du jardin et les fraises sont
    consommés en grandes quantités. Au kiosque, le clown
    de Glace-Bolaget tente petits et grands avec ses glaces
    Storstrut (boule de glace vanille enrobée de chocolat) et
    Lakritspuck (glace vanille enrobée de réglisse en forme
    de palet de hockey).`],
  overview: 'killing-birds/mistery_map.png',
  clues: [
    {
      condition: {
        title: 'Jouer une scène de la vie quotidienne',
        type: 'description'
      },
      clue: `À l’arrière-plan, un adulte mentionnera Lena et
        Gunnar ou fera une blague sur eux et leurs supposées
        « vacances en amoureux ».`
    }
  ],
  insidePlaces: ['mistery']
};

module.exports = FaringsoIsland;
