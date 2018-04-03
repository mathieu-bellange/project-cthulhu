import React from 'react';
import PropTypes from 'prop-types';

import './calculated-stat.sss';

export default class InvestigatorStat extends React.Component {
  static propTypes = {
    current: PropTypes.number,
    max: PropTypes.number,
    src: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {}

  render() {
    return (
      <div className="calculate-stat">
        <img className="" src={this.props.src}></img>
        <input defaultValue={ this.props.current } onChange={ this.onChange() }></input>
        {
          this.props.max ? <span>/{ this.props.max }</span> : ''
        }
      </div>
    );
  }
}
