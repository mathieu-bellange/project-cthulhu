export const FETCH_SCENARIOS = 'FETCH_SCENARIOS';
export const FETCH_SCENARIOS_SUCCESS = 'FETCH_SCENARIOS_SUCCESS';
export const FETCH_SCENARIOS_FAILURE = 'FETCH_SCENARIOS_FAILURE';

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
