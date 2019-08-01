import {
    ADD_SOUND
} from '../actions';

const initialState = {};

export function soundsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SOUND:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
