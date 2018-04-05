import React from 'react';
import PropTypes from 'prop-types';

import Weapons from './weapons';
import CombatStats from './combat-stats';
import './combat-skills.sss';

export default class CombatSkills extends React.Component {
  static propTypes = {
    weapons: PropTypes.array,
    dodge: PropTypes.object,
    strength: PropTypes.number,
    height: PropTypes.number
  };

  render() {
    return (
      <div className="combat-skills">
        <Weapons weapons={ this.props.weapons }></Weapons>
        <CombatStats
          dodge={ this.props.dodge.mastery }
          strength={ this.props.strength }
          height={ this.props.height }
        ></CombatStats>
      </div>
    );
  }
}
