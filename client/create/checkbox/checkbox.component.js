import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons'

import './checkbox.component.sss';

export const CheckComponent = ({ id, onCheck, checked }) => {

  return (
    <FontAwesomeIcon className="check" id={id} onClick={ onCheck } icon={checked ? faCheckSquare : faSquare } size="lg"/>
  );
};

CheckComponent.propTypes = {
  onCheck: PropTypes.func,
  checked: PropTypes.bool
};
