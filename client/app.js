import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './app.sss';

import NavPanel from './nav-panel';
import Place from './place';
import Dashboard from './dashboard';
import { Pnj } from './pnjs';
import * as data from './data';

export class AppWrapper extends React.Component {
  static propTypes = {
    fetchPlaces: PropTypes.func.isRequired,
    fetchPnjs: PropTypes.func.isRequired,
    isFullScreen: PropTypes.bool.isRequired,
    placesLoaded: PropTypes.bool.isRequired,
    pnjsLoaded: PropTypes.bool.isRequired,
    defineFullScreen: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchPlaces();
    this.props.fetchPnjs();
    this.props.defineFullScreen(document.fullscreenElement)
    document.addEventListener('fullscreenchange',
      () => this.props.defineFullScreen(document.fullscreenElement));
  }

  render() {
    const {
      isFullScreen,
      placesLoaded,
      pnjsLoaded
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
        { pnjsLoaded ?<Route
          path="/pnj/:id"
          exact
          render={(props) =>
            <NavPanel title={data.getPnjById(props.match.params.id).title} history={props.history}>
              <Pnj id={props.match.params.id} />
            </NavPanel>
          }
        /> : ''
      }
      { placesLoaded ? <Route
          path="/place/:id"
          exact
          render={(props) =>
            <NavPanel title={data.getPlaceById(props.match.params.id).title} history={props.history}>
              <Place
                id={props.match.params.id}
                />
            </NavPanel>
          }
        /> : ''}
        <Route
          path="/place/:id/:otherId"
          exact
          render={(props) =>
            <NavPanel title={data.getPlaceById(props.match.params.otherId).title} history={props.history}>
              <Place
                id={props.match.params.otherId}
              />
            </NavPanel>
          }
        />
      </Router>
    );
  }
}
