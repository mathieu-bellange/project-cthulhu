import React from 'react';
import PropTypes from 'prop-types';

import './investigator-profile.sss';

export default class InvestigatorProfile extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  };

  render() {
    return (
      <div className={ `investigator-profile ${this.props.show ? 'show' : ''}`}>
        Profil
      </div>
    );
  }
}
