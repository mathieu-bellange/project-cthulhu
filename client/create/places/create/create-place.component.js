import React from 'react';
import PropTypes from 'prop-types';
import { BehaviorSubject } from 'rxjs';

import { DropFileComponent } from '../../drop-file';

import './create-place.component.sss';

export const CreatePlaceComponent = ({ submit }) => {
  const handleFile$ = new BehaviorSubject();
  let formData = { id: '', title: '', description: '' };
  const handleChange = (event) => {
    formData = { ...formData, [event.target.getAttribute('id').slice(6)]: event.target.value };
  };

  const handleSubmit = (event) => {
    if(formData.id) {
      submit(formData, handleFile$.value);
    }
    event.preventDefault();
  }
  return (
    <div className="create-place">
      <form onSubmit={handleSubmit}>
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
        <DropFileComponent handleFile$={handleFile$}/>
        <button type="submit">Sauver</button>
      </form>
    </div>
  );
};

CreatePlaceComponent.propTypes = {
  submit: PropTypes.func,
  hide: PropTypes.bool
};
