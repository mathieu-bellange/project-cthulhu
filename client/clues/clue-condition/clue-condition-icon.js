import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faWalking, faSearch, faEye, faFistRaised, faDiceD20 } from '@fortawesome/free-solid-svg-icons'

import './clue-condition-icon.sss'

const ClueConditionIcon = ({type}) => {
  return (
    <div className="clue-condition-icon">
      {{
        clock: <FontAwesomeIcon icon={faClock} />,
        place: <FontAwesomeIcon icon={faWalking} />,
        search: <FontAwesomeIcon icon={faSearch} />,
        see: <FontAwesomeIcon icon={faEye} />,
        fight: <FontAwesomeIcon icon={faFistRaised} />,
        chat: <img src="/images/chat.png" />,
        ear: <img src="/images/ear.png" />,
        description: <img src="/images/description.png" />,
        roll: <FontAwesomeIcon icon={faDiceD20} />
      }[type]}
    </div>
  );
}

ClueConditionIcon.propTypes = {
   type: PropTypes.oneOf(['clock', 'place', 'see', 'search', 'fight', 'chat', 'roll', 'description', 'ear']).isRequired
}

export default ClueConditionIcon;
