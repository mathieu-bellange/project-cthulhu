import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './pnj.sss';

import { Card } from '../../cards';
import { BaseStats } from './stats';
import { Skills } from './skills';
import { Weapons } from './weapons';
import { Stuffs } from './stuffs';
import { Spells } from './spells';
import { Clues } from '../../clues';

export class Pnj extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    pnj: PropTypes.object.isRequired,
    minimize: PropTypes.bool,
    isFullPage: PropTypes.bool,
    isEnlarged: PropTypes.bool,
    enlargePnj: PropTypes.func,
    shrunkPnj: PropTypes.func
  };

  constructor(props){
     super(props);
     this.maximize = this.maximize.bind(this);
  }

  maximize() {
    if (!this.props.enlargePnj) return;
    if (this.props.isEnlarged)
      this.props.shrunkPnj();
    else
      this.props.enlargePnj();
  }

  render() {
    return (
      <div className={`pnj ${this.props.isEnlarged ? 'maximize' : ''}`}>
        <div className="content">
          <div className={`overview ${this.props.minimize ? 'minimize' : ''}`} onClick={this.maximize}>
            <div className="card-wrapper">
              <Card
                card={this.props.pnj}
                showTitle={this.props.minimize}
                showDesc={true}
                showImg={this.props.isEnlarged}
              />
            </div>
          </div>
          <div className={`details ${this.props.isFullPage || this.props.isEnlarged ? '' : 'minimize'}`}>
            { this.props.pnj.id && !this.props.isFullPage  ? <Link to={`/pnj/${ this.props.pnj.id }`}><div className="full-page">Plus d info...</div></Link> : '' }
            { this.props.pnj.stats ? <BaseStats stats={this.props.pnj.stats} /> : ''}
            { this.props.pnj.skills ?<Skills skills={ this.props.pnj.skills }></Skills> : ''}
            { this.props.minimize || !this.props.pnj.weapons ? '' : <Weapons weapons={ this.props.pnj.weapons }></Weapons> }
            { this.props.minimize || !this.props.pnj.stuffs ? '' : <Stuffs stuffs={ this.props.pnj.stuffs }></Stuffs> }
            { this.props.minimize || !this.props.pnj.spells ? '' : <Spells spells={ this.props.pnj.spells }></Spells> }
            { this.props.pnj.clues ? <Clues id={this.props.id} clues={this.props.pnj.clues} /> : ''}
          </div>
        </div>
      </div>
    );
  }
}
