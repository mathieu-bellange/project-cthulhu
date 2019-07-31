import {
    FETCH_PLACES,
    FETCH_PLACES_FAILURE,
    FETCH_PLACES_SUCCESS
} from '../actions';

const initialState = {
    places: {},
    isLoading: false,
    error: null
};

export function placesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PLACES:
            return {
                ...state,
                error: null
            };
        case FETCH_PLACES_SUCCESS:
            return {
                ...state,
                places: {...action.payload},
                error: null
            };
        case FETCH_PLACES_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}
