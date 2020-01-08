import React from 'react';

import { ScenarioService } from '../services';
import './scenario.component.sss';

export const ScenarioComponent = () => {
  const service = new ScenarioService();
  let scenario = { };
  const handleChange = (event) => {
    scenario = { ...scenario, [event.target.getAttribute('id')]: event.target.value };
  };

  const handleSubmit = (event) => {
    console.log(scenario);
    service.onSubmit(scenario).subscribe();
    event.preventDefault();
  }
  return (
    <div className="dashboard">
      <form onSubmit={handleSubmit}>
        <input id="id" type="text" onChange={handleChange}/>
        <input id="title" type="text" onChange={handleChange}/>
        <textarea id="description" onChange={handleChange}/>
        <input type="submit" value="Sauver"/>
      </form>
    </div>
  );
};
