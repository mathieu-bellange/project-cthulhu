import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
    FETCH_PLACES,
    fetchPlacesFailure,
    fetchPlacesSuccess
} from '../actions';

const url = '/api/places'; // The API for the whiskies

export function fetchPlacesEpic(action$) { // action$ is a stream of actions
    // action$.ofType is the outer Observable
    return action$
        .ofType(FETCH_PLACES) // ofType(FETCH_WHISKIES) is just a simpler version of .filter(x => x.type === FETCH_WHISKIES)
        .switchMap(() => {
            // ajax calls from Observable return observables. This is how we generate the inner Observable
            return ajax
                .getJSON(url) // getJSON simply sends a GET request with Content-Type application/json
        })
        .map(whiskies => fetchPlacesSuccess(whiskies)) // map the resulting array to an action of type FETCH_WHISKIES_SUCCESS
        // every action that is contained in the stream returned from the epic is dispatched to Redux, this is why we map the actions to streams.
        // if an error occurs, create an Observable of the action to be dispatched on error. Unlike other operators, catch does not explicitly return an Observable.
        .catch(error => Observable.of(fetchPlacesFailure(error.message)))
}
