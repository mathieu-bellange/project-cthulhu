import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './pnj-details.sss';

import { BaseStats } from './stats';
import { Skills } from './skills';
import Weapons from './weapons';
import { Stuffs } from './stuffs';
import { Spells } from './spells';
import { Clues } from '../../clues';

const PnjDetails = ( { id, pnj, minimize, isEnlarged, isClueEnlarged, enlargeClue, shrunkClue } ) => {
  return (
    <div className={`pnj-details ${!minimize || isEnlarged ? '' : 'minimize'}`}>
      { id && minimize  ? <Link to={`/pnj/${ id }`}><div className="full-page">Plus d info...</div></Link> : '' }
      { pnj.stats ? <BaseStats stats={pnj.stats} /> : ''}
      { pnj.skills ?<Skills skills={ pnj.skills }></Skills> : ''}
      { minimize || !pnj.weapons ? '' : <Weapons weapons={ pnj.weapons }></Weapons> }
      { minimize || !pnj.stuffs ? '' : <Stuffs stuffs={ pnj.stuffs }></Stuffs> }
      { minimize || !pnj.spells ? '' : <Spells spells={ pnj.spells }></Spells> }
      { pnj.clues ? <Clues
        clues={pnj.clues}
        isClueEnlarged={isClueEnlarged}
        enlargeClue={enlargeClue}
        shrunkClue={shrunkClue}
      /> : ''}
    </div>
  );
}

PnjDetails.propTypes = {
    id: PropTypes.string.isRequired,
    pnj: PropTypes.object.isRequired,
    minimize: PropTypes.bool,
    isEnlarged: PropTypes.bool,
    isClueEnlarged: PropTypes.func.isRequired,
    enlargeClue: PropTypes.func.isRequired,
    shrunkClue: PropTypes.func.isRequired
  };

export default PnjDetails;
