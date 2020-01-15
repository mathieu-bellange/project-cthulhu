import {
  SAVE_SCENARIO_UPDATING
} from '../actions';

const initialState = {
};

export function updatingScenarioReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_SCENARIO_UPDATING:
            return {
                ...state,
                scenario: action.payload
            };
        default:
            return state;
    }
}
