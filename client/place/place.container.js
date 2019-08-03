import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Howl} from 'howler';

import {
  pauseSound, playSound, isSoundPlaying,
  addSound, getSoundHowlRef, getPlaceById
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
    sound: getSoundHowlRef(state, props.id),
    place: getPlaceById(state, props.id),
    isPlaying: isSoundPlaying(state, props.id)
  };
};

const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({
      addSound: (sound) => addSound({ id: props.id, howlRef: sound }),
      pauseSound: () => pauseSound(props.id),
      playSound: () => playSound(props.id)
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlaceContainer);
