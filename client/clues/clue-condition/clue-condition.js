import React from 'react';
import PropTypes from 'prop-types';

import './clue-condition.sss'


import { ClueConditionIcon } from './clue-condition-icon';

const ClueCondition = ({ condition, isEnlarged }) => {
  return (
    <div className={`clue-condition ${isEnlarged ? '' : 'collapse'}`}>
      <ClueConditionIcon type={condition.type}/>
      { condition.title }
    </div>
  );
}

ClueCondition.propTypes = {
   condition: PropTypes.object.isRequired,
   isEnlarged: PropTypes.bool
}

export default ClueCondition;
