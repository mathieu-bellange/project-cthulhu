import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './nav-panel.sss';

const NavPanel = ({ history, title, children }) => {
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="nav-panel">
      <div className="header">
        <div className="back-nav">
          <FontAwesomeIcon icon={faArrowLeft} size="lg" onClick={goBack}/>
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
      </div>
      { children }
    </div>
  );
}

NavPanel.propTypes = {
  history: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

export default withRouter(NavPanel);
