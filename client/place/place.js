import React from 'react';
import PropTypes from 'prop-types';

import './place.sss';
import PlaceOverview from './place-overview';
import PlaceDetails from './place-details';

const Place = ({ id, place, isPlaying, play, pause }) => {
  return (
    <div className="place">
      <PlaceOverview
        card={place}
        insidePlaces={place.insidePlaces}
        music={place.music}
        isPlaying={isPlaying} play={play} pause={pause}
      />
      <PlaceDetails
        id={id}
        pnjs={place.pnjs}
        clues={place.clues}
      />
    </div>
  );
}

Place.propTypes = {
  id: PropTypes.string.isRequired,
  place: PropTypes.object.isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool
};

export default Place;
