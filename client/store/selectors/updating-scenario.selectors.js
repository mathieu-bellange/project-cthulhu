const selectUpdatingScenarioState = state => state.updatingScenarioReducer;

export const selectUpdatingScenario = (state) =>  selectUpdatingScenarioState(state).scenario;

export const selectUpdatingPlaces = (state) => selectUpdatingScenarioState(state).places;
