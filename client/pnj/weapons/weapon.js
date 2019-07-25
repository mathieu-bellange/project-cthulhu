import React from 'react';
import PropTypes from 'prop-types';

import './weapon.sss';

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
    this.half = this.half.bind(this);
    this.fifth = this.fifth.bind(this);
    this.showMastery = this.showMastery.bind(this);
    this.showOther = this.showOther.bind(this);
  }

  showMastery() {
    this.setState({ showMastery: !this.state.showMastery})
  }

  showOther() {
    this.setState({ showOther: !this.state.showOther})
  }

  half() {
    if (isNaN(this.props.weapon.mastery)) return '-';
    return Math.trunc(this.props.weapon.mastery / 2);
  }

  fifth() {
    if (isNaN(this.props.weapon.mastery)) return '-';
    return Math.trunc(this.props.weapon.mastery / 5);
  }

  render() {
    return (
      <div className="weapon">
        <div className="name">{ this.props.weapon.name }</div>
        <div className="mastery" onClick={this.showMastery}>
          <div className="weapon-item">{ this.props.weapon.mastery } %</div>
          <div className={`other ${this.state.showMastery ? '' : 'hide'}`}>
            <div className="half">{ this.half() }</div>
            {
              !isNaN(this.props.weapon.mastery) ? '-' : ''
            }
            <div>{ this.fifth() }</div>
          </div>
        </div>
        <div className="dmg" onClick={this.showOther}>
          <div className="weapon-item">{ this.props.weapon.dmg }</div>
          <div className={`other ${this.state.showOther ? '' : 'hide'}`}>
            <div className="weapon-item">{ this.props.weapon.range ?  this.props.weapon.range : 'Allonge'}</div>
            <div className="weapon-item">{ this.props.weapon.rate ? this.props.weapon.rate : '1' }</div>
            <div className="weapon-item">{ this.props.weapon.capacity ? this.props.weapon.capacity : '-' }</div>
            <div className="weapon-item">{ this.props.weapon.breakdown ? this.props.weapon.breakdown : '-'}</div>
          </div>
        </div>
      </div>
    );
  }
}
