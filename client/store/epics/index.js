import { combineEpics } from 'redux-observable';

import { fetchScenariosEpic } from './scenarios.epic';
import { sharedDocEpic } from './help-doc.epic';

export const rootEpic = combineEpics(fetchScenariosEpic, sharedDocEpic);
