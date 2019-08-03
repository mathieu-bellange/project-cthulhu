import React from 'react';
import PropTypes from 'prop-types';

import './clue.sss';

import ClueCondition from './clue-condition';
import ClueSideEffects from './clue-side-effects';

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
        <ClueCondition condition={this.props.clue.condition} />
        <p>
          { this.props.clue.clue }
        </p>
        {
          this.props.clue.sideEffects && this.state.enlarge ?
            <ClueSideEffects sideEffects={this.props.clue.sideEffects} /> : ''
        }
      </div>
    );
  }
}
