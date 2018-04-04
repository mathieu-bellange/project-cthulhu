import React from 'react';
import PropTypes from 'prop-types';

import './civil-state.sss';

export default class CivilState extends React.Component {
  static propTypes = {
    civilState: PropTypes.object
  };

  render() {
    return (
      <div className="civil-state">
        <div>{ this.props.civilState.name }</div>
        <div>{ this.props.civilState.player }</div>
        <div>{ this.props.civilState.occupation }</div>
      </div>
    );
  }
}
