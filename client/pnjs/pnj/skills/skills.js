import React from 'react';
import PropTypes from 'prop-types';

import './skills.sss';

import Skill from './skill';

const Skills = ({ skills, isSkillEnlarged, enlargeSkill, shrunkSkill }) => {
  return (
    <div className="skills">
      {
        skills.map((skill, index) =>
          <Skill key={ index } skill={ skill } isEnlarged={isSkillEnlarged(index)}
            shrunkSkill={() => shrunkSkill(index)} enlargeSkill={() => enlargeSkill(index)}></Skill>)
      }
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.array,
  isSkillEnlarged: PropTypes.func.isRequired,
  enlargeSkill: PropTypes.func.isRequired,
  shrunkSkill: PropTypes.func.isRequired
};

export default Skills;
