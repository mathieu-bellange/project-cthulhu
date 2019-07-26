import React from 'react';
import PropTypes from 'prop-types';

import Weapon from './weapon';
import './weapons.sss';

export class Weapons extends React.Component {
  static propTypes = {
    weapons: PropTypes.array
  };

  render() {
    return (
      <div className="weapons">
          {
            this.props.weapons.map((weapon, index) =>
              <Weapon key={ index } weapon={ weapon }></Weapon>)
          }
      </div>
    );
  }
}
