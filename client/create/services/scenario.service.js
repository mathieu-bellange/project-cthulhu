import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export class ScenarioService {
  url = '/api/scenarios';
  onSubmit(scenario) {
    return ajax({
      url: this.url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        scenario
      }
    }).pipe(
        map(result => result.response),
        catchError(error => {
          console.log('error: ', error);
          return of(error);
        })
    );
  }
}
