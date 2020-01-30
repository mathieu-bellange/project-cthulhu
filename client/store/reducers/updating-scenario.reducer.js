import {
  SAVE_SCENARIO_UPDATING, SAVE_PLACE
} from '../actions';

const initialState = {
  places: [{ "id": "hunt-cabin",
  "title": "La cabane de chasse",
  "overview": "cretaceous-creature/hunt-cabin.jpg"}]
};

export function updatingScenarioReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_SCENARIO_UPDATING:
            return {
                ...state,
                scenario: action.payload
            };
        case SAVE_PLACE:
            return {
                ...state,
                places: [...state.places, action.payload]
            };
        default:
            return state;
    }
}
