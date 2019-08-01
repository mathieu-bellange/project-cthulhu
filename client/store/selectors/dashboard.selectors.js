import { createSelector } from 'reselect'
import { filter } from 'lodash';

const getPlaces = (state) => state.places

export const getDashboardCards = createSelector(
  [ getPlaces ],
  places => filter(places, place => place.dashboard)
);
