import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export class PlaceService {
  url = '/api/scenarios/:scenarioId/places';
  onSubmit(scenarioId, place, file) {
    return ajax({
      url: this.url.replace(':scenarioId', scenarioId),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        place : {
            ...place,
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
}