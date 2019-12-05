import React from 'react';
import PropTypes from 'prop-types';
import { Subject } from 'rxjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './shared-doc.sss';

export const closeSharedDoc = new Subject();

const SharedDoc = ({ sharedDoc }) => {
  return (
    <div className="shared-doc">
      <div className="shared-doc-close" onClick={() => closeSharedDoc.next()}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </div>
      <img src={`/images/${sharedDoc.overview}`}/>
    </div>
  );
}

SharedDoc.propTypes = {
  sharedDoc: PropTypes.object.isRequired
}

export {SharedDoc};
