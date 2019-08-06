import React from 'react';
import PropTypes from 'prop-types';

import './pnj-overview.sss';

import { Card } from '../../cards';

const PnjOverview = ({ card, minimize, isEnlarged, enlargePnj, shrunkPnj }) => {
  const maximize = () => {
    if (!enlargePnj) return;
    if (isEnlarged)
      shrunkPnj();
    else
      enlargePnj();
  }
  return (
    <div className={`pnj-overview ${minimize ? 'minimize' : ''}`} onClick={maximize}>
      <div className="card-wrapper">
        <Card
          card={card}
          showTitle={minimize}
          showDesc={true}
          showImg={!minimize || isEnlarged}
        />
      </div>
    </div>
  );
}

PnjOverview.propTypes = {
  card: PropTypes.object.isRequired,
  minimize: PropTypes.bool,
  isEnlarged: PropTypes.bool,
  enlargePnj: PropTypes.func,
  shrunkPnj: PropTypes.func
};

export default PnjOverview;
