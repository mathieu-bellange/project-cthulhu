import React from 'react';
import PropTypes from 'prop-types';

import './place-details.sss';
import { Clues } from '../clues';
import { Pnjs } from '../pnjs';

const PlaceDetails = ({ scenarioId, pnjs, clues, isClueEnlarged, enlargeClue, shrunkClue, isPnjEnlarged, enlargePnj, shrunkPnj }) => {
  return (
    <div className="place-details">
      { pnjs ? <Pnjs
        scenarioId={scenarioId}
        pnjIds={pnjs}
        isPnjEnlarged={isPnjEnlarged}
        enlargePnj={enlargePnj}
        shrunkPnj={shrunkPnj}
      /> : '' }
      { clues ? <Clues
        clues={clues}
        isClueEnlarged={isClueEnlarged}
        enlargeClue={enlargeClue}
        shrunkClue={shrunkClue}
      /> : ''}
    </div>
  );
}

PlaceDetails.propTypes = {
  scenarioId: PropTypes.string.isRequired,
  pnjs: PropTypes.array,
  clues: PropTypes.array,
  isClueEnlarged: PropTypes.func.isRequired,
  enlargeClue: PropTypes.func.isRequired,
  shrunkClue: PropTypes.func.isRequired,
  isPnjEnlarged: PropTypes.func.isRequired,
  enlargePnj: PropTypes.func.isRequired,
  shrunkPnj: PropTypes.func.isRequired
};

export default PlaceDetails;
