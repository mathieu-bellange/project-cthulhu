import React from 'react';
import PropTypes from 'prop-types';

import Timeline from './timeline';
import PopinScene from './popin-scene';
import SelectDay from './select-day';
import './timelines-container.sss';

export default class TimelinesContainer extends React.Component {
  static propTypes = {
    timelines: PropTypes.object,
    scene: PropTypes.object,
    displayScene: PropTypes.func,
    closeScene: PropTypes.func,
    isThereNextDay: PropTypes.func,
    isTherePreviousDay: PropTypes.func,
    onClickNextDay: PropTypes.func,
    onClickPreviousDay: PropTypes.func
  };

  render() {
    return (
      <div className="timelines-container">
        <div className="title">{ this.props.timelines.title }</div>
        {
          this.props.timelines.scenes.map((timeline, index) =>
            <Timeline
              key={index}
              timeline={timeline}
              displayScene={ this.props.displayScene }
            ></Timeline>)
        }
        <div className="buttons">
            <SelectDay
              onClick={ this.props.onClickPreviousDay }
              show={ this.props.isTherePreviousDay() }
              classNames={ ['previous-day'] }
              icon="fa-caret-left"
              name="Précédent jour"
            ></SelectDay>
            <SelectDay
              onClick={ this.props.onClickNextDay }
              show={ this.props.isThereNextDay() }
              classNames={ ['next-day'] }
              icon="fa-caret-right"
              name="Prochain jour"
            ></SelectDay>
        </div>
        <PopinScene closeScene={ this.props.closeScene } scene={ this.props.scene }></PopinScene>
      </div>
    );
  }
}
