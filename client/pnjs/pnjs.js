import React from 'react';
import PropTypes from 'prop-types';

import './pnjs.sss';

import { Pnj } from './pnj';

export class Pnjs extends React.Component {
  static propTypes = {
    pnjs: PropTypes.array
  };

  render() {
    return (
      <div className="pnjs">
        {
          this.props.pnjs.map((pnj, index) =>
            <Pnj key={index} pnj={pnj} minimize={true}/>
          )
        }
      </div>
    );
  }
}
