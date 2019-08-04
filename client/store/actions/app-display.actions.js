export const ENLARGE_CLUE = 'ENLARGE_CLUE';
export const SHRUNK_CLUE = 'SHRUNK_CLUE';

export const enlargeClue = (id, index) => ({
    type: ENLARGE_CLUE,
    payload: { id, index }
});

export const shrunkClue = (id, index) => ({
    type: SHRUNK_CLUE,
    payload: { id, index }
});
