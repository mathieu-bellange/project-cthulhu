import React from 'react';
import PropTypes from 'prop-types';

import Skills from './skills';
import CombatSkills from './combat-skills';
import './investigator-skills.sss';

export default class InvestigatorSkills extends React.Component {
  static propTypes = {
    show: PropTypes.bool,
    investigator: PropTypes.object
  };

  render() {
    return (
      <div className={ `investigator-skills ${this.props.show ? 'show' : ''}`}>
        <Skills skills={ this.props.investigator.skills }></Skills>
        <CombatSkills
          weapons={ this.props.investigator.weapons }
          dodge={ this.props.investigator.skills.find(skill => skill.id === 'dodge') }
          strength={ this.props.investigator.stats.str }
          height={ this.props.investigator.stats.tai }
        ></CombatSkills>
      </div>
    );
  }
}
