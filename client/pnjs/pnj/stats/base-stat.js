import React from 'react';
import PropTypes from 'prop-types';

import './base-stat.sss';

function BaseStatIcon(state) {
  return (
      {
        str: <img src='/images/strength.png'></img>,
        dex: <img src='/images/agility.png'></img>,
        con: <img src='/images/heart.png'></img>,
        edu: <img src='/images/mortarboard.png'></img>,
        int: <img src='/images/innovation.png'></img>,
        tai: <img src='/images/height.png'></img>,
        pou: <img src='/images/will.png'></img>,
        app: <img src='/images/charisma.png'></img>
      }[state]
  );
}

BaseStatIcon.propTypes = {
   state: PropTypes.oneOf(['str', 'dex', 'con', 'edu', 'int', 'tai', 'pou', 'app'])
}

const BaseStat = ({ stat, isEnlarged, enlargeStat, shrunkStat }) => {
  const half = () => {
    if (isNaN(Object.values(stat)[0])) return '-';
    return Math.trunc(Object.values(stat)[0] / 2);
  }

  const fifth = () => {
    if (isNaN(Object.values(stat)[0])) return '-';
    return Math.trunc(Object.values(stat)[0] / 5);
  }
  return (
    <div className="base-stat" onClick={() => isEnlarged ? shrunkStat() : enlargeStat()}>
      { BaseStatIcon(Object.keys(stat)[0]) }
      <div className="roll-info">
        <div className="ordinary">{ Object.values(stat)[0] }</div>
        <div className={`stat-calcul ${isEnlarged ? '': 'hide'}`}>
          <div className="major">{ half() }</div>
          -
          <div className="extreme">{ fifth() }</div>
        </div>
      </div>
    </div>
  );
};

BaseStat.propTypes = {
  stat: PropTypes.object.isRequired,
  isEnlarged: PropTypes.bool,
  enlargeStat: PropTypes.func.isRequired,
  shrunkStat: PropTypes.func.isRequired
};

export default BaseStat;
