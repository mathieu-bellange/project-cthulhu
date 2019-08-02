import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import './dashboard.sss';

import { CardLink } from '../card';

export class Dashboard extends React.Component {
  static propTypes = {
    cards: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="dashboard">
        {
          map(this.props.cards, (cardLink, index) =>
            <CardLink key={ index } cardLink={ cardLink } showDesc={true}></CardLink>)
        }
      </div>
    );
  }
}
