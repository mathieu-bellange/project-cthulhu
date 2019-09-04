export const ENLARGE_CLUE = 'ENLARGE_CLUE';
export const SHRUNK_CLUE = 'SHRUNK_CLUE';
export const ENLARGE_PNJ = 'ENLARGE_PNJ';
export const SHRUNK_PNJ = 'SHRUNK_PNJ';
export const ENLARGE_WEAPON = 'ENLARGE_WEAPON';
export const SHRUNK_WEAPON = 'SHRUNK_WEAPON';
export const ENLARGE_STUFF = 'ENLARGE_STUFF';
export const SHRUNK_STUFF = 'SHRUNK_STUFF';

export const enlargeClue = (id, index) => ({
    type: ENLARGE_CLUE,
    payload: { id, index }
});

export const shrunkClue = (id, index) => ({
    type: SHRUNK_CLUE,
    payload: { id, index }
});

export const enlargePnj = (id, index) => ({
    type: ENLARGE_PNJ,
    payload: { id, index }
});

export const shrunkPnj = (id, index) => ({
    type: SHRUNK_PNJ,
    payload: { id, index }
});

export const enlargeWeapon = (id, index) => ({
    type: ENLARGE_WEAPON,
    payload: { id, index }
});

export const shrunkWeapon = (id, index) => ({
    type: SHRUNK_WEAPON,
    payload: { id, index }
});

export const enlargeStuff = (id, index) => ({
    type: ENLARGE_STUFF,
    payload: { id, index }
});

export const shrunkStuff = (id, index) => ({
    type: SHRUNK_STUFF,
    payload: { id, index }
});
