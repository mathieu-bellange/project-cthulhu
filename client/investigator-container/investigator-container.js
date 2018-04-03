import React from 'react';

import Investigator from './investigator';
import './investigator-container.sss';

export default class InvestigatorContainer extends React.Component {
  render() {
    return (
      <div className="investigator-container">
        <Investigator displayStats={ true }></Investigator>
        <Investigator displayStuff={ true }></Investigator>
        <Investigator displaySkills={ true }></Investigator>
        <Investigator displayStats={ true }></Investigator>
        <Investigator displayStats={ true }></Investigator>
      </div>
    );
  }
}
