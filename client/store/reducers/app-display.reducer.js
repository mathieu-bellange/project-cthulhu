import {
    FETCH_PLACES_SUCCESS, ENLARGE_CLUE, SHRUNK_CLUE,
    FETCH_PNJS_SUCCESS, ENLARGE_PNJ, SHRUNK_PNJ,
    ENLARGE_WEAPON, SHRUNK_WEAPON, ENLARGE_STUFF, SHRUNK_STUFF,
    ENLARGE_SPELL, SHRUNK_SPELL, ENLARGE_SKILL, SHRUNK_SKILL,
    ENLARGE_STAT, SHRUNK_STAT
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
        case ENLARGE_SKILL: {
            const newState = { ...state };
            newState[action.payload.id].skills[action.payload.index].enlarge = true;
            return newState;
          }
        case SHRUNK_SKILL: {
            const newState = { ...state };
            newState[action.payload.id].skills[action.payload.index].enlarge = false;
            return newState;
          }
        case ENLARGE_STAT: {
            const newState = { ...state };
            newState[action.payload.id].stats[action.payload.key].enlarge = true;
            console.log(newState);
            return newState;
          }
        case SHRUNK_STAT: {
            const newState = { ...state };
            newState[action.payload.id].stats[action.payload.key].enlarge = false;
            console.log(newState);
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
              newState[key] = { clues: [], skills: [], weapons: [], stuffs: [], spells: [], stats: {} };
              if (action.payload[key].clues)
                action.payload[key].clues.forEach(() => newState[key].clues.push({ enlarge: false }));
              if (action.payload[key].skills)
                action.payload[key].skills.forEach(() => newState[key].skills.push({ enlarge: false }));
              if (action.payload[key].weapons)
                action.payload[key].weapons.forEach(() => newState[key].weapons.push({ enlarge: false }));
              if (action.payload[key].stuffs)
                action.payload[key].stuffs.forEach(() => newState[key].stuffs.push({ enlarge: false }));
              if (action.payload[key].spells)
                action.payload[key].spells.forEach(() => newState[key].spells.push({ enlarge: false }));
              if (action.payload[key].stats)
                for (const variable in action.payload[key].stats) {
                  newState[key].stats[variable] = { enlarge: false };
                }
            });
            return newState;
          }
        default:
            return state;
    }
}
