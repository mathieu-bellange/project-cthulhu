import {
    DEFINE_FULL_SCREEN
} from '../actions';

const initialState = {
  fullScreen: false
};

export function appConfigReducer(state = initialState, action) {
    switch (action.type) {
        case DEFINE_FULL_SCREEN:
            return {
                ...state,
                fullScreen: !!action.payload
            };
        default:
            return state;
    }
}
