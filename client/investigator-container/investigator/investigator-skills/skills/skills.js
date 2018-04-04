import React from 'react';
import PropTypes from 'prop-types';

import Skill from './skill';
import './skills.sss';

export default class Skills extends React.Component {
  static propTypes = {
    skills: PropTypes.array
  };

  render() {
    return (
      <div className="skills">
        {
          this.props.skills.map((skill, index) =>
            <Skill key={ index } skill={ skill }></Skill>)
        }
      </div>
    );
  }
}
