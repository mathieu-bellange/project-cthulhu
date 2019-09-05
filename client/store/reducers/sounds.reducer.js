import {
    ADD_SOUND,
    PLAY_SOUND,
    PAUSE_SOUND
} from '../actions';

const initialState = {};

export function soundsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SOUND:
            return {
                ...state,
                [action.payload.id]: { howlRef: action.payload.howlRef, playing: false }
            };
        case PLAY_SOUND: {
            const newState = { ...state };
            newState[action.payload].playing = true;
            return newState;
        }
        case PAUSE_SOUND: {
            const newState = { ...state };
            newState[action.payload].playing = false;
            return newState;
        }
        default:
            return state;
    }
}
