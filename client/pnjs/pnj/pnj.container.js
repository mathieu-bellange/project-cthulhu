import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  selectPnjById, isClueEnlarged, enlargeClue, shrunkClue,
  isWeaponEnlarged, enlargeWeapon, shrunkWeapon,
  isStuffEnlarged, enlargeStuff, shrunkStuff,
  isSpellEnlarged, enlargeSpell, shrunkSpell,
  isSkillEnlarged, enlargeSkill, shrunkSkill,
  isStatEnlarged, enlargeStat, shrunkStat
} from '../../store';
import Pnj from './pnj';

const mapStateToProps = (state, props) => {
  return {
    pnj: selectPnjById(state, props.id),
    isClueEnlarged: (index) => isClueEnlarged(state, props.id, index),
    isWeaponEnlarged: (index) => isWeaponEnlarged(state, props.id, index),
    isStuffEnlarged: (index) => isStuffEnlarged(state, props.id, index),
    isSpellEnlarged: (index) => isSpellEnlarged(state, props.id, index),
    isSkillEnlarged: (index) => isSkillEnlarged(state, props.id, index),
    isStatEnlarged: (key) => isStatEnlarged(state, props.id, key)
  };
};

const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({
      enlargeClue: (index) => enlargeClue(props.id, index),
      shrunkClue: (index) => shrunkClue(props.id, index),
      enlargeWeapon: (index) => enlargeWeapon(props.id, index),
      shrunkWeapon: (index) => shrunkWeapon(props.id, index),
      enlargeStuff: (index) => enlargeStuff(props.id, index),
      shrunkStuff: (index) => shrunkStuff(props.id, index),
      enlargeSpell: (index) => enlargeSpell(props.id, index),
      shrunkSpell: (index) => shrunkSpell(props.id, index),
      enlargeSkill: (index) => enlargeSkill(props.id, index),
      shrunkSkill: (index) => shrunkSkill(props.id, index),
      enlargeStat: (key) => enlargeStat(props.id, key),
      shrunkStat: (key) => shrunkStat(props.id, key)
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pnj);
