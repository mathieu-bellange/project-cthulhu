import {
  SAVE_SCENARIO_UPDATING, SAVE_PLACE
} from '../actions';

const initialState = {
    places: {}
};

export function updatingScenarioReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_SCENARIO_UPDATING:
            return {
                ...state,
                scenario: action.payload,
                places: action.payload ? action.payload.places || {} : {}
            };
        case SAVE_PLACE:
            return {
                ...state,
                places: {...state.places, [action.payload.id]: action.payload}
            };
        default:
            return state;
    }
}
