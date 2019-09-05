export const FETCH_PLACES = 'FETCH_PLACES';
export const FETCH_PLACES_SUCCESS = 'FETCH_PLACES_SUCCESS';
export const FETCH_PLACES_FAILURE = 'FETCH_PLACES_FAILURE';

export const fetchPlaces = () => ({
    type: FETCH_PLACES
});

export const fetchPlacesSuccess = (places) => ({
    type: FETCH_PLACES_SUCCESS,
    payload: places
});

export const fetchPlacesFailure = (message) => ({
    type: FETCH_PLACES_FAILURE,
    payload: message
});
