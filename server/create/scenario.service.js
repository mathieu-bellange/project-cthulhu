const { of } = require('rxjs');
const { map, tap } = require('rxjs/operators');

class ScenarioService {
  add(scenario) {
    return of(scenario).pipe(
      map(({ scenario }) => ({
        ...scenario,
        description: scenario.description.split('\n'),
        overview: scenario.overview === '' ? 'place-default.png' : `${scenario.id}/${scenario.overview}`
      })),
      tap(console.log)
    );
  }
}

module.exports = ScenarioService;
