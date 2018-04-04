import React from 'react';
import PropTypes from 'prop-types';

import './combat-stats.sss';

export default class CombatStats extends React.Component {
  static propTypes = {
    dodge: PropTypes.number,
    impact: PropTypes.number,
    shoulders: PropTypes.number
  };
  constructor(props) {
    super(props);
    this.half = this.half.bind(this);
    this.fifth = this.fifth.bind(this);
  }

  half() {
    return Math.trunc(this.props.dodge / 2);
  }

  fifth() {
    return Math.trunc(this.props.dodge / 5);
  }

  render() {
    return (
      <div className="combat-stats">
        <div className="combat-stat">
          <span>Impact</span>
          <span>{ this.props.impact }</span>
        </div>
        <div className="combat-stat">
          <span>Carrure</span>
          <span>{ this.props.shoulders }</span>
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
