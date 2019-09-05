import { createSelector } from 'reselect'

const selectPnjId = (state, pnjId) => pnjId;
const selectPnjsState = state => state.pnjsReducer;

const selectPnjs = createSelector(
  selectPnjsState,
  pnjsState => pnjsState.pnjs
);

export const selectPnjById = createSelector(
  selectPnjs,
  selectPnjId,
  (pnjs, id) => pnjs[id] ? pnjs[id].pnj : {}
);

export const isPnjsLoaded = createSelector(
  selectPnjsState,
  (pnjsState) => pnjsState.pnjsLoaded
);

export const selectPnjTitle = createSelector(
  selectPnjById,
  pnj => pnj ? pnj.title : ''
);
