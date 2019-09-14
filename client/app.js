import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './app.sss';

import Menu from './menu';
import NavPanel from './nav-panel';
import Place from './place';
import Dashboard from './dashboard';
import SharedDoc from './shared-doc';
import Scenarios from './scenarios';
import { Pnj } from './pnjs';

const AppWrapper = ({ isFullScreen, scenariosLoaded, isHelpDocDisplayed,
  selectPnjTitle, selectPlaceTitle, scenarios, displayHelpDoc, hideHelpDoc }) => {
    return (
      <Router>
        <Menu displayHelpDoc={displayHelpDoc}/>
        { isHelpDocDisplayed ? <SharedDoc hide={hideHelpDoc}/> : ''}
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
            <Dashboard scenarioId={match.params.scenarioId}>
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
  isHelpDocDisplayed: PropTypes.bool.isRequired,
  selectPnjTitle: PropTypes.func.isRequired,
  selectPlaceTitle: PropTypes.func.isRequired,
  displayHelpDoc: PropTypes.func.isRequired,
  hideHelpDoc: PropTypes.func.isRequired
};

export default AppWrapper;
