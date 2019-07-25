import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";


import './app.sss';

import { Place } from './place';
import { Dashboard } from './dashboard';
import { Pnj } from './pnj';
import { data } from './data';

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      sounds: {}
    };
    this.onSaveSoundRef = this.onSaveSoundRef.bind(this);
  }

  onSaveSoundRef(sound) {
    this.setState({ sounds: { ...this.state.sounds, ...sound}});
  }

  render() {
    return (
      <Router>
        <Route
          path="/"
          exact
          render={() => <Dashboard cards={this.state.data} />}
        />
        <Route
          path="/pnj/:id"
          exact
          render={(props) =>
            <Pnj card={this.state.data[props.match.params.id].card} />
          }
        />
        <Route
          path="/place/:id"
          exact
          render={(props) =>
            <Place
              card={this.state.data[props.match.params.id].card}
              sound={this.state.sounds[props.match.params.id]}
              saveSoundRef={this.onSaveSoundRef}
              />
          }
        />
        <Route
          path="/place/:id/:otherId"
          render={(props) =>
            <Place
              card={this.state.data[props.match.params.id].card.insidePlace[props.match.params.otherId].card}
              sound={this.state.sounds[props.match.params.otherId]}
              saveSoundRef={this.onSaveSoundRef}
            />
          }
        />
      </Router>
    );
  }
}

ReactDOM.render(
  <AppWrapper></AppWrapper>,
  document.getElementById('app')
);
