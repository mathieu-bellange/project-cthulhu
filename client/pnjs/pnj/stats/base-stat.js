import React from 'react';
import PropTypes from 'prop-types';

import './base-stat.sss';

function BaseStatIcon(state) {
  return (
      {
        str: <img src='/images/strength.png'></img>,
        dex: <img src='/images/agility.png'></img>,
        con: <img src='/images/heart.png'></img>,
        edu: <img src='/images/mortarboard.png'></img>,
        int: <img src='/images/innovation.png'></img>,
        tai: <img src='/images/height.png'></img>,
        pou: <img src='/images/will.png'></img>,
        app: <img src='/images/charisma.png'></img>
      }[state]
  );
}

BaseStatIcon.propTypes = {
   state: PropTypes.oneOf(['str', 'dex', 'con', 'edu', 'int', 'tai', 'pou', 'app'])
}

export default class BaseStat extends React.Component {
  static propTypes = {
    stat: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      hideOther: true
    };
    this.half = this.half.bind(this);
    this.fifth = this.fifth.bind(this);
    this.showOther = this.showOther.bind(this);
  }

  showOther() {
    this.setState({ hideOther: !this.state.hideOther})
  }

  half() {
    return Math.trunc(Object.values(this.props.stat)[0] / 2);
  }

  fifth() {
    return Math.trunc(Object.values(this.props.stat)[0] / 5);
  }

  render() {
    return (
      <div className="base-stat" onClick={this.showOther}>
        { BaseStatIcon(Object.keys(this.props.stat)[0]) }
        <div className="roll-info">
          <div className="ordinary">{ Object.values(this.props.stat)[0] }</div>
          <div className={`other ${this.state.hideOther ? 'hide': ''}`}>
            <div className="major">{ this.half() }</div>
            -
            <div className="extreme">{ this.fifth() }</div>
          </div>
        </div>
      </div>
    );
  }
}
