import React from 'react';
import PropTypes from 'prop-types';

import './stuffs.sss';

import Stuff from './stuff';

const Stuffs =({ stuffs, isStuffEnlarged, enlargeStuff, shrunkStuff}) => {
  return (
    <div className="stuffs">
      {
        stuffs.map((stuff, index) =>
          <Stuff key={index} stuff={stuff} isEnlarged={isStuffEnlarged(index)}
            shrunkStuff={() => shrunkStuff(index)} enlargeStuff={() => enlargeStuff(index)}/>
        )
      }
    </div>
  );
};

Stuffs.propTypes = {
  stuffs: PropTypes.array,
  isStuffEnlarged: PropTypes.func.isRequired,
  enlargeStuff: PropTypes.func.isRequired,
  shrunkStuff: PropTypes.func.isRequired
};

export default Stuffs;
