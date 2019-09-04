import {
    FETCH_PLACES_SUCCESS, ENLARGE_CLUE, SHRUNK_CLUE,
    FETCH_PNJS_SUCCESS, ENLARGE_PNJ, SHRUNK_PNJ,
    ENLARGE_WEAPON, SHRUNK_WEAPON, ENLARGE_STUFF, SHRUNK_STUFF,
    ENLARGE_SPELL, SHRUNK_SPELL
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
        case ENLARGE_WEAPON: {
            const newState = { ...state };
            newState[action.payload.id].weapons[action.payload.index].enlarge = true;
            return newState;
          }
        case SHRUNK_WEAPON: {
            const newState = { ...state };
            newState[action.payload.id].weapons[action.payload.index].enlarge = false;
            return newState;
          }
        case ENLARGE_STUFF: {
            const newState = { ...state };
            newState[action.payload.id].stuffs[action.payload.index].enlarge = true;
            return newState;
          }
        case SHRUNK_STUFF: {
            const newState = { ...state };
            newState[action.payload.id].stuffs[action.payload.index].enlarge = false;
            return newState;
          }
        case ENLARGE_SPELL: {
            const newState = { ...state };
            newState[action.payload.id].spells[action.payload.index].enlarge = true;
            return newState;
          }
        case SHRUNK_SPELL: {
            const newState = { ...state };
            newState[action.payload.id].spells[action.payload.index].enlarge = false;
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
        case FETCH_PNJS_SUCCESS: {
            const newState = { ...state };
            Object.keys(action.payload).forEach(key => {
              newState[key] = { clues: [], skills: [], weapons: [], stuffs: [], spells: [] };
              if (action.payload[key].pnj.clues)
                action.payload[key].pnj.clues.forEach(() => newState[key].clues.push({ enlarge: false }));
              if (action.payload[key].pnj.skills)
                action.payload[key].pnj.skills.forEach(() => newState[key].skills.push({ enlarge: false }));
              if (action.payload[key].pnj.weapons)
                action.payload[key].pnj.weapons.forEach(() => newState[key].weapons.push({ enlarge: false }));
              if (action.payload[key].pnj.stuffs)
                action.payload[key].pnj.stuffs.forEach(() => newState[key].stuffs.push({ enlarge: false }));
              if (action.payload[key].pnj.spells)
                action.payload[key].pnj.spells.forEach(() => newState[key].spells.push({ enlarge: false }));
            });
            console.log(newState);
            return newState;
          }
        default:
            return state;
    }
}
