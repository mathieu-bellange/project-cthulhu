import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import './card-link.sss';
import { Card } from './card';

class CardLinkComponent extends React.Component {
  static propTypes = {
    cardLink: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    showDesc: PropTypes.bool
  };

  render() {
    return (
      <Link to={{
        pathname: this.props.match.url + this.props.cardLink.url,
        state: { card: this.props.cardLink.card }
      }} className="card-link">
        <Card limitImgHeight={true} showTitle={true} showDesc={this.props.showDesc} card={ this.props.cardLink.place || this.props.cardLink.pnj }></Card>
      </Link>
    );
  }
}

export const CardLink = withRouter(CardLinkComponent);
