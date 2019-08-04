import React from 'react';
import PropTypes from 'prop-types';

import './place-details.sss';
import { Clues } from '../clues';
import { Pnjs } from '../pnjs';

const PlaceDetails = ({ id, pnjs, clues }) => {
  return (
    <div className="place-details">
      { pnjs ? <Pnjs pnjs={pnjs} /> : '' }
      { clues ? <Clues id={id} clues={clues} /> : ''}
    </div>
  );
}

PlaceDetails.propTypes = {
  id: PropTypes.string.isRequired,
  pnjs: PropTypes.array,
  clues: PropTypes.array
};

export default PlaceDetails;
