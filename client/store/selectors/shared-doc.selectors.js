import { createSelector } from 'reselect'

import { selectScenarioById } from './scenarios.selectors';

export const selectSharedDocs = createSelector(
  selectScenarioById,
  (scenario) => scenario.helpDocs
);

export const isSharedDocActive = (state, id, index) => selectSharedDocs(state, id)[index].shared;
