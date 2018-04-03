import React from 'react';
import PropTypes from 'prop-types';

import InvestigatorNav from './investigator-nav';
import InvestigatorStats from './investigator-stats';
import InvestigatorSkills from './investigator-skills';
import InvestigatorStuff from './investigator-stuff';
import './investigator.sss';

export default class Investigator extends React.Component {
  static propTypes = {
    displayStats: PropTypes.bool,
    displaySkills: PropTypes.bool,
    displayStuff: PropTypes.bool
  };

  render() {
    return (
      <div className="investigator">
        <InvestigatorNav
          activeStats={ this.props.displayStats }
          activeSkills={ this.props.displaySkills }
          activeStuff={ this.props.displayStuff }
        ></InvestigatorNav>
        <div className="content">
          <InvestigatorStats show={ this.props.displayStats }></InvestigatorStats>
          <InvestigatorSkills show={ this.props.displaySkills }></InvestigatorSkills>
          <InvestigatorStuff show={ this.props.displayStuff }></InvestigatorStuff>
        </div>
      </div>
    );
  }
}
