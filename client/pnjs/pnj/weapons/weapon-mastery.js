import React from 'react';
import PropTypes from 'prop-types';

import './weapon-mastery.sss';

const WeaponMastery = ({ mastery, enlargeMastery, shrunkMastery, isMasteryEnlarged }) => {
  const half = () => {
    if (isNaN(mastery)) return '-';
    return Math.trunc(mastery / 2);
  }

  const fifth = () => {
    if (isNaN(mastery)) return '-';
    return Math.trunc(mastery / 5);
  }
  return (
    <div className="weapon-mastery" onClick={() => isMasteryEnlarged ? shrunkMastery() : enlargeMastery()}>
      <div className="mastery">{ mastery } %</div>
      <div className={`mastery-details ${isMasteryEnlarged ? '' : 'hide'}`}>
        <div>{ half() }</div>
        {
          !isNaN(mastery) ? '-' : ''
        }
        <div>{ fifth() }</div>
      </div>
    </div>
  );
}

WeaponMastery.propTypes = {
  mastery: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  isMasteryEnlarged: PropTypes.bool,
  shrunkMastery: PropTypes.func.isRequired,
  enlargeMastery: PropTypes.func.isRequired
};

export default WeaponMastery;
