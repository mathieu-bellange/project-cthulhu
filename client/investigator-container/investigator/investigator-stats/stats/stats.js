import React from 'react';

import BaseStats from './base-stats';
import CivilState from './civil-state';
import './stats.sss';

export default class Stats extends React.Component {
  render() {
    return (
      <div className="stats">
        <div className="photo">
          <img src="/images/harvey-bullock.jpg"></img>
        </div>
        <CivilState></CivilState>
        <BaseStats></BaseStats>
      </div>
    );
  }
}
