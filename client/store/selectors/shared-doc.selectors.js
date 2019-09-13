import { createSelector } from 'reselect'

import { selectScenarioById } from './scenarios.selectors';

export const selectSharedDocs = createSelector(
  selectScenarioById,
  (scenario) => scenario.helpDocs
);
