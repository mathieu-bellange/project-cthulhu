import React from 'react';
import PropTypes from 'prop-types';

import Weapon from './weapon';
import './weapons.sss';

const Weapons = ({ weapons }) => {
  return (
    <div className="weapons">
        {
          weapons.map((weapon, index) =>
            <Weapon key={ index } weapon={ weapon }></Weapon>)
        }
    </div>
  );
}

Weapons.propTypes = {
  weapons: PropTypes.array.isRequired
};

export default Weapons;
