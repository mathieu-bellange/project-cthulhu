import { find } from 'lodash';

import {
    FETCH_SCENARIOS,
    FETCH_SCENARIOS_FAILURE,
    FETCH_SCENARIOS_SUCCESS,
    SHARED_DOC_SUCCESS
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
        case SHARED_DOC_SUCCESS: {
            const newState = { ...state };
            find(
              newState.scenarios[action.payload.scenarioId].helpDocs,
              { overview: action.payload.sharedDoc.overview}
            ).shared = action.payload.sharedDoc.shared;
            return newState;
          }
        default:
            return state;
    }
}
