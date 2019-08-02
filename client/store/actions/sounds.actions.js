export const ADD_SOUND = 'ADD_SOUND';
export const PLAY_SOUND = 'PLAY_SOUND';
export const PAUSE_SOUND = 'PAUSE_SOUND';

export const addSound = (sound) => ({
    type: ADD_SOUND,
    payload: sound
});

export const playSound = (id) => ({
    type: PLAY_SOUND,
    payload: id
});

export const pauseSound = (id) => ({
    type: PAUSE_SOUND,
    payload: id
});
