import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import './place-overview.sss';
import { CardLink, Card } from '../cards';

const PlaceOverview = ({ scenarioId, card, insidePlaces, music, isPlaying, play, pause }) => {
  return (
    <div className="place-overview">
      <div className="card-wrapper">
        <Card card={card} showDesc={true} showImg={true} scrollDesc={true}
         music={music} isPlaying={isPlaying} pause={pause} play={play}
        />
      </div>
      <div className="inside-places">
        {
          map(insidePlaces, (place, index) => <CardLink key={ index }
            url={`/${scenarioId}/place/${place.id}`} cardLink={ place }></CardLink>)
        }
      </div>
    </div>
  );
}

PlaceOverview.propTypes = {
  scenarioId: PropTypes.string.isRequired,
  card: PropTypes.object.isRequired,
  insidePlaces: PropTypes.array,
  music: PropTypes.array,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool
};

export default PlaceOverview;
