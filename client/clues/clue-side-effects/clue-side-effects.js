import React from 'react';
import PropTypes from 'prop-types';

import './clue-side-effects.sss'

const ClueSideEffects = ({ sideEffects }) => {
  return (
    <div className="clue-side-effects">
      {
        sideEffects.map((sideEffect, index) =>
          <p key={index}>{ sideEffect }</p>)
      }
    </div>
  );
}

ClueSideEffects.propTypes = {
   sideEffects: PropTypes.array.isRequired
}

export default ClueSideEffects;
