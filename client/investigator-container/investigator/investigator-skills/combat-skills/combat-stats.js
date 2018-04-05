import React from 'react';
import PropTypes from 'prop-types';

import './combat-stats.sss';

export default class CombatStats extends React.Component {
  static propTypes = {
    dodge: PropTypes.number,
    strength: PropTypes.number,
    height: PropTypes.number
  };
  constructor(props) {
    super(props);
    this.half = this.half.bind(this);
    this.fifth = this.fifth.bind(this);
    this.impact = this.impact.bind(this);
    this.shoulders = this.shoulders.bind(this);
  }

  half() {
    return Math.trunc(this.props.dodge / 2);
  }

  fifth() {
    return Math.trunc(this.props.dodge / 5);
  }

  impact() {
    let impact;
    const sum = this.props.strength + this.props.height;
    if (sum >= 2 && sum < 65) {
      impact = '-2';
    } else if (sum >= 65 && sum < 85) {
      impact = '-1';
    } else if (sum >= 85 && sum < 125) {
      impact = '0';
    } else if (sum >= 125 && sum < 165) {
      impact = '+1D4';
    } else if (sum >= 165 && sum < 205) {
      impact = '+1D6';
    }
    return impact;
  }

  shoulders() {
    let shoulders;
    const sum = this.props.strength + this.props.height;
    if (sum >= 2 && sum < 65) {
      shoulders = '-2';
    } else if (sum >= 65 && sum < 85) {
      shoulders = '-1';
    } else if (sum >= 85 && sum < 125) {
      shoulders = '0';
    } else if (sum >= 125 && sum < 165) {
      shoulders = '+1';
    } else if (sum >= 165 && sum < 205) {
      shoulders = '+2';
    }
    return shoulders;
  }

  render() {
    return (
      <div className="combat-stats">
        <div className="combat-stat">
          <span>Impact</span>
          <span>{ this.impact() }</span>
        </div>
        <div className="combat-stat">
          <span>Carrure</span>
          <span>{ this.shoulders() }</span>
        </div>
        <div className="combat-stat">
          <span>Esquive</span>
          <div className="roll-info">
            <div className="ordinary">{ this.props.dodge }</div>
            <div className="other">
              <div className="major">{ this.half() }</div>
              <div className="extreme">{ this.fifth() }</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
