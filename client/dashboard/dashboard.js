import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import './dashboard.sss';

import { CardLink } from '../card';

export class Dashboard extends React.Component {
  static propTypes = {
    cards: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      smallScreen: !document.fullscreenElement
    }
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        this.setState({ smallScreen: false });
      } else {
        this.setState({ smallScreen: true });
      }
    });
  }

  render() {
    return (
      <div className="dashboard">
        <div className="full-screen" onClick={() => document.body.requestFullscreen()}>
          {
            this.state.smallScreen ? <img src="/images/pixel-full-screen.png" /> : ''
          }
        </div>
        {
          map(this.props.cards, (cardLink, index) =>
            <CardLink key={ index } cardLink={ cardLink } showDesc={true}></CardLink>)
        }
      </div>
    );
  }
}
