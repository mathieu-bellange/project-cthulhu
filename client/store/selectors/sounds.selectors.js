import { createSelector } from 'reselect';

const selectSoundsState = state => state.soundsReducer;
const selectSoundId = (state, soundId) => soundId;

const selectSoundById = createSelector(
  selectSoundsState,
  selectSoundId,
  (state, id) => state[id]
);

export const getSoundHowlRef = createSelector(
  selectSoundById,
  sound => sound ? sound.howlRef : null
);

export const isSoundPlaying = (state, id) =>
  selectSoundsState(state)[id] ? selectSoundsState(state)[id].playing : false;
