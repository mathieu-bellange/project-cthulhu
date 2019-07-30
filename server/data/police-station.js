const PoliceStation = {
  url: 'place/police-station',
  place: {
    title: 'Poste de Police Central',
    desc: `Situé au 360 Stuart Street, le batîment est très récent (livré au début de l'année 1923)
      et extrêmement imposant. La façade est constitué d'une multitude de fenêtre réparti sur une dizaine d'étage
      et la porte massive est surplombé par une grande arche. Le bâtiment posé au milieu de ce quartier en pleine
      métamorphose donne une impression de toute puissance de la police Bostonienne.
      Les investigateurs sont accueillis par un agent de police dans le hall.`,
    overview: 'haunting-house/police-station.jpg',
    clues: [
      {
        condition: {
          title: 'Agent de police Francis Patterson',
          type: 'roll'
        },
        clue: `Un tirage réussi en Droit, Crédit ou
          Baratin donne accès aux dossiers
          concernant la Chapelle de la
          Contemplation.`,
        sideEffects: [
          'Les investigateurs vont devoir la jouer fine pour obtenir ses informations.',
          'L\'agent de police pourra éventuellement faire appel à un supérieur, le Capitaine Richard Allen.',
          'L\'agent de police pourra donner librement les informations si il se sent en confiance.',
          'Donne accès aux informations sur la chapelle'
        ]
      },
      {
        condition: {
          title: 'Intervention en 1912',
          type: 'search'
        },
        clue: `Une descente de police fut
          organisée secrètement en 1912, après que
          plusieurs personnes eurent déclaré sous
          serment que la secte était responsable de la
          disparition de plusieurs enfants du
          voisinage. Trois policiers et sept fanatiques
          furent tués au cours de la fusillade et de
          l’incendie qui éclatèrent lors du raid.`,
          sideEffects: [
            `Les rapports d’autopsie joints sont étrangement laconiques et peu détaillés,
            comme si le médecin légiste n’avait pas procédé aux examens d’usage.`,
            `Des cinquante-quatre sectateurs arrêtés, huit
            seulement furent incarcérés. Les rapports
            laissent à penser que d’importantes
            personnalités étaient liées à la secte, ce qui
            expliquerait qu’il n’a jamais été fait
            mention de cette affaire – la plus importante
            des annales criminelles de la ville – dans la
            presse.`
          ]
      },
      {
        condition: {
          title: 'Arrestation de Michael Thomas',
          type: 'search'
        },
        clue: `Le pasteur Michael Thomas fut néanmoins
          appréhendé et condamné à 40 ans de
          prisons pour cinq inculpations de meurtre
          au second degré.`,
        sideEffects: [
          `Il s’est évadé en 1917 et semble avoir quitté aussitôt l’Etat.`
        ]
      },
      {
        condition: {
          title: 'Absence d\'adresse de l\'intervention',
          type: 'chat'
        },
        clue: `Si ils demandent à l'agent de police, il trouve cela très étrange que l'adresse ne figure pas.
          Ce genre d'opération doit encore être présent dans les mémoires, se rapprocher du quartier où les lieux ont eu.`,
        sideEffects: [
          `l'agent de police recoupe avec les plaintes et retrouve le quartier de Merrimack Street,
          ancien quartier résidentiel devenu un quartier d'affaire.`,
          `Piste vers le voisinnage`
        ]
      }
    ]
  }
};

module.exports = { PoliceStation };
