import React from 'react';
import PropTypes from 'prop-types';
import { BehaviorSubject } from 'rxjs';

import { DropFileComponent } from '../drop-file';
import { Card } from '../../cards';

import './scenario.component.sss';
import './scenario.form.sss';

export const ScenarioComponent = ({ scenario, submit }) => {
  const handleFile$ = new BehaviorSubject();
  let formData = { id: '', title: '', description: '' };
  const handleChange = (event) => {
    formData = { ...formData, [event.target.getAttribute('id')]: event.target.value };
  };

  const handleSubmit = (event) => {
    if(formData.id) {
      submit(formData, handleFile$.value);
    }
    event.preventDefault();
  }
  return (
    <div className="scenario-modification">
      <div className="scenario-overview">
        {
          scenario ? <Card showTitle={true} showImg={true}
            showDesc={true} card={ scenario } limitImgHeight={true}></Card>
        :
          <form onSubmit={handleSubmit}>
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
        }
      </div>
      <div className="places-pnjs-overview">
      </div>
    </div>
  );
};

ScenarioComponent.propTypes = {
  scenario: PropTypes.object,
  submit: PropTypes.func
};
