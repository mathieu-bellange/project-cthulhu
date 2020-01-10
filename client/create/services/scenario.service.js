import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export class ScenarioService {
  url = '/api/scenarios';
  onSubmit(scenario, file) {
    return ajax({
      url: this.url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        scenario : {
            ...scenario,
            overview: file ? file.name : ''
        }
      }
    }).pipe(
        map(result => result.response),
        catchError(error => {
          console.log('error: ', error);
          return of(error);
        })
    );
  }
  postImg(scenarioId, file) {
    const formData = new FormData();
    formData.append('img', file);
    return ajax({
      method: 'POST',
      url: `/api/images/${scenarioId}`,
      body: formData
    });
  }
}
