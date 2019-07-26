import React from 'react';
import PropTypes from 'prop-types';

import './spells.sss';

import { Spell } from './spell';

export class Spells extends React.Component {
  static propTypes = {
    spells: PropTypes.array
  };

  render() {
    return (
      <div className="spells">
        {
          this.props.spells.map((spell, index) =>
            <Spell key={index} spell={spell} />
          )
        }
      </div>
    );
  }
}
