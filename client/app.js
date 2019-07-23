import React from 'react';
import ReactDOM from 'react-dom';

import './app.sss';

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="wrapper">

      </div>
    );
  }
}

ReactDOM.render(
  <AppWrapper></AppWrapper>,
  document.getElementById('app')
);
