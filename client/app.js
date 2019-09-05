import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './app.sss';

import NavPanel from './nav-panel';
import Place from './place';
import Dashboard from './dashboard';
import { Pnj } from './pnjs';

const AppWrapper = ({ isFullScreen, placesLoaded, pnjsLoaded,
  selectPnjTitle, selectPlaceTitle }) => {
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
        { pnjsLoaded ? <Route
          path="/pnj/:id"
          exact
          render={({ match, history }) =>
            <NavPanel title={selectPnjTitle(match.params.id)} history={history}>
              <Pnj id={match.params.id} />
            </NavPanel>
          }
        /> : '' }
        { placesLoaded ? <Route
          path="/place/:id"
          exact
          render={({ match, history }) =>
            <NavPanel title={selectPlaceTitle(match.params.id)} history={history}>
              <Place id={match.params.id} />
            </NavPanel>
          }
        /> : ''}
        { placesLoaded ? <Route
          path="/place/:id/:subPlaceId"
          exact
          render={({ match, history }) =>
            <NavPanel title={selectPlaceTitle(match.params.subPlaceId)} history={history}>
              <Place id={match.params.subPlaceId} />
            </NavPanel>
          }
        /> : ''}
      </Router>
    );
};

AppWrapper.propTypes = {
  isFullScreen: PropTypes.bool.isRequired,
  placesLoaded: PropTypes.bool.isRequired,
  pnjsLoaded: PropTypes.bool.isRequired,
  selectPnjTitle: PropTypes.func.isRequired,
  selectPlaceTitle: PropTypes.func.isRequired
};

export default AppWrapper;
