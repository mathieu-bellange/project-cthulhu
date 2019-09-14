export const SHARED_DOC = 'SHARED_DOC';
export const SHARED_DOC_SUCCESS = 'SHARED_DOC_SUCCESS';
export const SHARED_DOC_FAILURE = 'SHARED_DOC_FAILURE';

export const sharedHelpDoc = (helpDoc) => ({
    type: SHARED_DOC,
    payload: helpDoc
});

export const sharedHelpDocSuccess = (scenario) => ({
    type: SHARED_DOC_SUCCESS,
    payload: scenario
});

export const sharedHelpDocFailure = (message) => ({
    type: SHARED_DOC_FAILURE,
    payload: message
});
