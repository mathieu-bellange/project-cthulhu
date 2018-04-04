import React from 'react';
import PropTypes from 'prop-types';

import Skills from './skills';
import CombatSkills from './combat-skills';
import './investigator-skills.sss';

export default class InvestigatorSkills extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  };

  render() {
    return (
      <div className={ `investigator-skills ${this.props.show ? 'show' : ''}`}>
        <Skills skills={ [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}] }></Skills>
        <CombatSkills
          weapons={ [{}, {}] }
          dodge={ 75 }
          impact={ 1 }
          shoulders= { -1 }
        ></CombatSkills>
      </div>
    );
  }
}
