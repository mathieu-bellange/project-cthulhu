import { FETCH_PLACES, FETCH_PLACES_SUCCESS, FETCH_PLACES_FAILURE } from './places.actionTypes';

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
