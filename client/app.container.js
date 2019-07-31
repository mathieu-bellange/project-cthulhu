import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPlaces, getDashboardCards } from './store';
import { AppWrapper } from './app';

const mapStateToProps = state => {
  return {
    cards: getDashboardCards(state.placesReducer)
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchPlaces
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
