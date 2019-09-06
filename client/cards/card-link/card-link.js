import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import './card-link.sss';
import Card from '../card';

const CardLink = ({ url, cardLink, showDesc }) => {
  return (
    <Link to={{
      pathname: url
    }} className="card-link">
      <Card limitImgHeight={true}
      showTitle={true} showImg={true}
      showDesc={showDesc}
      card={ cardLink }></Card>
    </Link>
  );
};

CardLink.propTypes = {
  url: PropTypes.string.isRequired,
  cardLink: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  showDesc: PropTypes.bool
};

export default withRouter(CardLink);
