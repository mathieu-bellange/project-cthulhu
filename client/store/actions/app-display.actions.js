export const ENLARGE_CLUE = 'ENLARGE_CLUE';
export const SHRUNK_CLUE = 'SHRUNK_CLUE';
export const ENLARGE_PNJ = 'ENLARGE_PNJ';
export const SHRUNK_PNJ = 'SHRUNK_PNJ';

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
