import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faWalking, faSearch, faEye, faFistRaised, faDiceD20 } from '@fortawesome/free-solid-svg-icons'

import './clue.sss';

function ConditionIcon(state) {
  return (
    <div>
      {{
        clock: <FontAwesomeIcon icon={faClock} />,
        place: <FontAwesomeIcon icon={faWalking} />,
        search: <FontAwesomeIcon icon={faSearch} />,
        see: <FontAwesomeIcon icon={faEye} />,
        fight: <FontAwesomeIcon icon={faFistRaised} />,
        chat: <img src="/images/chat.png" />,
        roll: <FontAwesomeIcon icon={faDiceD20} />
      }[state]}
    </div>
  );
}

ConditionIcon.propTypes = {
   state: PropTypes.oneOf(['clock', 'place', 'see', 'search', 'fight', 'chat', 'roll'])
}

export class Clue extends React.Component {
  static propTypes = {
    clue: PropTypes.object.isRequired
  };

  constructor(props){
     super(props);
     this.state = {
       enlarge: false
     };
     this.enlarge = this.enlarge.bind(this);
  }

  enlarge(){
      this.setState({ enlarge: !this.state.enlarge });
  }

  render() {
    return (
      <div className={`clue-card ${this.state.enlarge ? 'lg': ''}`} onClick={this.enlarge}>
        <div className="condition">
          { ConditionIcon(this.props.clue.condition.type) }
          { this.props.clue.condition.title }
        </div>
        <p>
          { this.props.clue.clue }
        </p>
        {
          this.props.clue.sideEffects && this.state.enlarge ?  this.props.clue.sideEffects.map((sideEffect, index) =>
            <p key={index} className="side-effect">{ sideEffect }</p>) : ''
        }
      </div>
    );
  }
}
