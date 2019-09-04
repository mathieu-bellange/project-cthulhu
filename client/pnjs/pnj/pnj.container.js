import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  selectPnjById, isClueEnlarged, enlargeClue, shrunkClue,
  isWeaponEnlarged, enlargeWeapon, shrunkWeapon
} from '../../store';
import { Pnj } from './pnj';

const mapStateToProps = (state, props) => {
  return {
    pnj: selectPnjById(state, props.id),
    isClueEnlarged: (index) => isClueEnlarged(state, props.id, index),
    isWeaponEnlarged: (index) => isWeaponEnlarged(state, props.id, index)
  };
};

const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({
      enlargeClue: (index) => enlargeClue(props.id, index),
      shrunkClue: (index) => shrunkClue(props.id, index),
      enlargeWeapon: (index) => enlargeWeapon(props.id, index),
      shrunkWeapon: (index) => shrunkWeapon(props.id, index)
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pnj);
