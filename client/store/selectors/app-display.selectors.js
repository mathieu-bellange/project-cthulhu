const selectAppDisplayState = state => state.appDisplayReducer;

const selectAppDisplayId = (state, id) => selectAppDisplayState(state)[id];

const selectAppDisplayClues = (state, id) =>
  selectAppDisplayId(state, id) ? selectAppDisplayId(state, id).clues : [];

const selectAppDisplayClue = (state, id, index) =>
  selectAppDisplayClues(state, id).length > index ? selectAppDisplayClues(state, id)[index] : {};

export const isClueEnlarged = (state, id, index) => selectAppDisplayClue(state, id, index).enlarge;
