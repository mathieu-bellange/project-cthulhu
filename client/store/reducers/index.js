import { combineReducers } from 'redux';
import { placesReducer } from './places.reducer';
import { soundsReducer } from './sounds.reducer';

export default combineReducers({ placesReducer, soundsReducer });
