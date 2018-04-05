import React from 'react';

import './time-scale.sss';

export default class TimeScale extends React.Component {
  render() {
    return (
      <div className="time-scale">
        <div className="scale">
          <div className="scale-item"></div>
          <div className="scale-item"></div>
          <div className="scale-item"></div>
          <div className="scale-item"></div>
        </div>
        <div className="info">
          <div className="info-item">
            <span>00h</span>
          </div>
          <div className="info-item">
            <span>6h</span>
          </div>
          <div className="info-item">
            <span>12h</span>
          </div>
          <div className="info-item">
            <span>18h</span>
          </div>
        </div>
      </div>
    );
  }
}
