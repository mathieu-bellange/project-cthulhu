import {
    FETCH_SCENARIOS_SUCCESS, ENLARGE_CLUE, SHRUNK_CLUE,
    ENLARGE_PNJ, SHRUNK_PNJ,
    ENLARGE_WEAPON, SHRUNK_WEAPON, ENLARGE_STUFF, SHRUNK_STUFF,
    ENLARGE_SPELL, SHRUNK_SPELL, ENLARGE_SKILL, SHRUNK_SKILL,
    ENLARGE_STAT, SHRUNK_STAT, DISPLAY_MENU, HIDE_MENU
} from '../actions';

const initialState = {};

export function appDisplayReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SCENARIOS_SUCCESS: {
            const newState = { ...state };
            Object.keys(action.payload).forEach(key => {
              const scenario = action.payload[key];
              Object.keys(scenario.places).forEach(key => {
                newState[key] = { clues: [], pnjs: []};
                if (scenario.places[key].pnjs)
                  scenario.places[key].pnjs.forEach(() => newState[key].pnjs.push({ enlarge: false }));
                if (scenario.places[key].clues)
                  scenario.places[key].clues.forEach(() => newState[key].clues.push({ enlarge: false }));
              });
              Object.keys(scenario.pnjs).forEach(key => {
                newState[key] = { clues: [], skills: [], weapons: [], stuffs: [], spells: [], stats: {} };
                if (scenario.pnjs[key].clues)
                  scenario.pnjs[key].clues.forEach(() => newState[key].clues.push({ enlarge: false }));
                if (scenario.pnjs[key].skills)
                  scenario.pnjs[key].skills.forEach(() => newState[key].skills.push({ enlarge: false }));
                if (scenario.pnjs[key].weapons)
                  scenario.pnjs[key].weapons.forEach(() => newState[key].weapons.push({ enlarge: false }));
                if (scenario.pnjs[key].stuffs)
                  scenario.pnjs[key].stuffs.forEach(() => newState[key].stuffs.push({ enlarge: false }));
                if (scenario.pnjs[key].spells)
                  scenario.pnjs[key].spells.forEach(() => newState[key].spells.push({ enlarge: false }));
                if (scenario.pnjs[key].stats)
                  for (const variable in scenario.pnjs[key].stats) {
                    newState[key].stats[variable] = { enlarge: false };
                  }
              });
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
            return newState;
          }
        case SHRUNK_STAT: {
            const newState = { ...state };
            newState[action.payload.id].stats[action.payload.key].enlarge = false;
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
        case HIDE_MENU: {
            return { ...state, isMenuDisplaying: false };
          }
        case DISPLAY_MENU: {
            return { ...state, isMenuDisplaying: true };
          }
        default:
            return state;
    }
}
