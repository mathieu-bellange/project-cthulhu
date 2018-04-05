import React from 'react';
import PropTypes from 'prop-types';

import { InvestigatorStats, InvestigatorSkills } from '../../investigator-container';
import './pnjs.sss';

export default class Pnjs extends React.Component {
  static propTypes = {
    pnjs: PropTypes.array
  };

  render() {
    return (
      <div className="pnjs">
        {
          this.props.pnjs.map((pnj, index) =>
            <div key={index} className="pnj">
              <InvestigatorStats show={ true } investigator={ pnj }></InvestigatorStats>
              <InvestigatorSkills show={ true } investigator={ pnj }></InvestigatorSkills>
            </div>)
        }
      </div>
    );
  }
}
