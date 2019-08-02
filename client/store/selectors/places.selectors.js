import { createSelector } from 'reselect'
import { filter } from 'lodash';

const selectPlaceId = (state, placeId) => placeId;
export const getPlacesState = state => state.placesReducer;

export const getPlaces = createSelector(
  getPlacesState,
  placesState => placesState.places
);

export const getDashboardCards = createSelector(
  getPlaces,
  places => filter(places, place => place.dashboard)
);

export const getPlaceById = createSelector(
  getPlaces,
  selectPlaceId,
  (places, id) => places[id] ? places[id].place : {}
);

export const isPlacesLoaded = createSelector(
  getPlacesState,
  (placesState) => placesState.placesLoaded
);
