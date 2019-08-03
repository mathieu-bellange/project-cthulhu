import React from 'react';
import PropTypes from 'prop-types';

import './clue-condition.sss'


import ClueConditionIcon from './clue-condition-icon';

const ClueCondition = ({ condition }) => {
  return (
    <div className="clue-condition">
      <ClueConditionIcon type={condition.type}/>
      { condition.title }
    </div>
  );
}

ClueCondition.propTypes = {
   condition: PropTypes.object.isRequired
}

export default ClueCondition;
