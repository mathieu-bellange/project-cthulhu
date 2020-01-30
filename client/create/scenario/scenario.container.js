import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { switchMap, map } from 'rxjs/operators';

import { ScenarioService } from '../services';
import {
  selectUpdatingScenario, saveScenarioUpdating, savePlace
} from '../../store';
import { ScenarioComponent } from './scenario.component';
import { PlacesComponent, CreatePlaceComponent } from '../places';
const service = new ScenarioService();

class ScenarioContainer extends React.Component {
  static propTypes = {
    scenario: PropTypes.object,
    saveScenarioUpdating: PropTypes.func,
    savePlace: PropTypes.func
  };

  constructor(props){
    super(props);
    this.state = {
      addPlace: false
    };
    this.submit = this.submit.bind(this);
    this.submitPlace = this.submitPlace.bind(this);
    this.onAddPlace = this.onAddPlace.bind(this);
  }

  submit(scenario, file) {
    service.onSubmit(scenario, file).pipe(
      switchMap(
        (s) => service.postImg(scenario.id, file).pipe(
          map(() => s ))
        ),
    ).subscribe(scenario => this.props.saveScenarioUpdating(scenario));
  }

  submitPlace(place, file) {
    // TODO save on server
    this.props.savePlace({ ...place, overview: 'cretaceous-creature/hunt-cabin.jpg' });
    this.setState({ addPlace: false });
  }

  onAddPlace() {
    this.setState({ addPlace: true });
  }

  render() {
    const {
      scenario
    } = this.props;
    return(
      <div className="scenario-modification">
        <ScenarioComponent scenario={scenario} submit={this.submit} />
        {
          this.state.addPlace ?
            <CreatePlaceComponent submit={this.submitPlace}/> :
            <PlacesComponent addPlace={this.onAddPlace} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    scenario: selectUpdatingScenario(state)
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
      saveScenarioUpdating,
      savePlace
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioContainer);
