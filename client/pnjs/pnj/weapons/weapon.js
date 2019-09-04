import React from 'react';
import PropTypes from 'prop-types';

import './weapon.sss';

import WeaponMastery from './weapon-mastery'
import WeaponDetails from './weapon-details'

export default class Weapon extends React.Component {
  static propTypes = {
    weapon: PropTypes.object.isRequired,
    isEnlarged: PropTypes.bool,
    enlargeWeapon: PropTypes.func.isRequired,
    shrunkWeapon: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="weapon">
        <div className="name">{ this.props.weapon.name }</div>
        <WeaponMastery
          mastery={this.props.weapon.mastery}
          isMasteryEnlarged={this.props.isEnlarged}
          shrunkMastery={this.props.shrunkWeapon}
          enlargeMastery={this.props.enlargeWeapon}
        />
        <WeaponDetails
          weapon={this.props.weapon}
          isDetailsEnlarged={this.props.isEnlarged}
          shrunkDetails={this.props.shrunkWeapon}
          enlargeDetails={this.props.enlargeWeapon}
        />
      </div>
    );
  }
}
