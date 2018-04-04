import React from 'react';
import ReactDOM from 'react-dom';

import InvestigatorContainer from './investigator-container';
import investigators from './data';
import './app.sss';

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investigators
    };
    this.updateNavData = this.updateNavData.bind(this);
  }

  updateNavData(updateData) {
    const newNavData = Object.assign(this.state.investigators[updateData.key].navData, updateData.value);
    Object.keys(this.state.investigators[updateData.key].navData).forEach((key) => {
      if (key !== Object.keys(updateData.value)[0]) newNavData[key] = false;
    });
    this.setState(newNavData);
  }

  render() {
    return (
      <div id="wrapper">
        <InvestigatorContainer
          investigators={ this.state.investigators }
          updateNavData={this.updateNavData}
        ></InvestigatorContainer>
      </div>
    );
  }
}

ReactDOM.render(
  <AppWrapper></AppWrapper>,
  document.getElementById('app')
);
