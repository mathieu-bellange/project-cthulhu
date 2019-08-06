import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  selectPnjById, isClueEnlarged, enlargeClue, shrunkClue
} from '../../store';
import { Pnj } from './pnj';

const mapStateToProps = (state, props) => {
  return {
    pnj: selectPnjById(state, props.id),
    isClueEnlarged: (index) => isClueEnlarged(state, props.id, index)
  };
};

const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({
      enlargeClue: (index) => enlargeClue(props.id, index),
      shrunkClue: (index) => shrunkClue(props.id, index)
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pnj);
