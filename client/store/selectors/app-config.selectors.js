import { createSelector } from 'reselect'

const selectAppConfigState = state => state.appConfigReducer;

export const isFullScreen = createSelector(
  selectAppConfigState,
  appConfigState => appConfigState.fullScreen
);
