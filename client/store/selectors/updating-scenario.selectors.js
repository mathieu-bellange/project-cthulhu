const selectUpdatingScenarioState = state => state.updatingScenarioReducer;

export const selectUpdatingScenario = (state) =>  selectUpdatingScenarioState(state).scenario;
