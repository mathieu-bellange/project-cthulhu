import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'

import './card-img.sss';

const CardImg = ({ showImg, limitImgHeight, img, music, isPlaying, pause, play }) => {
  if (!showImg) return '';
  console.log(music);
  return (<div className="card-image">
    <img
      className={limitImgHeight ? 'limit-height' : ''}
      src={`/images/${img}`}
    />
    {
        music && music.length > 0 ? <div className="play-pause-wrapper">
        {
          isPlaying ? <FontAwesomeIcon icon={faPauseCircle} size="7x" onClick={pause}/> :
            <FontAwesomeIcon icon={faPlayCircle} size="7x" onClick={play}/>
        }
      </div> : ''
    }
  </div>);
};

CardImg.propTypes = {
  showImg: PropTypes.bool,
  limitImgHeight: PropTypes.bool,
  img: PropTypes.string.isRequired,
  children: PropTypes.func,
  music: PropTypes.array,
  play: PropTypes.func,
  pause: PropTypes.func,
  isPlaying: PropTypes.bool
};

export default CardImg;
