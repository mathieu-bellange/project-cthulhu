import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './app.sss';

import NavPanel from './nav-panel';
import { Place } from './place';
import Dashboard from './dashboard';
import { Pnj } from './pnjs';
import * as data from './data';

export class AppWrapper extends React.Component {
  static propTypes = {
    fetchPlaces: PropTypes.func.isRequired,
    sounds: PropTypes.object.isRequired,
    addSound: PropTypes.func.isRequired,
    isFullScreen: PropTypes.bool.isRequired,
    defineFullScreen: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchPlaces();
    this.props.defineFullScreen(document.fullscreenElement)
    document.addEventListener('fullscreenchange',
      () => this.props.defineFullScreen(document.fullscreenElement));
  }

  render() {
    const {
      sounds,
      addSound,
      isFullScreen
    } = this.props;
    return (
      <Router>
        <div className="app-full-screen" onClick={() => document.body.requestFullscreen()}>
          {
            isFullScreen ? '' : <img src="/images/pixel-full-screen.png" />
          }
        </div>
        <Route
          path="/"
          exact
          component={Dashboard}
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
                sound={sounds.getSoundById(props.match.params.id)}
                saveSoundRef={addSound}
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
                sound={sounds.getSoundById(props.match.params.otherId)}
                saveSoundRef={addSound}
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
                sound={sounds.getSoundById(props.match.params.nextId)}
                saveSoundRef={addSound}
              />
            </NavPanel>
          }
        />
      </Router>
    );
  }
}
