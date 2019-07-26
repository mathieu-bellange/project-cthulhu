import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './nav-panel.sss';

class NavPanelComponent extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
  };

  constructor(props){
     super(props);
     this.goBack = this.goBack.bind(this);
  }

  goBack(){
      this.props.history.goBack();
  }

  render() {
    return (
      <div className="nav-panel">
        <div className="header">
          <div className="back-nav">
            <FontAwesomeIcon icon={faArrowLeft} size="lg" onClick={this.goBack}/>
          </div>
          <div className="title">
            <h1>{this.props.title}</h1>
          </div>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export const NavPanel = withRouter(NavPanelComponent);
