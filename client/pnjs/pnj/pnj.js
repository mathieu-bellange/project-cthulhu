import React from 'react';
import PropTypes from 'prop-types';

import './pnj.sss';

import PnjOverview from './pnj-overview';
import PnjDetails from './pnj-details';

export class Pnj extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    pnj: PropTypes.object.isRequired,
    minimize: PropTypes.bool,
    isEnlarged: PropTypes.bool,
    enlargePnj: PropTypes.func,
    shrunkPnj: PropTypes.func,
    isClueEnlarged: PropTypes.func.isRequired,
    enlargeClue: PropTypes.func.isRequired,
    shrunkClue: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className={`pnj ${this.props.isEnlarged ? 'maximize' : ''}`}>
        <PnjOverview
          card={this.props.pnj}
          minimize={this.props.minimize}
          isEnlarged={this.props.isEnlarged}
          enlargePnj={this.props.enlargePnj}
          shrunkPnj={this.props.shrunkPnj}
          />
        <PnjDetails
          id={this.props.id}
          pnj={this.props.pnj}
          minimize={this.props.minimize}
          isEnlarged={this.props.isEnlarged}
          isClueEnlarged={this.props.isClueEnlarged}
          enlargeClue={this.props.enlargeClue}
          shrunkClue={this.props.shrunkClue}
        />
      </div>
    );
  }
}
