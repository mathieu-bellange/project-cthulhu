import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import './dashboard.sss';

import { CardLink } from '../cards';

const Dashboard = ({ cards, scenarioId }) => {
  return (
    <div className="dashboard">
      {
        map(cards, (cardLink, index) =>
          <CardLink key={ index } url={`/${scenarioId}/place/${cardLink.id}`}
            cardLink={ cardLink } showDesc={true}></CardLink>)
      }
    </div>
  );
};

Dashboard.propTypes = {
  scenarioId: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired
};

export default Dashboard;
