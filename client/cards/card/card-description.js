import React from 'react';
import PropTypes from 'prop-types';

import './card-description.sss';

const CardDescription = ({ title, desc, showTitle, showDesc, showImg, scrollDesc }) => {
  return (
    <div className={`card-description ${scrollDesc ? 'scroll' : ''}`}>
      <div className="card-title">
        { showImg ? '' : <img src='/images/user.png'></img> }
        { showTitle ? title : '' }
      </div>
        { showDesc && desc ? desc.map((description, index) =>
          <p key={index}>{description}</p>
        ) : ''}
    </div>
  );
};

CardDescription.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.array,
  showTitle: PropTypes.bool,
  showImg: PropTypes.bool,
  showDesc: PropTypes.bool,
  scrollDesc: PropTypes.bool
};

export default CardDescription;
