import {
    FETCH_PLACES_SUCCESS, ENLARGE_CLUE, SHRUNK_CLUE,
    ENLARGE_PNJ, SHRUNK_PNJ
} from '../actions';

const initialState = {};

export function appDisplayReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PLACES_SUCCESS: {
            const newState = { ...state };
            Object.keys(action.payload).forEach(key => {
              newState[key] = { clues: [], pnjs: []};
              if (action.payload[key].place.pnjs)
                action.payload[key].place.pnjs.forEach(() => newState[key].pnjs.push({ enlarge: false }));
              if (action.payload[key].place.clues)
                action.payload[key].place.clues.forEach(() => newState[key].clues.push({ enlarge: false }));
            });
            return newState;
          }
        case ENLARGE_CLUE: {
            const newState = { ...state };
            newState[action.payload.id].clues[action.payload.index].enlarge = true;
            return newState;
          }
        case SHRUNK_CLUE: {
            const newState = { ...state };
            newState[action.payload.id].clues[action.payload.index].enlarge = false;
            return newState;
          }
        case ENLARGE_PNJ: {
            const newState = { ...state };
            newState[action.payload.id].pnjs[action.payload.index].enlarge = true;
            return newState;
          }
        case SHRUNK_PNJ: {
            const newState = { ...state };
            newState[action.payload.id].pnjs[action.payload.index].enlarge = false;
            return newState;
          }
        default:
            return state;
    }
}
