import React from 'react';
import { BehaviorSubject } from 'rxjs';
import { withLatestFrom, filter, switchMap } from 'rxjs/operators';

import { ScenarioService } from '../services';
import { DropFileComponent } from '../drop-file';

import './scenario.component.sss';

export const ScenarioComponent = () => {
  const service = new ScenarioService();
  const handleFile$ = new BehaviorSubject();
  let scenario = { id: '', title: '', description: '' };
  const handleChange = (event) => {
    scenario = { ...scenario, [event.target.getAttribute('id')]: event.target.value };
  };

  const handleSubmit = (event) => {
    service.onSubmit(scenario, handleFile$.value).pipe(
      withLatestFrom(handleFile$),
      filter(([scenario, file ]) => !!file),
      switchMap(([scenario, file ]) => service.postImg(scenario.id, file)),
    ).subscribe();
    event.preventDefault();
  }
  return (
    <div className="dashboard">
      <form onSubmit={handleSubmit}>
        <input id="id" type="text" onChange={handleChange}/>
        <input id="title" type="text" onChange={handleChange}/>
        <textarea id="description" onChange={handleChange}/>
        <DropFileComponent handleFile$={handleFile$}/>
        <input type="submit" value="Sauver"/>
      </form>
    </div>
  );
};
