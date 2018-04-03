import React from 'react';
import ReactDOM from 'react-dom';

import InvestigatorContainer from './investigator-container';
import './app.sss';

class AppWrapper extends React.Component {

  updateNavData() {

  }

  render() {
    const navData = {
      displayStats: true,
      displayStuff: false,
      displaySkills: false
    };
    return (
      <div id="wrapper">
        <InvestigatorContainer
          navData={ navData }
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
