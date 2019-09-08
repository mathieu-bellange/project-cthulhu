import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import './menu.sss';

const Menu = ({ isDisplaying, hide, display, scenarioId}) => {
  return (
    <div className="menu-container">
      <div className={`menu${ isDisplaying ? '' : ' hide'}`}>
      <Link to={{
          pathname: `/${scenarioId}`
        }} className="menu-link">Retour au scénario</Link>
        <div className="menu-close" onClick={hide}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </div>
      </div>
      <div className={`menu-icon${isDisplaying ? ' hide' : ''}`} onClick={display}>
        <FontAwesomeIcon icon={faBars} size="lg"/>
      </div>
    </div>
  );
}

Menu.propTypes = {
  scenarioId: PropTypes.string,
  isDisplaying: PropTypes.bool,
  hide: PropTypes.func.isRequired,
  display: PropTypes.func.isRequired
};

export default Menu;
