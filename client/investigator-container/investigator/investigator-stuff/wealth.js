import React from 'react';
import PropTypes from 'prop-types';

import './wealth.sss';

export default class Wealth extends React.Component {
  static propTypes = {
    wealth: PropTypes.object
  };

  render() {
    return (
      <div className="wealth">
        <div className="wealth-item">
          <div>Dépenses courantes</div>
          <div>{ this.props.wealth.current }</div>
        </div>
        <div className="wealth-item">
          <div>Espèces</div>
          <div>{ this.props.wealth.cash }</div>
        </div>
        <div className="wealth-item">
          <div>Capital</div>
          <div>{ this.props.wealth.capital }</div>
        </div>
      </div>
    );
  }
}
