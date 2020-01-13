import React from 'react';
import { BehaviorSubject } from 'rxjs';
import { withLatestFrom, filter, switchMap } from 'rxjs/operators';

import { ScenarioService } from '../services';
import { DropFileComponent } from '../drop-file';

import './scenario.component.sss';
import './scenario.form.sss';

export const ScenarioComponent = () => {
  const service = new ScenarioService();
  const handleFile$ = new BehaviorSubject();
  let scenario = { id: '', title: '', description: '' };
  const handleChange = (event) => {
    scenario = { ...scenario, [event.target.getAttribute('id')]: event.target.value };
  };

  const handleSubmit = (event) => {
    if(scenario.id) {
      service.onSubmit(scenario, handleFile$.value).pipe(
        withLatestFrom(handleFile$),
        filter(([scenario, file ]) => !!file),
        switchMap(([scenario, file ]) => service.postImg(scenario.id, file)),
      ).subscribe();
    }
    event.preventDefault();
  }
  return (
    <div className="scenario-modification">
      <div className="scenario-overview">
        <form onSubmit={handleSubmit} className="mui-form">
          <div className="form-control">
            <input id="id" type="text" onChange={handleChange}/>
            <label>Scénario id</label>
          </div>
          <div className="form-control">
            <input id="title" type="text" onChange={handleChange}/>
            <label>Titre</label>
          </div>
          <div className="form-control">
            <textarea id="description" onChange={handleChange}/>
            <label>Description</label>
          </div>
          <DropFileComponent handleFile$={handleFile$}/>
          <button type="submit">Sauver</button>
        </form>
      </div>
      <div className="places-pnjs-overview">
      </div>
    </div>
  );
};
