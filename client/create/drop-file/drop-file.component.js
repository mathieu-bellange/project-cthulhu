import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

import './drop-file.component.sss';

export default class DropFileComponent extends React.Component {
  static propTypes = {
    handleFile$: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      fileName: null
    }
    this.dropHandler = this.dropHandler.bind(this);
    this.dragOverHandler = this.dragOverHandler.bind(this);
  }

  dropHandler(ev) {
    console.log('File(s) dropped');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          var file = ev.dataTransfer.items[i].getAsFile();
          this.props.handleFile$.next(file);
          this.setState({ fileName : file.name });
          console.log('.. file[' + i + '].name = ' + file.name);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var j = 0; j < ev.dataTransfer.files.length; j++) {
        this.props.handleFile$.next(ev.dataTransfer.files[j]);
        this.setState({ fileName : ev.dataTransfer.files[j].name });
        console.log('... file[' + j + '].name = ' + ev.dataTransfer.files[j].name);
      }
    }
  }

  dragOverHandler(ev) {
    console.log('File(s) in drop zone');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  render() {
    return (
      <div id="drop_zone" onDrop={this.dropHandler} onDragOver={this.dragOverHandler}>
        <FontAwesomeIcon icon={faCloudUploadAlt} size="lg" /><label>{ this.state.fileName ? this.state.fileName : 'Ajouter une photo' }</label>
      </div>
    )
  }
}
