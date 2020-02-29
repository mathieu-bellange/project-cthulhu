import React from 'react';
import PropTypes from 'prop-types';
import { SelectComponent } from './select';
import { ScenarioComponent } from './scenario';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectScenarios, saveScenarioUpdating } from '../store';
import { map } from 'lodash';

import './create.container.sss';

class CreateContainer extends React.Component {
  static propTypes = {
    saveScenarioUpdating: PropTypes.func,
    scenarios: PropTypes.object
  };

  constructor(props){
    super(props);
    this.onSelectOption = this.onSelectOption.bind(this);
    this.state = {
      displayScenario: false
    }
  }

  componentDidUpdate() {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  onSelectOption(scenario) {
    this.setState({ displayScenario: true });
    const updatingScenario = scenario.title === 'Nouveau scénario' ? null : scenario;
    this.props.saveScenarioUpdating(updatingScenario);
  }


  render() {
    const { scenarios } = this.props;
    return(
      <div className="create-container">
        <div>
          <SelectComponent options={ [{ title: 'Nouveau scénario' }, ...map(scenarios, scenario => scenario)] } onSelectOption={this.onSelectOption}/>
        </div>
        <div className={`${this.state.displayScenario ? '' : 'hide'}`}>
          <ScenarioComponent />
        </div>
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
