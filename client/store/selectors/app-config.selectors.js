import { createSelector } from 'reselect'

export const getAppConfigState = state => state.appConfigReducer;

export const getFullScreen = createSelector(
  getAppConfigState,
  appConfigState => appConfigState.fullScreen
);
