import React from 'react';
import PropTypes from 'prop-types';

import './weapon-details.sss';

const WeaponDetails = ({ isDetailsEnlarged, shrunkDetails, enlargeDetails, weapon }) => {
  return (
    <div className="weapon-details" onClick={() => isDetailsEnlarged ? shrunkDetails() : enlargeDetails()}>
      <div className="dmg">{ weapon.dmg }</div>
      <div className={`other-details ${isDetailsEnlarged ? '' : 'hide'}`}>
        <div>{ weapon.range ?  weapon.range : 'Allonge'}</div>
        <div>{ weapon.rate ? weapon.rate : '1' }</div>
        <div>{ weapon.capacity ? weapon.capacity : '-' }</div>
        <div>{ weapon.breakdown ? weapon.breakdown : '-'}</div>
      </div>
    </div>
  );
}

WeaponDetails.propTypes = {
  weapon: PropTypes.object.isRequired,
  isDetailsEnlarged: PropTypes.bool,
  shrunkDetails: PropTypes.func.isRequired,
  enlargeDetails: PropTypes.func.isRequired
};

export default WeaponDetails;
