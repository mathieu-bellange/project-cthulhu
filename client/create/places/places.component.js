import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { map } from 'lodash';

import './places.component.sss';

import { Card } from '../../cards';

export const PlacesComponent = ({ places, addPlace }) => {
  return (
    <div className="places-modification">
      <div className="add-place" onClick={ addPlace }>
        <FontAwesomeIcon icon={faPlusSquare} size="lg" />
      </div>
      {
        map(places, (place, index) => (
          <Card key={index} showTitle={true} showImg={true} card={ place }></Card>
        ))
      }
    </div>
  );
};

PlacesComponent.propTypes = {
  places: PropTypes.object,
  addPlace: PropTypes.func,
  hide: PropTypes.bool
};
