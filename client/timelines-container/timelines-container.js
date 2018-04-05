import React from 'react';
import PropTypes from 'prop-types';

import Timeline from './timeline';
import PopinScene from './popin-scene';
import './timelines-container.sss';

export default class TimelinesContainer extends React.Component {
  static propTypes = {
    timelines: PropTypes.array,
    scene: PropTypes.object,
    displayScene: PropTypes.func,
    closeScene: PropTypes.func
  };

  render() {
    return (
      <div className="timelines-container">
        {
          this.props.timelines.map((timeline, index) =>
            <Timeline
              key={index}
              timeline={timeline}
              displayScene={ this.props.displayScene }
            ></Timeline>)
        }
        <PopinScene closeScene={ this.props.closeScene } scene={ this.props.scene }></PopinScene>
      </div>
    );
  }
}
