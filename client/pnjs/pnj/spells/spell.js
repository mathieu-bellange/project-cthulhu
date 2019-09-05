import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import './spell.sss';

const Spell = ({ spell, isEnlarged, enlargeSpell, shrunkSpell }) => {
  return (
    <div className={`spell ${isEnlarged ? 'lg' : ''}`} onClick={() => isEnlarged ? shrunkSpell() : enlargeSpell()}>
      <div className="spell-overview">
        <div className="name">
          <img src='/images/spellbook.png'></img>
          { spell.name}
        </div>
        <div className={`spell-overview-details ${isEnlarged ? '' : 'hide'}`}>
          <div className="cost">
            <img src='/images/exchange.png'></img>
            { spell.cost}
          </div>
          <div className="time">
            <img src='/images/stopwatch.png'></img>
            { spell.time}
          </div>
          <div className="duration">
            <img src='/images/time-left.png'></img>
            { spell.duration}
          </div>
        </div>
      </div>
      <div className={`spell-effect ${isEnlarged ? '' : 'hide'}`}>
        { spell.effect }
      </div>
      <div className={`spell-info ${isEnlarged ? '' : 'hide'}`}>
        <div className="spell-restriction">
          <img src='/images/do-not-touch.png'></img>
          { spell.restriction }
        </div>
        <div className="visible-effects">
          <FontAwesomeIcon icon={faEye} />
          { spell.visibleEffect }
        </div>
      </div>
    </div>
  );
};

Spell.propTypes = {
  spell: PropTypes.object.isRequired,
  isEnlarged: PropTypes.bool,
  enlargeSpell: PropTypes.func.isRequired,
  shrunkSpell: PropTypes.func.isRequired
};

export default Spell;
