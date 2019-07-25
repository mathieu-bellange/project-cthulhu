import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import { map } from 'lodash';
import {Howl} from 'howler';

import './place.sss';
import { CardLink, Card } from '../card';
import { Clue } from '../clues';

class PlaceComponent extends React.Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  };

  constructor(props){
     super(props);
     this.state = {
       play: false
     };
     this.goBack = this.goBack.bind(this);
     this.play = this.play.bind(this);
     this.pause = this.pause.bind(this);
  }

  componentDidMount() {
    this.sound = new Howl({
       src: this.props.card.music,
       html5: true,
       autoplay: true,
       loop: true,
       volume: 0.5
     });
  }

  play() {
    this.setState({ play: true });
    this.sound.play();
  }

  pause() {
    this.setState({ play: false });
    this.sound.pause();
  }

  goBack(){
      this.props.history.goBack();
  }

  render() {
    return (
      <div className="place">
        <div className="header">
          <div className="back-nav">
            <FontAwesomeIcon icon={faArrowLeft} size="lg" onClick={this.goBack}/>
          </div>
          <div className="title">
            <h1>{this.props.card.title}</h1>
          </div>
        </div>
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
            { this.props.card.clues.map((clue, index) =>
              <Clue key={index} clue={ clue } />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export const Place = withRouter(PlaceComponent);
