import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  selectPnjById
} from '../../store';
import { Pnj } from './pnj';

const mapStateToProps = (state, props) => {
  return {
    pnj: selectPnjById(state, props.id)
  };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pnj);
