import React from 'react';
import PropTypes from 'prop-types';

import Timeline from './timeline';
import './timelines-container.sss';

export default class TimelinesContainer extends React.Component {
  static propTypes = {
    timelines: PropTypes.array
  };

  render() {
    return (
      <div className="timelines-container">
        {
          this.props.timelines.map((timeline, index) =>
            <Timeline key={index} timeline={timeline}></Timeline>)
        }
      </div>
    );
  }
}
