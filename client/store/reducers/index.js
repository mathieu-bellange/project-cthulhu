import { combineReducers } from 'redux';
import { scenariosReducer } from './scenarios.reducer';
import { soundsReducer } from './sounds.reducer';
import { appConfigReducer } from './app-config.reducer';
import { appDisplayReducer } from './app-display.reducer';
import { updatingScenarioReducer } from './updating-scenario.reducer';

export default combineReducers({ scenariosReducer, soundsReducer, appConfigReducer, appDisplayReducer, updatingScenarioReducer });
