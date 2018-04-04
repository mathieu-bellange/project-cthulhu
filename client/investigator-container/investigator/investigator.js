import React from 'react';
import PropTypes from 'prop-types';

import InvestigatorNav from './investigator-nav';
import InvestigatorStats from './investigator-stats';
import InvestigatorSkills from './investigator-skills';
import InvestigatorStuff from './investigator-stuff';
import './investigator.sss';

export default class Investigator extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    investigator: PropTypes.object,
    updateNavData: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.updateNavData = this.updateNavData.bind(this);
  }

  updateNavData(navData) {
    this.props.updateNavData({ key: this.props.id, value: navData });
  }

  render() {
    return (
      <div className="investigator">
        <InvestigatorNav
          onClickNavItem={this.updateNavData}
          activeStats={ this.props.investigator.navData.displayStats }
          activeSkills={ this.props.investigator.navData.displaySkills }
          activeStuff={ this.props.investigator.navData.displayStuff }
        ></InvestigatorNav>
        <div className="content">
          <InvestigatorStats
            show={ this.props.investigator.navData.displayStats }
            investigator={ this.props.investigator }
          ></InvestigatorStats>
          <InvestigatorSkills
            show={ this.props.investigator.navData.displaySkills }
            investigator={ this.props.investigator }
          ></InvestigatorSkills>
          <InvestigatorStuff
            show={ this.props.investigator.navData.displayStuff }
          ></InvestigatorStuff>
        </div>
      </div>
    );
  }
}
