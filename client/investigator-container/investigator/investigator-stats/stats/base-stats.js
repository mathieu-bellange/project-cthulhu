import React from 'react';
import PropTypes from 'prop-types';

import BaseStat from './base-stat';
import MvtStat from './mvt-stat';
import './base-stats.sss';

export default class BaseStats extends React.Component {
  static propTypes = {
    stats: PropTypes.object
  };

  render() {
    return (
      <div className="base-stats">
        <BaseStat stat={{ str: this.props.stats.str }}></BaseStat>
        <BaseStat stat={{ dex: this.props.stats.dex }}></BaseStat>
        <BaseStat stat={{ con: this.props.stats.con }}></BaseStat>
        <BaseStat stat={{ int: this.props.stats.int }}></BaseStat>
        <BaseStat stat={{ edu: this.props.stats.edu }}></BaseStat>
        <BaseStat stat={{ pou: this.props.stats.pou }}></BaseStat>
        <BaseStat stat={{ app: this.props.stats.app }}></BaseStat>
        <BaseStat stat={{ tai: this.props.stats.tai }}></BaseStat>
        <MvtStat stats={ this.props.stats }></MvtStat>
      </div>
    );
  }
}
