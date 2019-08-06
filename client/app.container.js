import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  fetchPlaces, fetchPnjs,
  getFullScreen, defineFullScreen, isPlacesLoaded, isPnjsLoaded
} from './store';
import { AppWrapper } from './app';

const mapStateToProps = state => {
  return {
    isFullScreen: getFullScreen(state),
    placesLoaded: isPlacesLoaded(state),
    pnjsLoaded: isPnjsLoaded(state)
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchPnjs,
        fetchPlaces,
        defineFullScreen
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
