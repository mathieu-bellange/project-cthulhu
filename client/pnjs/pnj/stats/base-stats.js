import React from 'react';
import PropTypes from 'prop-types';

import BaseStat from './base-stat';
import './base-stats.sss';

export class BaseStats extends React.Component {
  static propTypes = {
    stats: PropTypes.object,
    age: PropTypes.number
  };

  render() {
    return (
      <div className="base-stats">
        { this.props.stats.str ? <BaseStat stat={{ str: this.props.stats.str }}></BaseStat> : ''}
        { this.props.stats.dex ? <BaseStat stat={{ dex: this.props.stats.dex }}></BaseStat> : ''}
        { this.props.stats.con ? <BaseStat stat={{ con: this.props.stats.con }}></BaseStat> : ''}
        { this.props.stats.int ? <BaseStat stat={{ int: this.props.stats.int }}></BaseStat> : ''}
        { this.props.stats.edu ? <BaseStat stat={{ edu: this.props.stats.edu }}></BaseStat> : ''}
        { this.props.stats.pou ? <BaseStat stat={{ pou: this.props.stats.pou }}></BaseStat> : ''}
        { this.props.stats.app ? <BaseStat stat={{ app: this.props.stats.app }}></BaseStat> : ''}
        { this.props.stats.tai ? <BaseStat stat={{ tai: this.props.stats.tai }}></BaseStat> : ''}
        {// <MvtStat stats={ this.props.stats } age={ this.props.age }></MvtStat>
        }
      </div>
    );
  }
}
