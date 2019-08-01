export const getSoundsState = state => state.soundsReducer;

export const getSoundById = (state, id) => getSoundsState(state)[id];
