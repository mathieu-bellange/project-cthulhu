import { combineReducers } from 'redux';
import { placesReducer } from './places.reducer';
import { soundsReducer } from './sounds.reducer';
import { appConfigReducer } from './app-config.reducer';

export default combineReducers({ placesReducer, soundsReducer, appConfigReducer });
