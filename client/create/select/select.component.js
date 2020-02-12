import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

import './select.component.sss';

export const SelectComponent = ({ options, selectedOption, selectOption, openOptions, displayOptions }) => {

  return (
      <div className="select">
        <div className="selected-option" onClick={openOptions}>
          <div className="title">
            <span>{ selectedOption ? selectedOption.title : 'Choisir une option' }</span>
            <FontAwesomeIcon icon={ displayOptions ? faAngleUp : faAngleDown} size="lg"/>
          </div>
        </div>
        <ul className={`${displayOptions ? '' : 'hide'}`}>
          {
            options.map((option, index) => <li key={index} onClick={() => selectOption(option)}>{ option.title }</li>)
          }
        </ul>
      </div>
  );
};

SelectComponent.propTypes = {
  options: PropTypes.array,
  selectedOption: PropTypes.object,
  selectOption: PropTypes.func,
  openOptions: PropTypes.func,
  displayOptions: PropTypes.bool
};
