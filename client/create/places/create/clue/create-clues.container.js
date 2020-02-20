import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { map } from 'lodash';

import { CreateClueComponent } from './create-clue.component';
import { Clue } from '../../../../clues'

export default class CreateCluesContainer extends React.Component {
  static propTypes = {
    submit: PropTypes.func
  };

  constructor(props){
    super(props);
    this.state = {
      addClue: false,
      clues: []
    }
    this.handleClue = this.handleClue.bind(this);
    this.addClue = this.addClue.bind(this);
  }

  handleClue(formClue) {
    const clue = { condition: {
        title: formClue.title,
        type: formClue.type
      }, clue: formClue.clue, sideEffects: formClue.sideEffects
    };
    this.props.submit(clue);
    this.setState({ addClue: false, clues: [...this.state.clues, clue] });
  }

  addClue() {
    this.setState({ addClue: true });
  }


  render() {
    return(
      <div className="clues-modification">
        {
          this.state.addClue ?
          <CreateClueComponent submit={this.handleClue} /> :
          <div>
            <div className="add-clue" onClick={ this.addClue }>
              <FontAwesomeIcon icon={faPlusSquare} size="lg" />
            </div>
            {
              map(this.state.clues, (clue, index) => (
                <Clue key={index} clue={ clue }></Clue>
              ))
            }
          </div>
        }
      </div>
    );
  }
}
