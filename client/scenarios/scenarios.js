import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { map } from 'lodash';

import './scenarios.sss';

import { Card } from '../cards';

const Scenarios = ({ scenarios }) => {
  return (
    <div className={`scenarios${Object.values(scenarios).length === 1 ? ' center' : ''}`}>
      {
        map(scenarios, (scenario, index) =>
          <Link key={index} to={`/${scenario.id}`}>
            <Card showTitle={true} showImg={true}
              showDesc={true} card={ scenario }></Card>
          </Link>)
      }
    </div>
  );
};

Scenarios.propTypes = {
  scenarios: PropTypes.object.isRequired
};

export default Scenarios;
