import { combineEpics } from 'redux-observable';

import { fetchPlacesEpic } from './places.epic';
import { fetchPnjsEpic } from './pnjs.epic';

export const rootEpic = combineEpics(fetchPlacesEpic, fetchPnjsEpic);
