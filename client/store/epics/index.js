import { combineEpics } from 'redux-observable';

import { fetchScenariosEpic } from './scenarios.epic';

export const rootEpic = combineEpics(fetchScenariosEpic);
