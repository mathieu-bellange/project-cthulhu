import React from 'react';
import PropTypes from 'prop-types';

import Investigator from './investigator';
import './investigator-container.sss';

export default class InvestigatorContainer extends React.Component {
  static propTypes = {
    investigators: PropTypes.array,
    updateNavData: PropTypes.func
  };

  render() {
    return (
      <div className="investigator-container">
        {
          this.props.investigators.map((investigator, index) => <Investigator
              key={index}
              id={index}
              investigator={ investigator }
              updateNavData={this.props.updateNavData}
            ></Investigator>)
        }
      </div>
    );
  }
}
