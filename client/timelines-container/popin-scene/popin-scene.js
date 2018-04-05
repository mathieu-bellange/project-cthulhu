import React from 'react';
import PropTypes from 'prop-types';

import './popin-scene.sss';

export default class PopinScene extends React.Component {
  static propTypes = {
    scene: PropTypes.object,
    closeScene: PropTypes.func
  };

  render() {
    return (
      <div className={`popin-scene ${this.props.scene ? 'show' : ''}`}>
        <i onClick={() => this.props.closeScene()} className="fa fa-times"></i>
        <div className=""></div>
        <div className="pnjs"></div>
      </div>
    );
  }
}
