import React from 'react';
import PropTypes from 'prop-types';

import './card.sss';

import CardImg from './card-img';
import CardDescription from './card-description';

const Card = ({ card, showImg, showTitle, showDesc, limitImgHeight, music, isPlaying, pause, play, scrollDesc }) => {
  return (
    <div className="card">
      { card.overview ? <CardImg limitImgHeight={limitImgHeight} showImg={showImg} img={card.overview}  music={music} isPlaying={isPlaying} pause={pause} play={play} /> : '' }
      <CardDescription
        title={card.title}
        desc={card.desc}
        showTitle={showTitle}
        showImg={showImg}
        scrollDesc={scrollDesc}
        showDesc={showDesc} />
    </div>
  );
}


Card.propTypes = {
  card: PropTypes.object.isRequired,
  showTitle: PropTypes.bool,
  showDesc: PropTypes.bool,
  showImg: PropTypes.bool,
  limitImgHeight: PropTypes.bool,
  scrollDesc: PropTypes.bool,
  music: PropTypes.array,
  play: PropTypes.func,
  pause: PropTypes.func,
  isPlaying: PropTypes.bool
};

export default Card;
