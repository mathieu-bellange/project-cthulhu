import React from 'react';
import PropTypes from 'prop-types';

import './card.sss';

export class Card extends React.Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    showTitle: PropTypes.bool,
    showDesc: PropTypes.bool,
    limitImgHeight: PropTypes.bool
  };

  render() {
    return (
      <div className="card">
        <div className="image">
          <img
            className={this.props.limitImgHeight ? 'limit-height' : ''}
            src={`/images/${this.props.card.overview}`}
          />
        </div>
        <div className="desc-container">
          <div className="title">
            { this.props.showTitle ? this.props.card.title : '' }
          </div>
          <p>
            { this.props.showDesc ? this.props.card.desc : ''}
          </p>
        </div>
      </div>
    );
  }
}
