import React from 'react';
import PropTypes from 'prop-types';

import './list-card.sss';

export default class ListCard extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    list: PropTypes.array
  };

  render() {
    return (
      <div className="list-card">
        <u>{ this.props.name }</u>
        <ul>
          {
            this.props.list.map((item, index) => <li key={index}>{ item.name }</li>)
          }
        </ul>
      </div>
    );
  }
}
