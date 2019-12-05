import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectSharedDocs, selectScenarioId,
  sharedHelpDoc, unSharedHelpDoc, isSharedDocActive } from '../store';
import { SharedDocs, openSharedDoc } from './shared-docs';
import { SharedDoc, closeSharedDoc } from './shared-doc';

class SharedDocContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: null
    };
    closeSharedDoc.subscribe(() => {
      this.setState({ doc: null});
    });
    openSharedDoc.subscribe(doc => {
      console.log(doc);
      this.setState({ doc })
    });
  }

  render() {
    return (
      <div>
        {
            this.state.doc ? '' : <SharedDocs {...this.props} />
        }
        {
          this.state.doc ? <SharedDoc sharedDoc={this.state.doc}/> : ''
        }
      </div>
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
      unSharedHelpDoc,
      sharedHelpDoc
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SharedDocContainer);
