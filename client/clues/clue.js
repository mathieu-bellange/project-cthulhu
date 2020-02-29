import React from 'react';
import PropTypes from 'prop-types';

import './clue.sss';

import { ClueCondition } from './clue-condition';
import ClueSideEffects from './clue-side-effects';

const Clue = ({ clue, shrunkClue, enlargeClue, isEnlarged }) => {
  return (
    <div className={`clue-card ${isEnlarged ? 'lg': ''}`} onClick={() => isEnlarged ? shrunkClue() : enlargeClue()}>
      <ClueCondition condition={clue.condition} isEnlarged={isEnlarged} />
      <p>
        { clue.clue }
      </p>
      {
        clue.sideEffects && isEnlarged ?
          <ClueSideEffects sideEffects={clue.sideEffects} /> : ''
      }
    </div>
  );
}

Clue.propTypes = {
  clue: PropTypes.object.isRequired,
  enlargeClue: PropTypes.func.isRequired,
  shrunkClue: PropTypes.func.isRequired,
  isEnlarged: PropTypes.bool
};

export default Clue;
