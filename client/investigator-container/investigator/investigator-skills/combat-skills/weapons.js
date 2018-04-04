import React from 'react';
import PropTypes from 'prop-types';

import Weapon from './weapon';
import './weapons.sss';

export default class Weapons extends React.Component {
  static propTypes = {
    weapons: PropTypes.array
  };

  render() {
    return (
      <div className="weapons">
        <div className="weapon-title">
          <div className="weapon-item">Arme</div>
          <div className="weapon-item">Ord.</div>
          <div className="weapon-item">Maj.</div>
          <div className="weapon-item">Ext.</div>
          <div className="weapon-item">Dmg</div>
          <div className="weapon-item">Dist</div>
          <div className="weapon-item">Cad.</div>
          <div className="weapon-item">Cap.</div>
          <div className="weapon-item">Panne</div>
        </div>
        <div className="weapons-list">
          {
            this.props.weapons.map((weapon, index) =>
              <Weapon key={ index } weapon={ weapon }></Weapon>)
          }
        </div>
      </div>
    );
  }
}
