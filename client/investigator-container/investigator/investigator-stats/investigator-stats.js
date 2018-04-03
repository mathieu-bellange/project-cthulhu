import React from 'react';
import PropTypes from 'prop-types';

import Stats from './stats';
import CalculatedStats from './calculated-stats';
import './investigator-stats.sss';

export default class InvestigatorStats extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  };

  render() {
    return (
      <div className={ `investigator-stats ${this.props.show ? 'show' : ''}`}>
        <Stats></Stats>
        <CalculatedStats></CalculatedStats>
      </div>
    );
  }
}
