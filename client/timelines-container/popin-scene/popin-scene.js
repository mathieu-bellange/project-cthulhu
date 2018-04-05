import React from 'react';
import PropTypes from 'prop-types';

import ListCard from './list-card';
import './popin-scene.sss';

export default class PopinScene extends React.Component {
  static propTypes = {
    scene: PropTypes.object,
    closeScene: PropTypes.func
  };

  render() {
    return (
      <div className={`popin-scene ${this.props.scene.id ? 'show' : ''}`}>
        <i onClick={() => this.props.closeScene()} className="fa fa-times"></i>
        <div className="content">
          <div><u>Description de la scène :</u> { this.props.scene.description }</div>
          {
            this.props.scene.interests ? <ListCard name="Intérêts" list={ this.props.scene.interests }></ListCard> :
              ''
          }
        </div>
        <div className="aside"></div>
      </div>
    );
  }
}
