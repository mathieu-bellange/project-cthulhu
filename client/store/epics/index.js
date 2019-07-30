import { combineEpics } from 'redux-observable';

import { fetchPlacesEpic } from './places.epic';

export const rootEpic = combineEpics(fetchPlacesEpic);
