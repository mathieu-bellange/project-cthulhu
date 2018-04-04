import React from 'react';
import PropTypes from 'prop-types';

import './weapon.sss';

export default class Weapon extends React.Component {
  static propTypes = {
    weapon: PropTypes.object
  };

  half(val) {
    return Math.trunc(val / 2);
  }

  fifth(val) {
    return Math.trunc(val / 5);
  }

  render() {
    return (
      <div className="weapon">
        <div className="weapon-item">Auto cal32</div>
        <div className="weapon-item">70</div>
        <div className="weapon-item">35</div>
        <div className="weapon-item">14</div>
        <div className="weapon-item">1D8</div>
        <div className="weapon-item">15m</div>
        <div className="weapon-item">1 (3)</div>
        <div className="weapon-item">8</div>
        <div className="weapon-item">99</div>
      </div>
    );
  }
}
