export const FETCH_SCENARIOS = 'FETCH_SCENARIOS';
export const FETCH_SCENARIOS_SUCCESS = 'FETCH_SCENARIOS_SUCCESS';
export const FETCH_SCENARIOS_FAILURE = 'FETCH_SCENARIOS_FAILURE';
export const SAVE_SCENARIO_UPDATING = 'SAVE_SCENARIO_UPDATING';
export const SAVE_PLACE = 'SAVE_PLACE';

export const fetchScenarios = () => ({
    type: FETCH_SCENARIOS
});

export const fetchScenariosSuccess = (scenarios) => ({
    type: FETCH_SCENARIOS_SUCCESS,
    payload: scenarios
});

export const fetchScenariosFailure = (message) => ({
    type: FETCH_SCENARIOS_FAILURE,
    payload: message
});

export const saveScenarioUpdating = (scenario) => ({
  type: SAVE_SCENARIO_UPDATING,
  payload: scenario
});

export const savePlace = (place) => ({
  type: SAVE_PLACE,
  payload: place
});
