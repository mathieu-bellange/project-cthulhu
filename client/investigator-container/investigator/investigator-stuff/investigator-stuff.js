import React from 'react';
import PropTypes from 'prop-types';

import './investigator-stuff.sss';

export default class InvestigatorStuff extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  };

  render() {
    return (
      <div className={ `investigator-stuff ${this.props.show ? 'show' : ''}`}>
        Stuff
      </div>
    );
  }
}
