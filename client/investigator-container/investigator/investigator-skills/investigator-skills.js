import React from 'react';
import PropTypes from 'prop-types';

import './investigator-skills.sss';

export default class InvestigatorSkills extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  };

  render() {
    return (
      <div className={ `investigator-skills ${this.props.show ? 'show' : ''}`}>
        Skills
      </div>
    );
  }
}
