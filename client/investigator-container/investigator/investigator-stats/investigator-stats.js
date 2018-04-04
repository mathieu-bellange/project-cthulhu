import React from 'react';
import PropTypes from 'prop-types';

import Stats from './stats';
import CalculatedStats from './calculated-stats';
import './investigator-stats.sss';

export default class InvestigatorStats extends React.Component {
  static propTypes = {
    show: PropTypes.bool,
    investigator: PropTypes.object
  };

  render() {
    return (
      <div className={ `investigator-stats ${this.props.show ? 'show' : ''}`}>
        <Stats
          stats={ this.props.investigator.stats }
          civilState={ this.props.investigator.civilState }
        ></Stats>
        <CalculatedStats
          health={ this.props.investigator.health }
          mentalHealth={ this.props.investigator.mentalHealth }
          magicPower={ this.props.investigator.magicPower }
          luck={ this.props.investigator.luck }
        ></CalculatedStats>
      </div>
    );
  }
}
