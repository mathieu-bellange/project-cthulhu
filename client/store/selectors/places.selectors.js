import { createSelector } from 'reselect'
import { filter } from 'lodash';

const selectPlaceId = (state, placeId) => placeId;
const selectPlacesState = state => state.placesReducer;

const selectPlaces = createSelector(
  selectPlacesState,
  placesState => placesState.places
);

export const selectDashboardCards = createSelector(
  selectPlaces,
  places => filter(places, place => place.dashboard)
);

export const selectPlaceById = createSelector(
  selectPlaces,
  selectPlaceId,
  (places, id) => places[id] ? places[id] : {}
);

export const isPlacesLoaded = createSelector(
  selectPlacesState,
  (placesState) => placesState.placesLoaded
);

export const selectPlaceTitle = createSelector(
  selectPlaceById,
  place => place ? place.title : ''
);
