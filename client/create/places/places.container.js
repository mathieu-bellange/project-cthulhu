import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PlacesComponent } from './places.component';
import { selectUpdatingPlaces } from '../../store';

class PlacesContainer extends React.Component {
  static propTypes = {
    places: PropTypes.object
  };

  constructor(props){
    super(props);
  }


  render() {
    return(
      <PlacesComponent {...this.props} />
    );
  }
}

const mapStateToProps = state => {
  return {
    places: selectUpdatingPlaces(state)
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlacesContainer);
