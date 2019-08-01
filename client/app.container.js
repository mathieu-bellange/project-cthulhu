import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPlaces, getDashboardCards, addSound, getSoundById } from './store';
import { AppWrapper } from './app';

const mapStateToProps = state => {
  return {
    cards: getDashboardCards(state.placesReducer),
    sounds: { getSoundById: id => getSoundById(state, id) }
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchPlaces,
        addSound
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
