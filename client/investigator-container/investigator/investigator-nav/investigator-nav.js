import React from 'react';
import PropTypes from 'prop-types';

import './investigator-nav.sss';

export default class InvestigatorNav extends React.Component {
  static propTypes = {
    activeStats: PropTypes.bool,
    activeSkills: PropTypes.bool,
    activeStuff: PropTypes.bool
  };

  render() {
    return (
      <div className="investigator-nav">
        <div className={`nav-item ${this.props.activeStats ? 'active' : ''}`}>
          Fiche
        </div>
        <div className={`nav-item ${this.props.activeSkills ? 'active' : ''}`}>
          Compétence
        </div>
        <div className={`nav-item ${this.props.activeStuff ? 'active' : ''}`}>
          Equipement
        </div>
      </div>
    );
  }
}
