import React from 'react';
import PropTypes from 'prop-types';

import './card.sss';

import CardImg from './card-img';
import CardDescription from './card-description';

const Card = ({ card, showImg, showTitle, showDesc, limitImgHeight }) => {
  return (
    <div className="card">
      <CardImg limitImgHeight={limitImgHeight} showImg={showImg} img={card.overview} />
      <CardDescription
        title={card.title}
        desc={card.desc}
        showTitle={showTitle}
        showImg={showImg}
        showDesc={showDesc} />
    </div>
  );
}


Card.propTypes = {
  card: PropTypes.object.isRequired,
  showTitle: PropTypes.bool,
  showDesc: PropTypes.bool,
  showImg: PropTypes.bool,
  limitImgHeight: PropTypes.bool
};

export default Card;
