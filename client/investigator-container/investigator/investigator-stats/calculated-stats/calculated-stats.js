import React from 'react';

import CalculatedStat from './calculated-stat';
import './calculated-stats.sss';

export default class InvestigatorStats extends React.Component {
  render() {
    return (
      <div className="calculate-stats">
        <div className="calculate-stat">
          <CalculatedStat current={ 19 } max={ 19 } src="/images/medical-health.png"></CalculatedStat>
        </div>
        <div className="calculate-stat">
          <CalculatedStat current={ 19 } max={ 19 } src="/images/sante-mental.png"></CalculatedStat>
        </div>
        <div className="calculate-stat">
          <CalculatedStat current={ 19 } max={ 19 } src="/images/magic-swirl.svg"></CalculatedStat>
        </div>
        <div className="calculate-stat">
          <CalculatedStat current={ 19 } src="/images/clover-symbol.svg"></CalculatedStat>
        </div>
      </div>
    );
  }
}
