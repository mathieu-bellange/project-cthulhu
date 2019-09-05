import React from 'react';
import PropTypes from 'prop-types';

import './spells.sss';

import Spell from './spell';

const Spells =({ spells, isSpellEnlarged, enlargeSpell, shrunkSpell }) => {
  return (
    <div className="spells">
      {
        spells.map((spell, index) =>
          <Spell key={index} spell={spell} isEnlarged={isSpellEnlarged(index)}
            shrunkSpell={() => shrunkSpell(index)} enlargeSpell={() => enlargeSpell(index)}/>
        )
      }
    </div>
  );
}

Spells.propTypes = {
  spells: PropTypes.array,
  isSpellEnlarged: PropTypes.func.isRequired,
  enlargeSpell: PropTypes.func.isRequired,
  shrunkSpell: PropTypes.func.isRequired
};

export default Spells;
