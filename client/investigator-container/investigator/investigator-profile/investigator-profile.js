import React from 'react';
import PropTypes from 'prop-types';

import ProfileItem from './profile-item';
import './investigator-profile.sss';

export default class InvestigatorProfile extends React.Component {
  static propTypes = {
    show: PropTypes.bool,
    profile: PropTypes.array
  };

  render() {
    return (
      <div className={ `investigator-profile ${this.props.show ? 'show' : ''}`}>
        {
          this.props.profile.map((item, index) =>
            <ProfileItem key={index} item={item}></ProfileItem>)
        }
      </div>
    );
  }
}
