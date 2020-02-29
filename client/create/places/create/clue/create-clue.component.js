import React from 'react';
import PropTypes from 'prop-types';
import { CLUE_TYPES } from '../../../../clues';
import { SelectComponent } from '../../../select';

import './create-clue.component.sss';

export const CreateClueComponent = ({ submit }) => {
  let formData = { title: '', type: '', clue: '', sideEffects: '' };
  const handleChange = (event) => {
    formData = { ...formData, [event.target.getAttribute('id').slice(5)]: event.target.value };
  };
  const onSelectType = (option) => {
    formData = { ...formData, type: option.icon };
  };

  const handleSubmit = (event) => {
    submit(formData);
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <input id="clue-title" type="text" onChange={handleChange}/>
        <label>Titre de la condidtion</label>
      </div>
      <div className="form-control">
        <input id="clue-clue" type="text" onChange={handleChange}/>
        <label>Indice</label>
      </div>
      <div className="form-control">
        <SelectComponent options={ CLUE_TYPES.map(type => ({ title: type, icon: type })) } onSelectOption={onSelectType}/>
        <label>Type de l indice</label>
      </div>
      <div className="form-control">
        <textarea id="clue-sideEffects" onChange={handleChange}/>
        <label>Effets supplémentaires</label>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

CreateClueComponent.propTypes = {
  submit: PropTypes.func
};
