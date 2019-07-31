import { createSelector } from 'reselect'
import { filter } from 'lodash';

const getPlaces = (state) => state.places

export const getDashboardCards = createSelector(
  [ getPlaces ],
  places => {
    console.log(places);
    console.log(filter(places, place => place.dashboard));
    return filter(places, place => place.dashboard);
  }
);
