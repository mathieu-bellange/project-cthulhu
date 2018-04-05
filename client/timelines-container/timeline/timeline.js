import React from 'react';
import PropTypes from 'prop-types';

import './timeline.sss';

export default class Timeline extends React.Component {
  static propTypes = {
    timeline: PropTypes.object
  };

  render() {
    return (
      <div className="timeline">
        Timeline
      </div>
    );
  }
}
