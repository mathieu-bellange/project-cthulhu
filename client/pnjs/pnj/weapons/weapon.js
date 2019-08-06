import React from 'react';
import PropTypes from 'prop-types';

import './weapon.sss';

import WeaponMastery from './weapon-mastery'
import WeaponDetails from './weapon-details'

export default class Weapon extends React.Component {
  static propTypes = {
    weapon: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      showMastery: false,
      showOther: false
    };
    this.showMastery = this.showMastery.bind(this);
    this.showOther = this.showOther.bind(this);
  }

  showMastery() {
    this.setState({ showMastery: !this.state.showMastery})
  }

  showOther() {
    this.setState({ showOther: !this.state.showOther})
  }

  render() {
    return (
      <div className="weapon">
        <div className="name">{ this.props.weapon.name }</div>
        <WeaponMastery
          mastery={this.props.weapon.mastery}
          isMasteryEnlarged={this.state.showMastery}
          shrunkMastery={this.showMastery}
          enlargeMastery={this.showMastery}
        />
        <WeaponDetails
          weapon={this.props.weapon}
          isDetailsEnlarged={this.state.showOther}
          shrunkDetails={this.showOther}
          enlargeDetails={this.showOther}
        />
      </div>
    );
  }
}
