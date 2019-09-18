import { combineEpics } from 'redux-observable';

import { fetchScenariosEpic } from './scenarios.epic';
import { sharedDocEpic, unSharedDocEpic } from './help-doc.epic';

export const rootEpic = combineEpics(fetchScenariosEpic, sharedDocEpic, unSharedDocEpic);
