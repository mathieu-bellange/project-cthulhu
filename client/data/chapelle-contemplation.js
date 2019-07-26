import { CaveContemplation } from './cave-contemplation';

export const ChapelleContemplation = {
  url: 'place/contemplation',
  place: {
    title: 'La Chapelle de la Contemplation',
    desc: `Ce qui reste de cet édifice se trouve à
      l’extrémité d’une ruelle insalubre, tellement
      mal entretenue et envahie par la végétation
      que les ruines ressemblent à des concrétions
      naturelles.`,
    overview: "place-default.png",
    music: ["https://tabletopaudio.com/download.php?downld_file=177_Tavern_Music.mp3"],
    pnjs: ['walter-corbitt', {
      title: 'Son nom',
      desc: `une petite description visuelle`,
      overview: 'lovecraft.jpg',
      clues: [
        {
          condition: {
            title: 'Test',
            type: 'see'
          },
          clue: `a voir`,
          sideEffects: [`oups`]
        }
      ],
      stats: {
        str: 90,
        dex: 35,
        con: 110
      }
    }],
    clues: [
      {
        condition: {
          title: 'Entrer dans l\'enceinte',
          type: 'place'
        },
        clue: `Les investigateurs vont devoir
          franchir un mur à moitié éboulé sur lequel a
          été récemment tracé à la peinture blanche
          un étrange symbole : un œil grand ouvert
          entouré de trois “ Y ” arrangés de manière à
          ce que leurs branches supérieures se
          touchent et forment un triangle.`,
        sideEffects: [`Lorsqu’ils
          s’en approchent, ils sentent des élancements
          dans leur front, un peu comme s’ils avaient
          brusquement la migraine. Cette sensation
          persiste aussi longtemps qu’ils restent dans
          les parages de la Chapelle`]
      },
      {
        condition: {
          title: 'Sortir de la chapelle',
          type: 'place'
        },
        clue: `Quand
          ils s’en vont, les douleurs cessent aussitôt`,
        sideEffects: [``]
      },
      {
        condition: {
          title: 'A un certain moment',
          type: 'clock'
        },
        clue: `Ils se rendent compte que
          la terre qu’ils foulent recouvre, en fait, un
          plancher pourri`,
        sideEffects: [
          `Rater un jet de DEX et le sol se dérobe
          sous leurs pieds sans pouvoir se retenir à
          quelque chose et font une chute de 3 mètres
          (1D6 points de dommage)`,
          'Ils découvrent la cave'
        ]
      }
    ],
    insidePlace: {
      cave: CaveContemplation
    }
  }
};
