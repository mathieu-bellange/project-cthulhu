import React from 'react';
import PropTypes from 'prop-types';

import './clues.sss';
import Clue from './clue';

const Clues = ({ clues, isEnlarged, enlargeClue, shrunkClue }) => {
  return (
    <div className="clues">
      {
        clues.map((clue, index) =>
          <Clue key={index} clue={ clue } isEnlarged={isEnlarged(index)}
            shrunkClue={() => shrunkClue(index)} enlargeClue={() => enlargeClue(index)}/>)
      }
    </div>
  );
}

Clues.propTypes = {
  clues: PropTypes.array.isRequired,
  isEnlarged: PropTypes.func.isRequired,
  enlargeClue: PropTypes.func.isRequired,
  shrunkClue: PropTypes.func.isRequired
};

export default Clues;
