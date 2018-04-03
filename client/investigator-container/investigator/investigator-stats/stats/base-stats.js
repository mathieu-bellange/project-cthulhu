import React from 'react';

import BaseStat from './base-stat';
import MvtStat from './mvt-stat';
import './base-stats.sss';

export default class BaseStats extends React.Component {
  render() {
    return (
      <div className="base-stats">
        <BaseStat stat={{ str: 75 }}></BaseStat>
        <BaseStat stat={{ dex: 70 }}></BaseStat>
        <BaseStat stat={{ con: 65 }}></BaseStat>
        <BaseStat stat={{ int: 75 }}></BaseStat>
        <BaseStat stat={{ edu: 60 }}></BaseStat>
        <BaseStat stat={{ pou: 55 }}></BaseStat>
        <BaseStat stat={{ app: 45 }}></BaseStat>
        <BaseStat stat={{ tai: 85 }}></BaseStat>
        <MvtStat stats={{ str: 75, dex: 70, tai: 85, age: 45 }}></MvtStat>
      </div>
    );
  }
}
