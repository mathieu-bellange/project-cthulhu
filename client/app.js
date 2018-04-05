import React from 'react';
import ReactDOM from 'react-dom';

import { InvestigatorContainer } from './investigator-container';
import TimelinesContainer from './timelines-container';
import TimeScale from './time-scale';
import { investigators, timelines } from './data';
import './app.sss';

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investigators,
      timelines,
      scene: {}
    };
    this.updateNavData = this.updateNavData.bind(this);
    this.displayScene = this.displayScene.bind(this);
    this.closeScene = this.closeScene.bind(this);
  }

  updateNavData(updateData) {
    const newNavData = Object.assign(this.state.investigators[updateData.key].navData, updateData.value);
    Object.keys(this.state.investigators[updateData.key].navData).forEach((key) => {
      if (key !== Object.keys(updateData.value)[0]) newNavData[key] = false;
    });
    this.setState(newNavData);
  }

  displayScene(scene) {
    this.setState({ scene });
  }

  closeScene() {
    this.setState({ scene: {} });
  }

  render() {
    return (
      <div id="wrapper">
        <InvestigatorContainer
          investigators={ this.state.investigators }
          updateNavData={this.updateNavData}
        ></InvestigatorContainer>
        <TimelinesContainer
          timelines={ this.state.timelines }
          scene={ this.state.scene }
          displayScene={ this.displayScene }
          closeScene={ this.closeScene }
        ></TimelinesContainer>
        <TimeScale></TimeScale>
      </div>
    );
  }
}

ReactDOM.render(
  <AppWrapper></AppWrapper>,
  document.getElementById('app')
);
