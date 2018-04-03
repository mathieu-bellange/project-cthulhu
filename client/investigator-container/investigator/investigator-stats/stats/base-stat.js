import React from 'react';
import PropTypes from 'prop-types';

import './base-stat.sss';

export default class BaseStat extends React.Component {
  static propTypes = {
    stat: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.half = this.half.bind(this);
    this.fifth = this.fifth.bind(this);
  }

  half() {
    return Math.trunc(Object.values(this.props.stat)[0] / 2);
  }

  fifth() {
    return Math.trunc(Object.values(this.props.stat)[0] / 5);
  }

  render() {
    return (
      <div className="base-stat">
        <span>{ Object.keys(this.props.stat)[0].toUpperCase() }</span>
        <div className="roll-info">
          <div className="ordinary">{ Object.values(this.props.stat)[0] }</div>
          <div className="other">
            <div className="major">{ this.half() }</div>
            <div className="extreme">{ this.fifth() }</div>
          </div>
        </div>
      </div>
    );
  }
}
