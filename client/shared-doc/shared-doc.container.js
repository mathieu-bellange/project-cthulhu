import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectSharedDocs, selectScenarioId, sharedHelpDoc, isSharedDocActive } from '../store';
import SharedDoc from './shared-doc';

class SharedDocContainer extends React.Component {

  render() {
    return (
      <SharedDoc {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSharedDocActive: (index) => isSharedDocActive(state, selectScenarioId(state), index),
    scenarioId: selectScenarioId(state),
    sharedDocs: selectSharedDocs(state, selectScenarioId(state))
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
      sharedHelpDoc
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SharedDocContainer);
