import React from 'react';
import PropTypes from 'prop-types';

import './skill.sss';

const Skill = ({ skill, isEnlarged, enlargeSkill, shrunkSkill }) => {

  const half = () => {
    if (isNaN(skill.mastery)) return '-';
    return Math.trunc(skill.mastery / 2);
  }

  const fifth = () => {
    if (isNaN(skill.mastery)) return '-';
    return Math.trunc(skill.mastery / 5);
  }

  return (
    <div className="skill" onClick={() => isEnlarged ? shrunkSkill() : enlargeSkill()}>
      <div className="name">{ skill.name }</div>
      <div className="percent">{ skill.mastery } %</div>
      <div className={`mastery-calcul ${isEnlarged ? '': 'hide'}`}>
        <div className="half">{ half() }</div>
        <div>-</div>
        <div className="fifth">{ fifth() }</div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  skill: PropTypes.object,
  isEnlarged: PropTypes.bool,
  enlargeSkill: PropTypes.func.isRequired,
  shrunkSkill: PropTypes.func.isRequired
};

export default Skill;
