import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectDashboardCards, selectScenario } from '../store';
import Dashboard from './dashboard';

class DashboardContainer extends React.Component {
  static propTypes = {
    selectScenario: PropTypes.func.isRequired,
    scenarioId: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.props.selectScenario(this.props.scenarioId);
  }

  render() {
    return (
      <Dashboard {...this.props} />
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    cards: selectDashboardCards(state, props.scenarioId)
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
      selectScenario
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
