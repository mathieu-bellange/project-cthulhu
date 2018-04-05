import React from 'react';
import PropTypes from 'prop-types';

import './weapon.sss';

export default class Weapon extends React.Component {
  static propTypes = {
    weapon: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.half = this.half.bind(this);
    this.fifth = this.fifth.bind(this);
  }

  half() {
    return Math.trunc(this.props.weapon.mastery / 2);
  }

  fifth() {
    return Math.trunc(this.props.weapon.mastery / 5);
  }

  render() {
    return (
      <div className="weapon">
        <div className="weapon-item">{ this.props.weapon.name }</div>
        <div className="weapon-item">{ this.props.weapon.mastery }</div>
        <div className="weapon-item">{ this.half() }</div>
        <div className="weapon-item">{ this.fifth() }</div>
        <div className="weapon-item">{ this.props.weapon.dmg }</div>
        <div className="weapon-item">{ this.props.weapon.range }</div>
        <div className="weapon-item">{ this.props.weapon.rate }</div>
        <div className="weapon-item">{ this.props.weapon.capacity }</div>
        <div className="weapon-item">{ this.props.weapon.breakdown }</div>
      </div>
    );
  }
}
