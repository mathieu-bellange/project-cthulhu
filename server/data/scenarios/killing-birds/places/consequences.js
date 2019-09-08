const Consequences = {
  id: 'consequences',
  title: `Conséquences`,
  dashboard: true,
  desc: [`Même si les Enfants stoppent Gunnar, il n’admettra
    jamais son implication.`, `De plus, la technologie de la
    machine est étrange, les adultes ne croiront jamais qu’elle
    puisse avoir un rapport avec les attaques d’oiseaux.`, `La plupart des volatiles modifi és s’échapperont.
    Même si les Enfants en capturent un pour le montrer
    aux policiers, ceux-ci ne feront pas le lien avec les
    attaques.`, `Gunnar ne parlera pas de Lena et de sa responsabi-
    lité dans les événements. Son amour pour elle est trop
    fort, mais il a fi nalement accepté qu’elle ne l’aimera
    jamais en retour. Gunnar fi nira, au cours des mois sui-
    vants, par quitter la région. Il laissera Majsan vivre
    dans sa maison autant qu’elle le voudra.`],
  overview: 'default_tales.png',
  clues: [
    {
      condition: {
        title: `Scène de la vie quotidienne`,
        type: 'description'
      },
      clue: `Les Enfants jouent désormais tous une scène de leur
        Vie quotidienne, avec ou sans Difficulté.`,
      sideEffects: [`Si le groupe n’a pas le temps de
        le faire, les joueurs peuvent se contenter de décrire un
        bref moment de la Vie quotidienne de leur Enfant`]
    },
    {
      condition: {
        title: `Evolution`,
        type: 'description'
      },
      clue: `Les joueurs ont la possibilité, s’ils le souhaitent,
        de changer leur Problème, leur
        Motivation, leur Objet fétiche et leurs Liens.`,
      sideEffects: [`Posez les questions relatives à l’Expérience à haute voix
        (cf. page 88). Souvenez-vous que chaque Enfant gagne
        1 XP pour chaque réponse affirmative, et s’ils gagnent
        5 XP, ils peuvent améliorer une compétence d’un niveau.`]
    }
  ]
};

module.exports = Consequences;
