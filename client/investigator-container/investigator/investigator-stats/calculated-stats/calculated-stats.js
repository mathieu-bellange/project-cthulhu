import React from 'react';
import PropTypes from 'prop-types';

import CalculatedStat from './calculated-stat';
import './calculated-stats.sss';

export default class InvestigatorStats extends React.Component {
  static propTypes = {
    health: PropTypes.object,
    mentalHealth: PropTypes.object,
    magicPower: PropTypes.object,
    luck: PropTypes.object
  };

  render() {
    return (
      <div className="calculate-stats">
        <div className="calculate-stat">
          <CalculatedStat current={ this.props.health.current } max={ this.props.health.max } src="/images/medical-health.png"></CalculatedStat>
        </div>
        <div className="calculate-stat">
          <CalculatedStat current={ this.props.mentalHealth.current } max={ this.props.mentalHealth.max } src="/images/sante-mental.png"></CalculatedStat>
        </div>
        <div className="calculate-stat">
          <CalculatedStat current={ this.props.magicPower.current } max={ this.props.magicPower.max } src="/images/magic-swirl.svg"></CalculatedStat>
        </div>
        <div className="calculate-stat">
          <CalculatedStat current={ this.props.luck.current } src="/images/clover-symbol.svg"></CalculatedStat>
        </div>
      </div>
    );
  }
}
