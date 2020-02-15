import React from 'react';
import PropTypes from 'prop-types';
import { SelectComponent } from './select';
import { ScenarioComponent } from './scenario';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectScenarios, saveScenarioUpdating } from '../store';
import { map } from 'lodash';

class CreateContainer extends React.Component {
  static propTypes = {
    saveScenarioUpdating: PropTypes.func,
    scenarios: PropTypes.object
  };

  constructor(props){
    super(props);
    this.onSelectOption = this.onSelectOption.bind(this);
  }

  onSelectOption(scenario) {
    const updatingScenario = scenario.title === 'Nouveau scénario' ? null : scenario;
    this.props.saveScenarioUpdating(updatingScenario);
  }


  render() {
    const { scenarios } = this.props;
    return(
      <div>
        <SelectComponent options={ [{ title: 'Nouveau scénario' }, ...map(scenarios, scenario => scenario)] } onSelectOption={this.onSelectOption}/>
        <ScenarioComponent />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    scenarios: selectScenarios(state)
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
      saveScenarioUpdating
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer);
