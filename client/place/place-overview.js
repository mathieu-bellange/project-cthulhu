import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import { map } from 'lodash';

import './place-overview.sss';
import { CardLink, Card } from '../cards';

const PlaceOverview = ({ scenarioId, card, insidePlaces, music, isPlaying, play, pause }) => {
  return (
    <div className="place-overview">
      <div className="card-wrapper">
        <Card card={card} showDesc={true} showImg={true}/>
      {
          music && music.length > 0 ? <div className="play-pause-wrapper">
          {
            isPlaying ? <FontAwesomeIcon icon={faPauseCircle} size="7x" onClick={pause}/> :
              <FontAwesomeIcon icon={faPlayCircle} size="7x" onClick={play}/>
          }
        </div> : ''
      }
      </div>
      <div className="inside-places">
        {
          map(insidePlaces, (place, index) => <CardLink key={ index } scenarioId={scenarioId} cardLink={ place }></CardLink>)
        }
      </div>
    </div>
  );
}

PlaceOverview.propTypes = {
  scenarioId: PropTypes.string.isRequired,
  card: PropTypes.object.isRequired,
  insidePlaces: PropTypes.object,
  music: PropTypes.array,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool
};

export default PlaceOverview;
