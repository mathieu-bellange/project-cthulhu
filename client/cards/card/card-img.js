import React from 'react';
import PropTypes from 'prop-types';

import './card-img.sss';

const CardImg = ({ showImg, limitImgHeight, img }) => {
  if (!showImg) return '';
  return (<div className="card-image">
    <img
      className={limitImgHeight ? 'limit-height' : ''}
      src={`/images/${img}`}
    />
  </div>);
};

CardImg.propTypes = {
  showImg: PropTypes.bool,
  limitImgHeight: PropTypes.bool,
  img: PropTypes.string.isRequired
};

export default CardImg;
