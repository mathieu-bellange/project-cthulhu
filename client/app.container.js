import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  fetchPlaces,
  getFullScreen, defineFullScreen, isPlacesLoaded
} from './store';
import { AppWrapper } from './app';

const mapStateToProps = state => {
  return {
    isFullScreen: getFullScreen(state),
    placesLoaded: isPlacesLoaded(state)
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchPlaces,
        defineFullScreen
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
