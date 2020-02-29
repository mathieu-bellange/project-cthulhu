import React from 'react';
import PropTypes from 'prop-types';
import { BehaviorSubject } from 'rxjs';

import { DropFileComponent } from '../../drop-file';
import { CheckComponent } from '../../checkbox';
import { CreateCluesComponent } from './clue';

import './create-place.component.sss';

export const CreatePlaceComponent = ({ submit }) => {
  const handleFile$ = new BehaviorSubject();
  let formData = { id: '', title: '', description: '', clues:[] };
  const handleChange = (event) => {
    formData = { ...formData, [event.target.getAttribute('id').slice(6)]: event.target.value };
  };
  const handleCheckBox = (event, value) => {
    formData = { ...formData, [event.target.getAttribute('id').slice(6)]: value };
  }
  const handleClue = (newClue) => {
    formData.clues.push(newClue);
  }

  const handleSubmit = (event) => {
    if(formData.id) {
      submit(formData, handleFile$.value);
    }
    event.preventDefault();
  }
  return (
    <div className="create-place">
      <form className="form-place" onSubmit={handleSubmit}>
        <div className="form-control">
          <input id="place-id" type="text" onChange={handleChange}/>
          <label>Id du Lieu</label>
        </div>
        <div className="form-control">
          <input id="place-title" type="text" onChange={handleChange}/>
          <label>Titre</label>
        </div>
        <div className="form-control">
          <textarea id="place-description" onChange={handleChange}/>
          <label>Description</label>
        </div>
        <div className="form-control">
          <CheckComponent id="place-dashboard" onCheck={(value) => handleCheckBox(event, value)} />
          <label>Afficher sur le dashboard</label>
        </div>
        <DropFileComponent handleFile$={handleFile$}/>
        <button type="submit">Sauver</button>
      </form>
      <div className="create-place-info">
        <CreateCluesComponent submit={handleClue} />
      </div>
    </div>
  );
};

CreatePlaceComponent.propTypes = {
  submit: PropTypes.func,
  hide: PropTypes.bool
};
