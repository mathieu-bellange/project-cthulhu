const MatsTingblad = {
  id: 'mats-tingblad',
  title: 'Mats Tingblad',
  desc: [`Mats est un homme imposant, chauve, avec une
    grosse barbe. Il a de grandes mains, mais une voix
    légère et presque féminine. Il est vêtu d’habits d’exté-
    rieur sales, a une paire de jumelles accrochée autour
    du cou, et un carnet de notes à la main.`, `« Le pic-vert frappe le tronc avec son bec de huit à dix
    fois par seconde. Il peut trouer le ciment. Imaginez ce
    qui pourrait arriver s’il s’en prenait à votre crâne. »`, `Mats Tingblad aime les oiseaux depuis qu’il est enfant.
    Il est devenu une fi gure célèbre des programmes natu-
    ralistes de la télévision, jusqu’à cette fameuse morsure
    de cygne. Personne ne sait s’il est devenu phobique à
    cause de la morsure, ou si une infection de la blessure
    l’a affecté, mais il est devenu introverti, paranoïaque,
    et terrifi é par les oiseaux qu’il aimait tant.`, `Mats est pourtant toujours obsédé par ces ani-
    maux, et vit entouré de cages, de disques de chants
    d’oiseaux, d’affi ches et de livres spécialisés. Mais
    au lieu de les étudier avec tendresse, il les regarde
    avec horreur. Il est convaincu qu’un jour ou l’autre,
    les oiseaux joindront leurs forces pour s’en prendre à
    l’humanité, alors il cherche à s’y préparer autant que
    possible en étudiant ses ennemis.`],
  overview: 'killing-birds/mats_tingblad.png',
  clues: [
    {
      condition: {
        title: `Parler avec Mats`,
        type: 'roll'
      },
      clue: `Mats est angoissé par l’agressivité des oiseaux, il
        ne voit pas de raison d’aider les Enfants. ils
        parviennent à le convaincre, par exemple grâce à leur
        charme.`,
      sideEffects: [`Un Enfant qui réussit un test d’empathie com-
        prend que Mats s’inquiète de ce qui se passera si les
        oiseaux prolifèrent.`, `La façon la plus simple d’obtenir
        son aide est de le convaincre que les Enfants peuvent
        empêcher la propagation des oiseaux tueurs. Mais il est
        impossible de lui faire quitter sa maison, car il est trop
        terrifi é pour sortir.`]
    },
    {
      condition: {
        title: `Modification des oiseaux`,
        type: 'chat'
      },
      clue: `Mats comprend que quelqu’un a modifié les oiseaux
        pour les rendre violents et plus intelligents. Il a remarqué que chez les pigeons, c'est le langage qui s'est
        développé plutôt que l'agressivité.`,
      sideEffects: [`Il les a comptés et a
        constaté que leur nombre augmente constamment. En
        outre, ils semblent s’organiser en groupes de plus en
        plus importants qui prennent l’ascendant sur la faune
        de la région.`, `Il ne faudra pas longtemps avant qu’ils
        attaquent les animaux et les humains.`, `Mats pense qu’il
        y a une personne ou une machine derrière tout cela,
        et qu'il faut l'arrêter avant que les îles du lac Mälar
        soient confrontées à un désastre qui
        pourrait potentiellement s’étendre au pays entier.`]
    },
    {
      condition: {
        title: `Gunnar Granat`,
        type: 'chat'
      },
      clue: `Mats a rencontré Gunnar Granat à plusieurs reprises. Il sait qu’il s’agit d’un spécialiste
        de la neurologie aviaire.`,
      sideEffects: [`Il sait également que le scien-
        tifique a quitté récemment son domicile en périphérie
        de Kungsberga et disparu. Il suspecte
        Gunnar d’être lié aux oiseaux tueurs.`]
    },
    {
      condition: {
        title: `Déplacement des pigeons`,
        type: 'chat'
      },
      clue: `Mats a remarqué que beaucoup de pigeons se déplaçaient vers le nord.
        Il a deviné qu’ils y ont construit un grand nid.`,
      sideEffects: [`Il a aussi noté que plusieurs des oiseaux
        agressifs traversaient le lac, et en a déduit que leur
        nid est situé sur Munsö ou sur une des petites îles au
        nord de Färingsö`, `Il a vu un
        autour survoler les autres oiseaux, et pense qu’il s'agit
        du meneur. Il estime que tout cela peut conduire les
        Enfants aux différents habitats des oiseaux.`]
    }
  ]
};

module.exports = MatsTingblad;
