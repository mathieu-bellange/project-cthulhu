import React from 'react';
import PropTypes from 'prop-types';

import BaseStats from './base-stats';
import CivilState from './civil-state';
import './stats.sss';

export default class Stats extends React.Component {
  static propTypes = {
    stats: PropTypes.object,
    civilState: PropTypes.object
  };

  render() {
    return (
      <div className="stats">
        <div className="photo">
          <img src={ this.props.civilState.img }></img>
        </div>
        <CivilState civilState={ this.props.civilState}></CivilState>
        <BaseStats stats={ this.props.stats }></BaseStats>
      </div>
    );
  }
}
