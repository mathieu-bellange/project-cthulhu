import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import './pnj.sss';

import { Card } from '../../card';
import { BaseStats } from './stats';
import { Skills } from './skills';
import { Weapons } from './weapons';
import { Stuffs } from './stuffs';
import { Spells } from './spells';
import { Clue } from '../../clues';

export class PnjComponent extends React.Component {
  static propTypes = {
    pnj: PropTypes.object.isRequired,
    minimize: PropTypes.bool,
    isFullPage: PropTypes.bool
  };

  constructor(props){
     super(props);
     this.state = { maximize: false };
     this.maximize = this.maximize.bind(this);
  }

  maximize() {
    if (!this.props.minimize) return;
    this.setState({ maximize: !this.state.maximize });
  }

  render() {
    return (
      <div className={`pnj ${this.state.maximize ? 'maximize' : ''}`}>
        <div className="content">
          <div className={`overview ${this.props.minimize ? 'minimize' : ''}`} onClick={this.maximize}>
            <div className="card-wrapper">
              <Card
                card={this.props.pnj}
                showTitle={this.props.minimize}
                showDesc={true}
                hideImg={this.props.minimize && !this.state.maximize}
              />
            </div>
          </div>
          <div className={`details ${this.props.isFullPage || this.state.maximize ? '' : 'minimize'}`}>
            { this.props.pnj.id && !this.props.isFullPage  ? <Link to={`/pnj/${ this.props.pnj.id }`}><div className="full-page">Plus d info...</div></Link> : '' }
            { this.props.pnj.stats ? <BaseStats stats={this.props.pnj.stats} /> : ''}
            { this.props.pnj.skills ?<Skills skills={ this.props.pnj.skills }></Skills> : ''}
            { this.props.minimize || !this.props.pnj.weapons ? '' : <Weapons weapons={ this.props.pnj.weapons }></Weapons> }
            { this.props.minimize || !this.props.pnj.stuffs ? '' : <Stuffs stuffs={ this.props.pnj.stuffs }></Stuffs> }
            { this.props.minimize || !this.props.pnj.spells ? '' : <Spells spells={ this.props.pnj.spells }></Spells> }
            <div className="more-desc">
              { this.props.pnj.clues ? this.props.pnj.clues.map((clue, index) =>
                <Clue key={index} clue={ clue } />
              ) : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const Pnj = withRouter(PnjComponent);
