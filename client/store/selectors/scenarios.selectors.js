import { createSelector } from 'reselect'

const selectScenarioId = (state, scenarioId) => scenarioId;
const selectScenariosState = state => state.scenariosReducer;

export const selectScenarios = createSelector(
  selectScenariosState,
  scenariosState => scenariosState.scenarios
);

export const selectScenarioById = createSelector(
  selectScenarios,
  selectScenarioId,
  (scenarios, id) => {
    console.log(scenarios, id);
    return scenarios[id] ? scenarios[id] : {}}
);

export const isScenariosLoaded = createSelector(
  selectScenariosState,
  (scenariosState) => scenariosState.scenariosLoaded
);
