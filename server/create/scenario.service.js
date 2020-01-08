const { of } = require('rxjs');
const { map, tap } = require('rxjs/operators');

class ScenarioService {
  add(scenario) {
    return of(scenario).pipe(
      tap(console.log),
      map(({ scenario }) => ({
      ...scenario,
      description: scenario.description.split('\n')
    })));
  }
}

module.exports = ScenarioService;
