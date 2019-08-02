import React from 'react';
import PropTypes from 'prop-types';

import './card-description.sss';

const CardDescription = ({ title, desc, showTitle, showDesc, showImg }) => {
  return (
    <div className="card-description">
      <div className="card-title">
        { showImg ? '' : <img src='/images/user.png'></img> }
        { showTitle ? title : '' }
      </div>
      <p>
        { showDesc ? desc : ''}
      </p>
    </div>
  );
};

CardDescription.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  showTitle: PropTypes.bool,
  showImg: PropTypes.bool,
  showDesc: PropTypes.bool
};

export default CardDescription;
