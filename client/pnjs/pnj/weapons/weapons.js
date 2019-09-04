import React from 'react';
import PropTypes from 'prop-types';

import Weapon from './weapon';
import './weapons.sss';

const Weapons = ({ weapons, isWeaponEnlarged, enlargeWeapon, shrunkWeapon }) => {
  return (
    <div className="weapons">
        {
          weapons.map((weapon, index) =>
            <Weapon key={ index } weapon={ weapon } isEnlarged={isWeaponEnlarged(index)}
              shrunkWeapon={() => shrunkWeapon(index)} enlargeWeapon={() => enlargeWeapon(index)}></Weapon>)
        }
    </div>
  );
}

Weapons.propTypes = {
  weapons: PropTypes.array.isRequired,
  isWeaponEnlarged: PropTypes.func.isRequired,
  enlargeWeapon: PropTypes.func.isRequired,
  shrunkWeapon: PropTypes.func.isRequired
};

export default Weapons;
