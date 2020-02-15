const { of } = require('rxjs');
const { map, tap } = require('rxjs/operators');
const fs = require('fs');
const path = require('path');
const { omit } = require('lodash');

class PlaceService {
  add(scenarioId, place) {
    return of(place).pipe(
      map(({ place }) => ({
        ...omit(place, ['description']),
        desc: place.description ? place.description.split('\n') : [],
        overview: place.overview === '' ? 'place-default.png' : `${scenarioId}/${place.overview}`,
      })),
      tap(place => fs.writeFileSync(`server/data/scenarios/${scenarioId}/places/${place.id}.json`, JSON.stringify(place), 'utf-8'))
    );
  }
}

module.exports = PlaceService;