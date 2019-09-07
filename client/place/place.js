import React from 'react';
import PropTypes from 'prop-types';

import './place.sss';
import PlaceOverview from './place-overview';
import PlaceDetails from './place-details';

const Place = ({ scenarioId, insidePlaces, place, isPlaying, play, pause, isClueEnlarged, enlargeClue, shrunkClue, isPnjEnlarged, enlargePnj, shrunkPnj }) => {
  return (
    <div className="place">
      <PlaceOverview
        scenarioId={scenarioId}
        card={place}
        insidePlaces={insidePlaces}
        music={place.music}
        isPlaying={isPlaying} play={play} pause={pause}
      />
      <PlaceDetails
        scenarioId={scenarioId}
        pnjs={place.pnjs}
        clues={place.clues}
        isClueEnlarged={isClueEnlarged}
        enlargeClue={enlargeClue}
        shrunkClue={shrunkClue}
        isPnjEnlarged={isPnjEnlarged}
        enlargePnj={enlargePnj}
        shrunkPnj={shrunkPnj}
      />
    </div>
  );
}

Place.propTypes = {
  isClueEnlarged: PropTypes.func.isRequired,
  enlargeClue: PropTypes.func.isRequired,
  shrunkClue: PropTypes.func.isRequired,
  place: PropTypes.object.isRequired,
  insidePlaces: PropTypes.array,
  scenarioId: PropTypes.string.isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool,
  isPnjEnlarged: PropTypes.func.isRequired,
  enlargePnj: PropTypes.func.isRequired,
  shrunkPnj: PropTypes.func.isRequired
};

export default Place;
