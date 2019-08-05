import { combineReducers } from 'redux';
import { placesReducer } from './places.reducer';
import { pnjsReducer } from './pnjs.reducer';
import { soundsReducer } from './sounds.reducer';
import { appConfigReducer } from './app-config.reducer';
import { appDisplayReducer } from './app-display.reducer';

export default combineReducers({ placesReducer, soundsReducer, appConfigReducer, appDisplayReducer, pnjsReducer });
