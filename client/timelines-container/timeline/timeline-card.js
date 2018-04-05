import React from 'react';
import PropTypes from 'prop-types';

import './timeline-card.sss';

export default class TimelineCard extends React.Component {
  static propTypes = {
    card: PropTypes.object,
    displayScene: PropTypes.func
  };

  render() {
    return (
      <div onClick={() => this.props.displayScene(this.props.card) } className={`timeline-card ${this.props.card.id ? 'show' : ''}`}>
        <div><u>Description de la scène :</u> { this.props.card.description }</div>
      </div>
    );
  }
}
