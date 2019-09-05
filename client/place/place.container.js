import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Howl} from 'howler';

import {
  shrunkClue, enlargeClue, isClueEnlarged,
  pauseSound, playSound, isSoundPlaying,
  addSound, selectSoundHowlRef, selectPlaceById,
  isPnjEnlarged, enlargePnj, shrunkPnj
} from '../store';
import Place from './place';

class PlaceContainer extends React.Component {
  static propTypes = {
    place: PropTypes.object.isRequired,
    sound: PropTypes.object,
    addSound: PropTypes.func.isRequired,
    playSound: PropTypes.func.isRequired,
    pauseSound: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play() {
    this.props.sound.play();
    this.props.playSound();
  }

  pause() {
    this.props.sound.pause();
    this.props.pauseSound();
  }

  componentDidMount() {
    if (this.props.place.music && !this.props.sound) {
      const sound = new Howl({
        src: this.props.place.music,
        html5: true,
        loop: true,
        volume: 0.5
      });
      this.props.addSound(sound);
    }
  }

  render() {
    return (
      <Place {...this.props} play={this.play} pause={this.pause} />
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    isClueEnlarged: (index) => isClueEnlarged(state, props.id, index),
    isPnjEnlarged: (index) => isPnjEnlarged(state, props.id, index),
    sound: selectSoundHowlRef(state, props.id),
    place: selectPlaceById(state, props.scenarioId, props.id),
    isPlaying: isSoundPlaying(state, props.id)
  };
};

const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({
      enlargeClue: (index) => enlargeClue(props.id, index),
      shrunkClue: (index) => shrunkClue(props.id, index),
      enlargePnj: (index) => enlargePnj(props.id, index),
      shrunkPnj: (index) => shrunkPnj(props.id, index),
      addSound: (sound) => addSound({ id: props.id, howlRef: sound }),
      pauseSound: () => pauseSound(props.id),
      playSound: () => playSound(props.id)
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlaceContainer);
