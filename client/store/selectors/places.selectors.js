import { createSelector } from 'reselect'
import { filter } from 'lodash';

import { selectScenarioById } from './scenarios.selectors';

const selectPlaceId = (state, scenarioId, placeId) => placeId;

const selectPlaces = createSelector(
  selectScenarioById,
  (scenario) => scenario.places
);

export const selectDashboardCards = createSelector(
  selectPlaces,
  places => filter(places, place => place.dashboard)
);

export const selectPlaceById = createSelector(
  selectPlaces,
  selectPlaceId,
  (places, id) => {
    console.log(places, id);
    return places[id] ? places[id] : {}}
);

export const selectPlaceTitle = createSelector(
  selectPlaceById,
  place => place ? place.title : ''
);
