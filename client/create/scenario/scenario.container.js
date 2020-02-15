import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { switchMap, map } from 'rxjs/operators';

import { ScenarioService, PlaceService } from '../services';
import {
  selectUpdatingScenario, saveScenarioUpdating, savePlace, fetchScenarios
} from '../../store';
import { ScenarioComponent } from './scenario.component';
import { PlacesComponent, CreatePlaceComponent } from '../places';
const service = new ScenarioService();
const placeService = new PlaceService();

class ScenarioContainer extends React.Component {
  static propTypes = {
    scenario: PropTypes.object,
    saveScenarioUpdating: PropTypes.func,
    savePlace: PropTypes.func,
    fetchScenarios: PropTypes.func
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
    ).subscribe(scenario => {
      this.props.fetchScenarios();
      this.props.saveScenarioUpdating(scenario);
    });
  }

  submitPlace(place, file) {
    placeService.onSubmit(this.props.scenario.id, place, file).pipe(
      switchMap(
        (s) => service.postImg(this.props.scenario.id, file).pipe(
          map(() => s ))
        ),
    ).subscribe(place => {
      this.props.savePlace(place);
      this.setState({ addPlace: false });
    });
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
            scenario && scenario.id ? <PlacesComponent addPlace={this.onAddPlace} /> : ''
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
      fetchScenarios,
      savePlace
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioContainer);
