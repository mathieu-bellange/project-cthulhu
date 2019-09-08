const GunnarGranat = {
  id: 'gunnar-granat',
  title: 'Gunnar Granat',
  desc: [`Gunnar est un homme mince d’âge moyen, aux
    longs cheveux en désordre. Il est vêtu d’une blouse de
    laboratoire particulièrement sale, et il a un cheveu sur
    la langue.`, `Gunnar est un biologiste spécia-
    lisé dans la neurologie aviaire, qui a travaillé de nom-
    breuses années au Loop à la conception d’implants
    cérébraux pour cyborgs`, `Gunnar vit dans un placard derrière le cockpit,
    avec un paquet à moitié entamé de Mariekex et une bouteille presque vide de Trocadero`,
    `Gunnar est très sale et couvert de bles-
    sures dues aux coups de bec. Sa barbe et ses cheveux
    ne sont pas entretenus, et son regard brille d’une lueur
    démente. Il semble fou…`],
  overview: 'killing-birds/gunnar-granat.png',
  clues: [
    {
      condition: {
        title: `Neutraliser Gunnar`,
        type: 'description'
      },
      clue: `Il peut être charmé pour lui faire prendre conscience
        de ses erreurs, il peut être jeté au sol par la force`,
      sideEffects: [`Si les Enfants parviennent à leurs fi ns, Gunnar fond
        en larmes`]
    }
  ]
};

module.exports = GunnarGranat;
