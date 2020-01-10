import React from 'react';
import PropTypes from 'prop-types';

const DropFileComponent = ({ handleFile$ }) => {

  const dropHandler = (ev) => {
    console.log('File(s) dropped');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          var file = ev.dataTransfer.items[i].getAsFile();
          handleFile$.next(file);
          console.log('.. file[' + i + '].name = ' + file.name);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var j = 0; j < ev.dataTransfer.files.length; j++) {
        handleFile$.next(ev.dataTransfer.files[j]);
        console.log('... file[' + j + '].name = ' + ev.dataTransfer.files[j].name);
      }
    }
  }
  const dragOverHandler = (ev) => {
    console.log('File(s) in drop zone');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  return (
    <div id="drop_zone" onDrop={dropHandler} onDragOver={dragOverHandler}>
      <p>Drag one or more files to this Drop Zone ...</p>
    </div>
  );
};

DropFileComponent.propTypes = {
  handleFile$: PropTypes.object.isRequired
};

export default DropFileComponent;
