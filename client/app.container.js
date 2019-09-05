import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  fetchPlaces, fetchPnjs,
  isFullScreen, defineFullScreen, isPlacesLoaded, isPnjsLoaded,
  selectPnjTitle, selectPlaceTitle
} from './store';
import AppWrapper from './app';

class App extends React.Component {
  static propTypes = {
    fetchPlaces: PropTypes.func.isRequired,
    fetchPnjs: PropTypes.func.isRequired,
    isFullScreen: PropTypes.bool.isRequired,
    placesLoaded: PropTypes.bool.isRequired,
    pnjsLoaded: PropTypes.bool.isRequired,
    defineFullScreen: PropTypes.func.isRequired,
    selectPnjTitle: PropTypes.func.isRequired,
    selectPlaceTitle: PropTypes.func.isRequired
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
      pnjsLoaded,
      selectPnjTitle,
      selectPlaceTitle
    } = this.props;
    return(
      <AppWrapper isFullScreen={isFullScreen} placesLoaded={placesLoaded}
        pnjsLoaded={pnjsLoaded} selectPnjTitle={selectPnjTitle} selectPlaceTitle={selectPlaceTitle}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isFullScreen: isFullScreen(state),
    placesLoaded: isPlacesLoaded(state),
    pnjsLoaded: isPnjsLoaded(state),
    selectPnjTitle: (id) => selectPnjTitle(state, id),
    selectPlaceTitle: (id) => selectPlaceTitle(state, id)
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchPnjs,
        fetchPlaces,
        defineFullScreen
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
