import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PlacesComponent } from './places.component';

class PlacesContainer extends React.Component {
  static propTypes = {
  };

  constructor(props){
    super(props);
  }


  render() {
    return(
      <PlacesComponent places={[{ "id": "hunt-cabin",
      "title": "La cabane de chasse",
      "overview": "cretaceous-creature/hunt-cabin.jpg"}]} />
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlacesContainer);
