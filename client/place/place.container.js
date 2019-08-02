import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  pauseSound, playSound, isSoundPlaying,
  addSound, getSoundHowlRef, getPlaceById
} from '../store';
import Place from './place';

const mapStateToProps = (state, props) => {
  return {
    sound: getSoundHowlRef(state, props.id),
    place: getPlaceById(state, props.id),
    isSoundPlaying: isSoundPlaying(state, props.id)
  };
};

const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({
      addSound,
      pauseSound: () => pauseSound(props.id),
      playSound: () => playSound(props.id)
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Place);
