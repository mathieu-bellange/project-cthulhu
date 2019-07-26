import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";


import './app.sss';

import { NavPanel } from './nav-panel';
import { Place } from './place';
import { Dashboard } from './dashboard';
import { Pnj } from './pnjs';
import * as store from './data';

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          render={() => <Dashboard cards={store.getData()} />}
        />
        <Route
          path="/pnj/:id"
          exact
          render={(props) =>
            <NavPanel title={store.getPnjById(props.match.params.id).title} history={props.history}>
              <Pnj isFullPage={true} pnj={store.getPnjById(props.match.params.id)} />
            </NavPanel>
          }
        />
        <Route
          path="/place/:id"
          exact
          render={(props) =>
            <NavPanel title={store.getPlaceById(props.match.params.id).title} history={props.history}>
              <Place
                card={store.getPlaceById(props.match.params.id)}
                sound={this.state.sounds[props.match.params.id]}
                saveSoundRef={this.onSaveSoundRef}
                />
            </NavPanel>
          }
        />
        <Route
          path="/place/:id/:otherId"
          render={(props) =>
            <NavPanel title={store.getNestedPlaceById(props.match.params.id, props.match.params.otherId).title} history={props.history}>
              <Place
                card={store.getNestedPlaceById(props.match.params.id, props.match.params.otherId)}
                sound={this.state.sounds[props.match.params.otherId]}
                saveSoundRef={this.onSaveSoundRef}
              />
            </NavPanel>
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
