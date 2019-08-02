import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import './card-link.sss';
import Card from '../card';

const CardLink = ({ cardLink, match, showDesc }) => {

  return (
    <Link to={{
      pathname: match.url + cardLink.url,
      state: { card: cardLink.card }
    }} className="card-link">
      <Card limitImgHeight={true}
      showTitle={true} showImg={true}
      showDesc={showDesc}
      card={ cardLink.place || cardLink.pnj }></Card>
    </Link>
  );
};

CardLink.propTypes = {
  cardLink: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  showDesc: PropTypes.bool
};

export default withRouter(CardLink);
