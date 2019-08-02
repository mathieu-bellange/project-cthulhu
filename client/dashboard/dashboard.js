import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import './dashboard.sss';

import { CardLink } from '../card';

const Dashboard = ({ cards }) => {
  return (
    <div className="dashboard">
      {
        map(cards, (cardLink, index) =>
          <CardLink key={ index } cardLink={ cardLink } showDesc={true}></CardLink>)
      }
    </div>
  );
};

Dashboard.propTypes = {
  cards: PropTypes.array.isRequired
};

export default Dashboard;
