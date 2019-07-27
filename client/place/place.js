import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import { map } from 'lodash';
import {Howl} from 'howler';

import './place.sss';
import { CardLink, Card } from '../card';
import { Clue } from '../clues';
import { Pnjs } from '../pnjs';

class PlaceComponent extends React.Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    sound: PropTypes.object,
    saveSoundRef: PropTypes.func.isRequired
  };

  constructor(props){
     super(props);
     this.state = {
       play: props.sound ? props.sound.playing() : false
     };
     this.play = this.play.bind(this);
     this.pause = this.pause.bind(this);
  }

  componentDidMount() {
    if (!this.props.sound && this.props.card.music) {
      this.sound = new Howl({
        src: this.props.card.music,
        html5: true,
        autoplay: true,
        loop: true,
        volume: 0.5
      });
      this.props.saveSoundRef({ [this.props.match.params.otherId ? this.props.match.params.otherId : this.props.match.params.id]: this.sound});
    }
  }

  play() {
    this.setState({ play: true });
    this.props.sound ? this.props.sound.play() : this.sound.play();
  }

  pause() {
    this.setState({ play: false });
    this.props.sound ? this.props.sound.pause() : this.sound.pause();
  }

  render() {
    return (
      <div className="place">
        <div className="content">
          <div className="overview">
            <div className="card-wrapper">
              <Card card={this.props.card} showDesc={true}/>
            {

              this.props.card.music && this.props.card.music.length > 0 ? <div className="play-pause-wrapper">
                {
                  this.state.play ? <FontAwesomeIcon icon={faPauseCircle} size="7x" onClick={this.pause}/> :
                    <FontAwesomeIcon icon={faPlayCircle} size="7x" onClick={this.play}/>
                }
              </div> : ''
            }
            </div>
            <div className="inside-places">
              {
                map(this.props.card.insidePlace, (place, index) => <CardLink key={ index } cardLink={ place }></CardLink>)
              }
            </div>
          </div>
          <div className="details">
            { this.props.card. pnjs ? <Pnjs pnjs={this.props.card.pnjs} /> : '' }
            <div className="clues">
              { this.props.card.clues.map((clue, index) =>
                <Clue key={index} clue={ clue } />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const Place = withRouter(PlaceComponent);
