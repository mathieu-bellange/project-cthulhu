import React from 'react';
import PropTypes from 'prop-types';

import './select-day.sss';

export default class SelectDay extends React.Component {
  static propTypes = {
    classNames: PropTypes.array,
    name: PropTypes.string,
    icon: PropTypes.string,
    show: PropTypes.bool,
    onClick: PropTypes.func
  };

  render() {
    return (
      <div onClick={() => this.props.onClick() } className={`select-day ${this.props.classNames} ${this.props.show ? 'show' : ''}`}>
        <div className={`name ${this.props.classNames}`}>{ this.props.name }</div>
        <i className={`fa ${this.props.icon}`}></i>
      </div>
    );
  }
}
