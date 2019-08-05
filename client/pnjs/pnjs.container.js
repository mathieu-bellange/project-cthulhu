import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  shrunkPnj, enlargePnj, isPnjEnlarged
} from '../store';
import Pnjs from './pnjs';

const mapStateToProps = (state, props) => {
  return {
    isEnlarged: (index) => isPnjEnlarged(state, props.id, index)
  };
};

const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({
        enlargePnj: (index) => enlargePnj(props.id, index),
        shrunkPnj: (index) => shrunkPnj(props.id, index)
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pnjs);
