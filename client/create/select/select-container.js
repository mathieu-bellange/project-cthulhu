import React from 'react';
import PropTypes from 'prop-types';
import { SelectComponent } from './select.component';

export default class SelectContainer extends React.Component {
  static propTypes = {
    options: PropTypes.array,
    onSelectOption: PropTypes.func
  };

  constructor(props){
    super(props);
    this.state = {
      selectedOption: null,
      displayOptions: false
    }
    this.selectOption = this.selectOption.bind(this);
    this.openOptions = this.openOptions.bind(this);
  }

  selectOption(selectedOption) {
    this.setState({ selectedOption, displayOptions: false });
    this.props.onSelectOption(selectedOption);
  }

  openOptions() {
    this.setState({ displayOptions: !this.state.displayOptions });
  }


  render() {
    return(
      <SelectComponent
        {...this.props}
        selectedOption={this.state.selectedOption}
        selectOption={this.selectOption}
        openOptions={this.openOptions}
        displayOptions={this.state.displayOptions}
      />
    );
  }
}
