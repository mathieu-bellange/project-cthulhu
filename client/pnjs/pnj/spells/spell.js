import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import './spell.sss';

export class Spell extends React.Component {
  static propTypes = {
    spell: PropTypes.object.isRequired
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
      <div className={`spell ${this.state.enlarge ? 'lg' : ''}`} onClick={this.enlarge}>
        <div className="spell-overview">
          <div className="name">
            <img src='/images/spellbook.png'></img>
            { this.props.spell.name}
          </div>
          <div className={`spell-overview-other ${this.state.enlarge ? '' : 'hide'}`}>
            <div className="cost">
              <img src='/images/exchange.png'></img>
              { this.props.spell.cost}
            </div>
            <div className="time">
              <img src='/images/stopwatch.png'></img>
              { this.props.spell.time}
            </div>
            <div className="duration">
              <img src='/images/time-left.png'></img>
              { this.props.spell.duration}
            </div>
          </div>
        </div>
        <div className={`spell-effect ${this.state.enlarge ? '' : 'hide'}`}>
          { this.props.spell.effect }
        </div>
        <div className={`other ${this.state.enlarge ? '' : 'hide'}`}>
          <div className="spell-restriction">
            <img src='/images/do-not-touch.png'></img>
            { this.props.spell.restriction }
          </div>
          <div className="visible-effects">
            <FontAwesomeIcon icon={faEye} />
            { this.props.spell.visibleEffect }
          </div>
        </div>
      </div>
    );
  }
}
