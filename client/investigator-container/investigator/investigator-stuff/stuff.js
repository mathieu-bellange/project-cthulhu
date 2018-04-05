import React from 'react';
import PropTypes from 'prop-types';

import './stuff.sss';

export default class Stuff extends React.Component {
  static propTypes = {
    stuff: PropTypes.array
  };

  render() {
    return (
      <div className="stuff">
        {
          this.props.stuff.map((stuff, index) => <div key={index} className="stuff-item">{ stuff }</div>)
        }
      </div>
    );
  }
}
