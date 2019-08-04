import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  shrunkClue, enlargeClue, isClueEnlarged
} from '../store';
import Clues from './clues';

const mapStateToProps = (state, props) => {
  return {
    isEnlarged: (index) => isClueEnlarged(state, props.id, index)
  };
};

const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({
        enlargeClue: (index) => enlargeClue(props.id, index),
        shrunkClue: (index) => shrunkClue(props.id, index)
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Clues);
