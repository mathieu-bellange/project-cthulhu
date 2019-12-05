import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
    SHARED_DOC,
    UN_SHARED_DOC,
    sharedHelpDocFailure,
    sharedHelpDocSuccess
} from '../actions';

const url = '/api/help-document';

export function sharedDocEpic(action$) { // action$ is a stream of actions
    // action$.ofType is the outer Observable
    return action$
        .ofType(SHARED_DOC)
        .switchMap(action => {
            // ajax calls from Observable return observables. This is how we generate the inner Observable
            return ajax({
              url,
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: action.payload
            });
        })
        .map(res => sharedHelpDocSuccess(res.response))
        // every action that is contained in the stream returned from the epic is dispatched to Redux, this is why we map the actions to streams.
        // if an error occurs, create an Observable of the action to be dispatched on error. Unlike other operators, catch does not explicitly return an Observable.
        .catch(error => Observable.of(sharedHelpDocFailure(error.message)))
}

export function unSharedDocEpic(action$) { // action$ is a stream of actions
    // action$.ofType is the outer Observable
    return action$
        .ofType(UN_SHARED_DOC)
        .switchMap(action => {
            // ajax calls from Observable return observables. This is how we generate the inner Observable
            return ajax({
              url,
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              body: action.payload
            });
        })
        .map(res => sharedHelpDocSuccess(res.response))
        // every action that is contained in the stream returned from the epic is dispatched to Redux, this is why we map the actions to streams.
        // if an error occurs, create an Observable of the action to be dispatched on error. Unlike other operators, catch does not explicitly return an Observable.
        .catch(error => Observable.of(sharedHelpDocFailure(error.message)))
}
