import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import './stuff.sss';

function StuffIcon(state) {
  return (
    <div>
      {{
        object: <img src='/images/backpack.png'></img>,
        weapon: <img src='/images/swords.png'></img>
      }[state]}
    </div>
  );
}

StuffIcon.propTypes = {
   state: PropTypes.oneOf(['object', 'weapon'])
}

export class Stuff extends React.Component {
  static propTypes = {
    stuff: PropTypes.object.isRequired
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
      <div className={`stuff ${this.state.enlarge ? 'lg' : ''}`} onClick={this.enlarge}>
        <div className="stuff-overview">
          <div className="name">
            { StuffIcon(this.props.stuff.type) }
            { this.props.stuff.name}
          </div>
        </div>
        <div className={`stuff-description ${this.state.enlarge ? '' : 'hide'}`}>
          { this.props.stuff.description }
        </div>
        <div className={`other ${this.state.enlarge ? '' : 'hide'}`}>
          <div className="stuff-effect">
            <FontAwesomeIcon icon={faEye} />
            { this.props.stuff.effect }
          </div>
        </div>
      </div>
    );
  }
}
