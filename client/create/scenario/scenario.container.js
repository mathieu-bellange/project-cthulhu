import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { switchMap, map } from 'rxjs/operators';

import { ScenarioService } from '../services';
import {
  selectUpdatingScenario, saveScenarioUpdating
} from '../../store';
import { ScenarioComponent } from './scenario.component';
import { PlacesComponent } from '../places';
const service = new ScenarioService();

class ScenarioContainer extends React.Component {
  static propTypes = {
    scenario: PropTypes.object,
    saveScenarioUpdating: PropTypes.func
  };

  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(scenario, file) {
    service.onSubmit(scenario, file).pipe(
      switchMap(
        (s) => service.postImg(scenario.id, file).pipe(
          map(() => s ))
        ),
    ).subscribe(scenario => this.props.saveScenarioUpdating(scenario));
  }

  render() {
    const {
      scenario
    } = this.props;
    return(
      <div className="scenario-modification">
        <ScenarioComponent scenario={scenario} submit={this.submit} />
        <PlacesComponent/>
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
      saveScenarioUpdating
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioContainer);
