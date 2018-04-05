import React from 'react';
import PropTypes from 'prop-types';

import Stuff from './stuff';
import Wealth from './wealth';
import './investigator-stuff.sss';

export default class InvestigatorStuff extends React.Component {
  static propTypes = {
    show: PropTypes.bool,
    stuff: PropTypes.array,
    wealth: PropTypes.object
  };

  render() {
    return (
      <div className={ `investigator-stuff ${this.props.show ? 'show' : ''}`}>
        <Stuff stuff={ this.props.stuff }></Stuff>
        <Wealth wealth={ this.props.wealth }></Wealth>
      </div>
    );
  }
}
