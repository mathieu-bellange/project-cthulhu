import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


import './app.sss';

import { store } from './store';
import { NavPanel } from './nav-panel';
import { Place } from './place';
import { Dashboard } from './dashboard';
import { Pnj } from './pnjs';
import * as data from './data';

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
          render={() => <Dashboard cards={data.getData()} />}
        />
        <Route
          path="/pnj/:id"
          exact
          render={(props) =>
            <NavPanel title={data.getPnjById(props.match.params.id).title} history={props.history}>
              <Pnj isFullPage={true} pnj={data.getPnjById(props.match.params.id)} />
            </NavPanel>
          }
        />
        <Route
          path="/place/:id"
          exact
          render={(props) =>
            <NavPanel title={data.getPlaceById(props.match.params.id).title} history={props.history}>
              <Place
                card={data.getPlaceById(props.match.params.id)}
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
            <NavPanel title={data.getPlaceById(props.match.params.otherId).title} history={props.history}>
              <Place
                card={data.getPlaceById(props.match.params.otherId)}
                sound={this.state.sounds[props.match.params.otherId]}
                saveSoundRef={this.onSaveSoundRef}
              />
            </NavPanel>
          }
        />
        <Route
          path="/place/:id/:otherId/:nextId"
          render={(props) =>
            <NavPanel title={data.getPlaceById(props.match.params.nextId).title} history={props.history}>
              <Place
                card={data.getPlaceById(props.match.params.nextId)}
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
  <Provider store={store}>
    <AppWrapper></AppWrapper>
  </Provider>,
  document.getElementById('app')
);
