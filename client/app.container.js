import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  isFullScreen, defineFullScreen,
  selectPnjTitle, selectPlaceTitle, fetchScenarios, isScenariosLoaded
} from './store';
import AppWrapper from './app';

class App extends React.Component {
  static propTypes = {
    fetchScenarios: PropTypes.func.isRequired,
    isFullScreen: PropTypes.bool.isRequired,
    scenariosLoaded: PropTypes.bool.isRequired,
    defineFullScreen: PropTypes.func.isRequired,
    selectPnjTitle: PropTypes.func.isRequired,
    selectPlaceTitle: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchScenarios();
    this.props.defineFullScreen(document.fullscreenElement)
    document.addEventListener('fullscreenchange',
      () => this.props.defineFullScreen(document.fullscreenElement));
  }

  render() {
    const {
      isFullScreen,
      scenariosLoaded,
      selectPnjTitle,
      selectPlaceTitle
    } = this.props;
    return(
      <AppWrapper isFullScreen={isFullScreen} scenariosLoaded={scenariosLoaded}
        selectPnjTitle={selectPnjTitle} selectPlaceTitle={selectPlaceTitle}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isFullScreen: isFullScreen(state),
    scenariosLoaded: isScenariosLoaded(state),
    selectPnjTitle: (id) => selectPnjTitle(state, id),
    selectPlaceTitle: (id) => selectPlaceTitle(state, id)
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchScenarios,
        defineFullScreen
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
