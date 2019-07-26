import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";

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
    card: PropTypes.object.isRequired
  };

  constructor(props){
     super(props);
  }

  render() {
    return (
      <div className="pnj">
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
