import { createSelector } from 'reselect'

import { selectScenarioById } from './scenarios.selectors';

const selectPnjId = (state, pnjId) => pnjId;

const selectPnjs = createSelector(
  selectScenarioById,
  (scenario) => scenario.pnjs
);

export const selectPnjById = createSelector(
  selectPnjs,
  selectPnjId,
  (pnjs, id) => pnjs[id] ? pnjs[id] : {}
);

export const selectPnjTitle = createSelector(
  selectPnjById,
  pnj => pnj ? pnj.title : ''
);
