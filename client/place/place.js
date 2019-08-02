import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import { map } from 'lodash';
import {Howl} from 'howler';

import './place.sss';
import { CardLink, Card } from '../cards';
import { Clue } from '../clues';
import { Pnjs } from '../pnjs';

class Place extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    place: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    sound: PropTypes.object,
    addSound: PropTypes.func.isRequired,
    playSound: PropTypes.func.isRequired,
    pauseSound: PropTypes.func.isRequired,
    isSoundPlaying: PropTypes.bool
  };

  constructor(props) {
     super(props);
     this.play = this.play.bind(this);
     this.pause = this.pause.bind(this);
  }

  componentDidMount() {
    if (!this.props.sound && this.props.place.music) {
      this.sound = new Howl({
        src: this.props.place.music,
        html5: true,
        autoplay: true,
        loop: true,
        volume: 0.5
      });
      this.props.addSound(
        { id: this.props.id, howlRef: this.sound }
      );
    }
  }

  play() {
    this.props.playSound();
    this.props.sound ? this.props.sound.play() : this.sound.play();
  }

  pause() {
    this.props.pauseSound();
    this.props.sound ? this.props.sound.pause() : this.sound.pause();
  }

  render() {
    const { place, isSoundPlaying } = this.props;
    return (
      <div className="place">
        <div className="content">
          <div className="overview">
            <div className="card-wrapper">
              <Card card={place} showDesc={true} showImg={true}/>
            {

              this.props.place.music && this.props.place.music.length > 0 ? <div className="play-pause-wrapper">
                {
                  isSoundPlaying ? <FontAwesomeIcon icon={faPauseCircle} size="7x" onClick={this.pause}/> :
                    <FontAwesomeIcon icon={faPlayCircle} size="7x" onClick={this.play}/>
                }
              </div> : ''
            }
            </div>
            <div className="inside-places">
              {
                map(place.insidePlace, (place, index) => <CardLink key={ index } cardLink={ place }></CardLink>)
              }
            </div>
          </div>
          <div className="details">
            { place.pnjs ? <Pnjs pnjs={place.pnjs} /> : '' }
            <div className="clues">
              { place.clues ? place.clues.map((clue, index) =>
                <Clue key={index} clue={ clue } />
              ) : '' }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Place);
