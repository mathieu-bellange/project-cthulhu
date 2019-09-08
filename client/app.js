import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './app.sss';

import Menu from './menu';
import NavPanel from './nav-panel';
import Place from './place';
import Dashboard from './dashboard';
import Scenarios from './scenarios';
import { Pnj } from './pnjs';

const AppWrapper = ({ isFullScreen, scenariosLoaded,
  selectPnjTitle, selectPlaceTitle, scenarios }) => {
    return (
      <Router>
        <Menu />
        <div className="app-full-screen" onClick={() => document.body.requestFullscreen()}>
        {
          isFullScreen ? '' : <img src="/images/pixel-full-screen.png" />
        }
        </div>
        <Route
          path="/"
          exact
          render={() =>
            <Scenarios scenarios={scenarios}/>
          }
        />
        <Route
          path="/:scenarioId"
          exact
          render={({ match }) =>
            <Dashboard id={match.params.scenarioId}>
            </Dashboard>
          }
        />
        { scenariosLoaded ? <Route
          path="/:scenarioId/pnj/:id"
          exact
          render={({ match, history }) =>
            <NavPanel title={selectPnjTitle(match.params.scenarioId, match.params.id)} history={history}>
              <Pnj id={match.params.id} scenarioId={match.params.scenarioId}/>
            </NavPanel>
          }
        /> : '' }
        { scenariosLoaded ? <Route
          path="/:scenarioId/place/:id"
          exact
          render={({ match, history }) =>
            <NavPanel title={selectPlaceTitle(match.params.scenarioId, match.params.id)} history={history}>
              <Place id={match.params.id} scenarioId={match.params.scenarioId} />
            </NavPanel>
          }
        /> : ''}
        { scenariosLoaded ? <Route
          path="/:scenarioId/place/:id/:subPlaceId"
          exact
          render={({ match, history }) =>
            <NavPanel title={selectPlaceTitle(match.params.scenarioId, match.params.subPlaceId)} history={history}>
              <Place id={match.params.subPlaceId} />
            </NavPanel>
          }
        /> : ''}
      </Router>
    );
};

AppWrapper.propTypes = {
  scenarios: PropTypes.object.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
  scenariosLoaded: PropTypes.bool.isRequired,
  selectPnjTitle: PropTypes.func.isRequired,
  selectPlaceTitle: PropTypes.func.isRequired
};

export default AppWrapper;
