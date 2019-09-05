import {
    FETCH_SCENARIOS,
    FETCH_SCENARIOS_FAILURE,
    FETCH_SCENARIOS_SUCCESS
} from '../actions';

const initialState = {
    scenarios: {},
    scenariosLoaded: false,
    error: null
};

export function scenariosReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SCENARIOS:
            return {
                ...state,
                scenariosLoaded: false,
                error: null
            };
        case FETCH_SCENARIOS_SUCCESS:
            return {
                ...state,
                scenarios: {...action.payload},
                scenariosLoaded: true,
                error: null
            };
        case FETCH_SCENARIOS_FAILURE:
            return {
                ...state,
                scenariosLoaded: false,
                error: action.payload
            };
        default:
            return state;
    }
}
