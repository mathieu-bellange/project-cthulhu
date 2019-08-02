import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  fetchPlaces, addSound, getSoundById,
  getFullScreen, defineFullScreen
} from './store';
import { AppWrapper } from './app';

const mapStateToProps = state => {
  return {
    sounds: { getSoundById: id => getSoundById(state, id) },
    isFullScreen: getFullScreen(state)
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchPlaces,
        addSound,
        defineFullScreen
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
