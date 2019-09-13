import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectSharedDocs, selectScenarioId } from '../store';
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
    sharedDocs: selectSharedDocs(state, selectScenarioId(state))
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SharedDocContainer);
