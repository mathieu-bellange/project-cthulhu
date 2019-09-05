import React from 'react';
import PropTypes from 'prop-types';

import './pnjs.sss';

import Pnj from './pnj';

const Pnjs = ({ pnjIds, enlargePnj, shrunkPnj, isPnjEnlarged }) => {
  return (
    <div className="pnjs">
      {
        pnjIds.map((pnjId, index) =>
          <Pnj key={index} id={pnjId} minimize={true} isEnlarged={isPnjEnlarged(index)}
            shrunkPnj={() => shrunkPnj(index)} enlargePnj={() => enlargePnj(index)}/>
        )
      }
    </div>
  );
}

Pnjs.propTypes = {
  pnjIds: PropTypes.array,
  isPnjEnlarged: PropTypes.func.isRequired,
  enlargePnj: PropTypes.func.isRequired,
  shrunkPnj: PropTypes.func.isRequired
};

export default Pnjs;
