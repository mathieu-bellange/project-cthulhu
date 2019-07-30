import {
    FETCH_PLACES,
    FETCH_PLACES_FAILURE,
    FETCH_PLACES_SUCCESS
} from '../actions';

const initialState = {
    whiskies: [],
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
                places: {...action.payload},
                error: null
            };
        case FETCH_PLACES_FAILURE:
            return {
                whiskies: {},
                error: action.payload
            };
        default:
            return state;
    }
}
