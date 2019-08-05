import {
    FETCH_PNJS,
    FETCH_PNJS_FAILURE,
    FETCH_PNJS_SUCCESS
} from '../actions';

const initialState = {
    pnjs: {},
    pnjsLoaded: false,
    error: null
};

export function pnjsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PNJS:
            return {
                ...state,
                pnjsLoaded: false,
                error: null
            };
        case FETCH_PNJS_SUCCESS:
            return {
                ...state,
                pnjs: {...action.payload},
                pnjsLoaded: true,
                error: null
            };
        case FETCH_PNJS_FAILURE:
            return {
                ...state,
                pnjsLoaded: false,
                error: action.payload
            };
        default:
            return state;
    }
}
