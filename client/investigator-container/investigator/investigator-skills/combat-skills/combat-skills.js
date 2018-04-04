import React from 'react';
import PropTypes from 'prop-types';

import Weapons from './weapons';
import CombatStats from './combat-stats';
import './combat-skills.sss';

export default class CombatSkills extends React.Component {
  static propTypes = {
    weapons: PropTypes.array,
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
      <div className="combat-skills">
        <Weapons weapons={ this.props.weapons }></Weapons>
        <CombatStats
          dodge={ this.props.dodge }
          impact={ this.props.impact }
          shoulders={ this.props.shoulders }
        ></CombatStats>
      </div>
    );
  }
}
