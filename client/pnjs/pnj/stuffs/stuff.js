import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import './stuff.sss';

function StuffIcon(state) {
  return (
    <div>
      {{
        object: <img src='/images/backpack.png'></img>,
        weapon: <img src='/images/swords.png'></img>
      }[state]}
    </div>
  );
}

StuffIcon.propTypes = {
   state: PropTypes.oneOf(['object', 'weapon'])
}

const Stuff = ({ stuff, isEnlarged, enlargeStuff, shrunkStuff }) => {
  return (
    <div className={`stuff ${isEnlarged ? 'lg' : ''}`}
      onClick={() => isEnlarged ? shrunkStuff() : enlargeStuff()}>
      <div className="stuff-overview">
        { StuffIcon(stuff.type) }
        { stuff.name}
      </div>
      <div className={`stuff-description ${isEnlarged ? '' : 'hide'}`}>
        { stuff.description }
      </div>
      <div className={`stuff-effect ${isEnlarged ? '' : 'hide'}`}>
        <FontAwesomeIcon icon={faEye} />
        { stuff.effect }
      </div>
    </div>
  );
};

Stuff.propTypes = {
  stuff: PropTypes.object.isRequired,
  isEnlarged: PropTypes.bool,
  enlargeStuff: PropTypes.func.isRequired,
  shrunkStuff: PropTypes.func.isRequired
};

export default Stuff;
