import {
    FETCH_PLACES,
    FETCH_PLACES_FAILURE,
    FETCH_PLACES_SUCCESS
} from '../actions';

const initialState = {
    places: {},
    placesLoaded: false,
    error: null
};

export function placesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PLACES:
            return {
                ...state,
                placesLoaded: false,
                error: null
            };
        case FETCH_PLACES_SUCCESS:
            return {
                ...state,
                places: {...action.payload},
                placesLoaded: true,
                error: null
            };
        case FETCH_PLACES_FAILURE:
            return {
                ...state,
                placesLoaded: false,
                error: action.payload
            };
        default:
            return state;
    }
}
