import React from 'react';
import PropTypes from 'prop-types';
import { CheckComponent } from './checkbox.component';

export default class CheckContainer extends React.Component {
  static propTypes = {
    onCheck: PropTypes.func,
    id: PropTypes.string
  };

  constructor(props){
    super(props);
    this.state = {
      checked: false
    }
    this.doCheck = this.doCheck.bind(this);
  }

  doCheck() {
    this.setState({ checked: !this.state.checked });
    this.props.onCheck(!this.state.checked);
  }

  render() {
    return(
      <CheckComponent id={this.props.id} onCheck={this.doCheck} checked={this.state.checked} />
    );
  }
}
