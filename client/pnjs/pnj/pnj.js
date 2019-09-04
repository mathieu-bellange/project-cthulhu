import React from 'react';
import PropTypes from 'prop-types';

import './pnj.sss';

import PnjOverview from './pnj-overview';
import PnjDetails from './pnj-details';

const Pnj = ({ id, pnj, isEnlarged, enlargePnj, shrunkPnj, minimize,
  isClueEnlarged, enlargeClue, shrunkClue, isWeaponEnlarged, enlargeWeapon, shrunkWeapon,
  isStuffEnlarged, enlargeStuff, shrunkStuff, isSpellEnlarged, enlargeSpell, shrunkSpell,
  isSkillEnlarged, enlargeSkill, shrunkSkill, isStatEnlarged, enlargeStat, shrunkStat}) => {

  return (
    <div className={`pnj ${isEnlarged ? 'maximize' : ''}`}>
      <PnjOverview
        card={pnj}
        minimize={minimize}
        isEnlarged={isEnlarged}
        enlargePnj={enlargePnj}
        shrunkPnj={shrunkPnj}
        />
      <PnjDetails
        id={id}
        pnj={pnj}
        minimize={minimize}
        isEnlarged={isEnlarged}
        isClueEnlarged={isClueEnlarged}
        enlargeClue={enlargeClue}
        shrunkClue={shrunkClue}
        isWeaponEnlarged={isWeaponEnlarged}
        enlargeWeapon={enlargeWeapon}
        shrunkWeapon={shrunkWeapon}
        isStuffEnlarged={isStuffEnlarged}
        enlargeStuff={enlargeStuff}
        shrunkStuff={shrunkStuff}
        isSpellEnlarged={isSpellEnlarged}
        enlargeSpell={enlargeSpell}
        shrunkSpell={shrunkSpell}
        isSkillEnlarged={isSkillEnlarged}
        enlargeSkill={enlargeSkill}
        shrunkSkill={shrunkSkill}
        isStatEnlarged={isStatEnlarged}
        enlargeStat={enlargeStat}
        shrunkStat={shrunkStat}
      />
    </div>
  );
};

Pnj.propTypes = {
  id: PropTypes.string.isRequired,
  pnj: PropTypes.object.isRequired,
  minimize: PropTypes.bool,
  isEnlarged: PropTypes.bool,
  enlargePnj: PropTypes.func,
  shrunkPnj: PropTypes.func,
  isClueEnlarged: PropTypes.func.isRequired,
  enlargeClue: PropTypes.func.isRequired,
  shrunkClue: PropTypes.func.isRequired,
  isWeaponEnlarged: PropTypes.func.isRequired,
  enlargeWeapon: PropTypes.func.isRequired,
  shrunkWeapon: PropTypes.func.isRequired,
  isStuffEnlarged: PropTypes.func.isRequired,
  enlargeStuff: PropTypes.func.isRequired,
  shrunkStuff: PropTypes.func.isRequired,
  isSpellEnlarged: PropTypes.func.isRequired,
  enlargeSpell: PropTypes.func.isRequired,
  shrunkSpell: PropTypes.func.isRequired,
  isSkillEnlarged: PropTypes.func.isRequired,
  enlargeSkill: PropTypes.func.isRequired,
  shrunkSkill: PropTypes.func.isRequired,
  isStatEnlarged: PropTypes.func.isRequired,
  enlargeStat: PropTypes.func.isRequired,
  shrunkStat: PropTypes.func.isRequired
};
