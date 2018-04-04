import React from 'react';
import PropTypes from 'prop-types';

import './skill.sss';

export default class Skill extends React.Component {
  static propTypes = {
    skill: PropTypes.object
  };

  render() {
    return (
      <div className="skill">
        <div className="name">Nom compétence</div>
        <div className="percent">25 %</div>
        <div className="half">12</div>
        <div className="fifth">5</div>
      </div>
    );
  }
}
