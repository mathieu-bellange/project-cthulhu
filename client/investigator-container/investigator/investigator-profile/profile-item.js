import React from 'react';
import PropTypes from 'prop-types';

import './profile-item.sss';

export default class ProfileItem extends React.Component {
  static propTypes = {
    item: PropTypes.object
  };

  render() {
    return (
      <div className="profile-item">
        <div className="name">{ this.props.item.name }</div>
        <div className="value">{ this.props.item.value }</div>
      </div>
    );
  }
}
