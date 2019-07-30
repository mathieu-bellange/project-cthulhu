import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPlaces } from './store';


import './app.sss';

import { NavPanel } from './nav-panel';
import { Place } from './place';
import { Dashboard } from './dashboard';
import { Pnj } from './pnjs';
import * as data from './data';

class AppWrapper extends React.Component {
  static propTypes = {
    fetchPlaces: PropTypes.func.isRequired,
    places: PropTypes.object
  };

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

  componentDidMount() {
    this.props.fetchPlaces();
  }

  render() {
    const {
      places
    } = this.props;
    return (
      <Router>
        <Route
          path="/"
          exact
          render={() => <Dashboard places={places} cards={data.getData()} />}
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

const mapStateToProps = state => {
  return {...state.placesReducer};
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchPlaces
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
