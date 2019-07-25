import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './pnj.sss';

import { Card } from '../card';
import { BaseStats } from './stats';
import { Skills } from './skills';
import { Weapons } from './weapons';
import { Stuffs } from './stuffs';
import { Spells } from './spells';
import { Clue } from '../clues';

export class PnjComponent extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    card: PropTypes.object.isRequired
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
      <div className="pnj">
        <div className="header">
          <div className="back-nav">
            <FontAwesomeIcon icon={faArrowLeft} size="lg" onClick={this.goBack}/>
          </div>
          <div className="title">
            <h1>{this.props.card.title}</h1>
          </div>
        </div>
        <div className="content">
          <div className="overview">
            <div className="card-wrapper">
              <Card card={this.props.card} showDesc={true}/>
            </div>
          </div>
          <div className="details">
            <BaseStats stats={this.props.card.stats} />
            <Skills skills={ this.props.card.skills }></Skills>
            <Weapons weapons={ this.props.card.weapons }></Weapons>
            <Stuffs stuffs={ this.props.card.stuffs }></Stuffs>
            <Spells spells={ this.props.card.spells }></Spells>
            <div className="more-desc">
              { this.props.card.clues.map((clue, index) =>
                <Clue key={index} clue={ clue } />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const Pnj = withRouter(PnjComponent);
