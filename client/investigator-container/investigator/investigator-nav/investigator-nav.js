import React from 'react';
import PropTypes from 'prop-types';

import './investigator-nav.sss';

export default class InvestigatorNav extends React.Component {
  static propTypes = {
    activeStats: PropTypes.bool,
    activeSkills: PropTypes.bool,
    activeStuff: PropTypes.bool,
    onClickNavItem: PropTypes.func
  };

  render() {
    return (
      <div className="investigator-nav">
        <div className={`nav-item ${this.props.activeStats ? 'active' : ''}`} onClick={() => this.props.onClickNavItem({ displayStats: true })}>
          Fiche
        </div>
        <div className={`nav-item ${this.props.activeSkills ? 'active' : ''}`} onClick={() => this.props.onClickNavItem({ displaySkills: true })}>
          Compétence
        </div>
        <div className={`nav-item ${this.props.activeStuff ? 'active' : ''}`} onClick={() => this.props.onClickNavItem({ displayStuff: true })}>
          Equipement
        </div>
      </div>
    );
  }
}
