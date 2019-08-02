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
      sounds: {},
      smallScreen: !document.fullscreenElement
    };
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        this.setState({ smallScreen: false });
      } else {
        this.setState({ smallScreen: true });
      }
    });
    this.onSaveSoundRef = this.onSaveSoundRef.bind(this);
  }

  onSaveSoundRef(sound) {
    this.setState({ sounds: { ...this.state.sounds, ...sound}});
  }

  render() {
    return (
      <Router>
        <div className="app-full-screen" onClick={() => document.body.requestFullscreen()}>
          {
            this.state.smallScreen ? <img src="/images/pixel-full-screen.png" /> : ''
          }
        </div>
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
          exact
          render={(props) =>
            <NavPanel title={store.getPlaceById(props.match.params.otherId).title} history={props.history}>
              <Place
                card={store.getPlaceById(props.match.params.otherId)}
                sound={this.state.sounds[props.match.params.otherId]}
                saveSoundRef={this.onSaveSoundRef}
              />
            </NavPanel>
          }
        />
        <Route
          path="/place/:id/:otherId/:nextId"
          render={(props) =>
            <NavPanel title={store.getPlaceById(props.match.params.nextId).title} history={props.history}>
              <Place
                card={store.getPlaceById(props.match.params.nextId)}
                sound={this.state.sounds[props.match.params.nextId]}
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
