import React from 'react';
import PropTypes from 'prop-types';

export default class MvtStat extends React.Component {
  static propTypes = {
    stats: PropTypes.object,
    age: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.calcul = this.calcul.bind(this);
  }

  calcul() {
    const { str, dex, tai } = this.props.stats;
    let mvt;
    if (str < tai && dex < tai) {
      mvt = 7;
    } else if (str > tai && dex > tai) {
      mvt = 9;
    } else if (str >= tai || dex >= tai || (str === tai && dex === tai)) {
      mvt = 8;
    }
    if (this.props.age >= 40 && this.props.age < 50) {
      mvt -= 1;
    } else if (this.props.age >= 50 && this.props.age < 60) {
      mvt -= 2;
    } else if (this.props.age >= 60 && this.props.age < 70) {
      mvt -= 3;
    } else if (this.props.age >= 70 && this.props.age < 80) {
      mvt -= 4;
    } else if (this.props.age >= 80 && this.props.age < 90) {
      mvt -= 5;
    }
    return mvt;
  }

  render() {
    return (
      <div className="base-stat">
        <span>MVT</span>
        <div className="roll-info">
          <div className="ordinary">{ this.calcul() }</div>
          <div className="other">
            <div className="major">+1</div>
            <div className="extreme">-1</div>
          </div>
        </div>
      </div>
    );
  }
}
