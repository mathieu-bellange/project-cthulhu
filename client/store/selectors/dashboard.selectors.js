import { createSelector } from 'reselect'
import { filter } from 'lodash';

export const getPlacesState = state => state.placesReducer;

export const getPlaces = createSelector(
  getPlacesState,
  placesState => placesState.places
);

export const getDashboardCards = createSelector(
  getPlaces,
  places => filter(places, place => place.dashboard)
);
