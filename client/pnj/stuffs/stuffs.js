import React from 'react';
import PropTypes from 'prop-types';

import './stuffs.sss';

import { Stuff } from './stuff';

export class Stuffs extends React.Component {
  static propTypes = {
    stuffs: PropTypes.array
  };

  render() {
    return (
      <div className="stuffs">
        {
          this.props.stuffs.map((stuff, index) =>
            <Stuff key={index} stuff={stuff} />
          )
        }
      </div>
    );
  }
}
