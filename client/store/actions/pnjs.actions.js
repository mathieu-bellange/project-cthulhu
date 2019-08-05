export const FETCH_PNJS = 'FETCH_PNJS';
export const FETCH_PNJS_SUCCESS = 'FETCH_PNJS_SUCCESS';
export const FETCH_PNJS_FAILURE = 'FETCH_PNJS_FAILURE';

export const fetchPnjs = () => ({
    type: FETCH_PNJS
});

export const fetchPnjsSuccess = (pnjs) => ({
    type: FETCH_PNJS_SUCCESS,
    payload: pnjs
});

export const fetchPnjsFailure = (message) => ({
    type: FETCH_PNJS_FAILURE,
    payload: message
});
