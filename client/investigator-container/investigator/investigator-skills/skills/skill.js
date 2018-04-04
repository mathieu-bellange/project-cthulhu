import React from 'react';
import PropTypes from 'prop-types';

import './skill.sss';

export default class Skill extends React.Component {
  static propTypes = {
    skill: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.half = this.half.bind(this);
    this.fifth = this.fifth.bind(this);
  }

  half() {
    return Math.trunc(this.props.skill.mastery / 2);
  }

  fifth() {
    return Math.trunc(this.props.skill.mastery / 5);
  }

  render() {
    return (
      <div className="skill">
        <div className="name">{ this.props.skill.name }</div>
        <div className="percent">{ this.props.skill.mastery } %</div>
        <div className="half">{ this.half() }</div>
        <div className="fifth">{ this.fifth() }</div>
      </div>
    );
  }
}
