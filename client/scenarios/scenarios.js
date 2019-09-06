import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { map } from 'lodash';

import './scenarios.sss';

const Scenarios = ({ scenarios }) => {
  return (
    <div className="scenarios">
      {
        map(scenarios, (scenario, index) =>
          <Link key={index} to={`/${scenario.id}`}>
            <div>{ scenario.id }</div>
          </Link>)
      }
    </div>
  );
};

Scenarios.propTypes = {
  scenarios: PropTypes.object.isRequired
};

export default Scenarios;
