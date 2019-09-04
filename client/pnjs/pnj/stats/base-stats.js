import React from 'react';
import PropTypes from 'prop-types';

import BaseStat from './base-stat';
import './base-stats.sss';

const BaseStats = ({ stats, isStatEnlarged, enlargeStat, shrunkStat }) => {
  return (
    <div className="base-stats">
      { stats.str ? <BaseStat stat={{ str: stats.str }} isEnlarged={isStatEnlarged('str')}
        shrunkStat={() => shrunkStat('str')} enlargeStat={() => enlargeStat('str')}></BaseStat> : ''}
      { stats.dex ? <BaseStat stat={{ dex: stats.dex }} isEnlarged={isStatEnlarged('dex')}
        shrunkStat={() => shrunkStat('dex')} enlargeStat={() => enlargeStat('dex')}></BaseStat> : ''}
      { stats.con ? <BaseStat stat={{ con: stats.con }} isEnlarged={isStatEnlarged('con')}
        shrunkStat={() => shrunkStat('con')} enlargeStat={() => enlargeStat('con')}></BaseStat> : ''}
      { stats.int ? <BaseStat stat={{ int: stats.int }} isEnlarged={isStatEnlarged('int')}
        shrunkStat={() => shrunkStat('int')} enlargeStat={() => enlargeStat('int')}></BaseStat> : ''}
      { stats.edu ? <BaseStat stat={{ edu: stats.edu }} isEnlarged={isStatEnlarged('edu')}
        shrunkStat={() => shrunkStat('edu')} enlargeStat={() => enlargeStat('edu')}></BaseStat> : ''}
      { stats.pou ? <BaseStat stat={{ pou: stats.pou }} isEnlarged={isStatEnlarged('pou')}
        shrunkStat={() => shrunkStat('pou')} enlargeStat={() => enlargeStat('pou')}></BaseStat> : ''}
      { stats.app ? <BaseStat stat={{ app: stats.app }} isEnlarged={isStatEnlarged('app')}
        shrunkStat={() => shrunkStat('app')} enlargeStat={() => enlargeStat('app')}></BaseStat> : ''}
      { stats.tai ? <BaseStat stat={{ tai: stats.tai }} isEnlarged={isStatEnlarged('tai')}
        shrunkStat={() => shrunkStat('tai')} enlargeStat={() => enlargeStat('tai')}></BaseStat> : ''}
      {// <MvtStat stats={ this.props.stats } age={ this.props.age }></MvtStat>
      }
    </div>
  );
};

BaseStats.propTypes = {
  stats: PropTypes.object,
  age: PropTypes.number,
  isStatEnlarged: PropTypes.func.isRequired,
  enlargeStat: PropTypes.func.isRequired,
  shrunkStat: PropTypes.func.isRequired
};

export default BaseStats;
