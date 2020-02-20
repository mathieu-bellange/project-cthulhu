const { of } = require('rxjs');
const { map, tap } = require('rxjs/operators');
const fs = require('fs');
const { omit } = require('lodash');

class PlaceService {
  add(scenarioId, place) {
    return of(place).pipe(
      map(({ place }) => {
        const clues = place.clues.map(clue => ({ ...clue, sideEffects: clue.sideEffects ? clue.sideEffects.split('\n') : [] }));
        const desc = place.description ? place.description.split('\n') : [];
        const overview = place.overview === '' ? 'place-default.png' : `scenarios/${scenarioId}/${place.overview}`;
        return ({ ...omit(place, ['description']), clues, desc, overview });
      }),
      tap(place => fs.writeFileSync(`server/data/scenarios/${scenarioId}/places/${place.id}.json`, JSON.stringify(place), 'utf-8'))
    );
  }
}

module.exports = PlaceService;
