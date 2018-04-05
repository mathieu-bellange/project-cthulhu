import React from 'react';
import PropTypes from 'prop-types';

import TimelineCard from './timeline-card';
import './timeline.sss';

export default class Timeline extends React.Component {
  static propTypes = {
    timeline: PropTypes.object,
    displayScene: PropTypes.func
  };

  render() {
    return (
      <div className="timeline">
        <div className="title">{ this.props.timeline.title }</div>
        {
          this.props.timeline.cards.map((card, index) =>
            <TimelineCard
              displayScene={this.props.displayScene}
              key={index}
              card={card}
            ></TimelineCard>)
        }
      </div>
    );
  }
}
