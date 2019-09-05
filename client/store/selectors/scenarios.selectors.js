import { createSelector } from 'reselect'

const selectScenarioId = (state, scenarioId) => scenarioId;
const selectScenariosState = state => state.scenariosReducer;

const selectScenarios = createSelector(
  selectScenariosState,
  scenariosState => scenariosState.scenarios
);

export const selectScenarioById = createSelector(
  selectScenarios,
  selectScenarioId,
  (scenarios, id) => scenarios['haunted-house'] ? scenarios['haunted-house'] : {}
);

export const isScenariosLoaded = createSelector(
  selectScenariosState,
  (scenariosState) => scenariosState.scenariosLoaded
);
