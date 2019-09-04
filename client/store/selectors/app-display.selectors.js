const selectAppDisplayState = state => state.appDisplayReducer;

const selectAppDisplayId = (state, id) => selectAppDisplayState(state)[id];

const selectAppDisplayClues = (state, id) =>
  selectAppDisplayId(state, id) ? selectAppDisplayId(state, id).clues : [];

const selectAppDisplayWeapons = (state, id) =>
  selectAppDisplayId(state, id) ? selectAppDisplayId(state, id).weapons : [];

const selectAppDisplayPnjs = (state, id) =>
  selectAppDisplayId(state, id) ? selectAppDisplayId(state, id).pnjs : [];

const selectAppDisplayClue = (state, id, index) =>
  selectAppDisplayClues(state, id).length > index ? selectAppDisplayClues(state, id)[index] : {};

const selectAppDisplayWeapon = (state, id, index) =>
  selectAppDisplayWeapons(state, id).length > index ? selectAppDisplayWeapons(state, id)[index] : {};

const selectAppDisplayPnj = (state, id, index) =>
  selectAppDisplayPnjs(state, id).length > index ? selectAppDisplayPnjs(state, id)[index] : {};

export const isClueEnlarged = (state, id, index) => selectAppDisplayClue(state, id, index).enlarge;
export const isPnjEnlarged = (state, id, index) => selectAppDisplayPnj(state, id, index).enlarge;
export const isWeaponEnlarged = (state, id, index) => selectAppDisplayWeapon(state, id, index).enlarge;
