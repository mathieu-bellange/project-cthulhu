import React from 'react';
import PropTypes from 'prop-types';

import './clues.sss';
import { Clue } from './clue';

const Clues = ({ clues }) => {
  return (
    <div className="clues">
      { clues.map((clue, index) => <Clue key={index} clue={ clue } />) }
    </div>
  );
}

Clues.propTypes = {
  clues: PropTypes.array.isRequired
};

export default Clues;
