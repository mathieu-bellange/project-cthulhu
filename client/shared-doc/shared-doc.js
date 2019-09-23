import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons'

import { Card } from '../cards';
import './shared-doc.sss';

const SharedDoc = ({ sharedDocs, scenarioId, hide, sharedHelpDoc, unSharedHelpDoc, isSharedDocActive }) => {
  return (
    <div className="shared-doc">
      <div className="shared-doc-close" onClick={hide}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </div>
      <div className="card-doc-container">
      {
        sharedDocs.map((sharedDoc, index) =>
          <div key={index} className="card-doc">
            { sharedDoc.toShare ? <div className="card-doc-checkbox"
              onClick={() => isSharedDocActive(index) ? unSharedHelpDoc({ scenarioId, sharedDoc }) : sharedHelpDoc({ scenarioId, sharedDoc })}>
              <FontAwesomeIcon icon={isSharedDocActive(index) ? faCheckSquare : faSquare} size="lg" />
            </div> : ''}
            <Card showImg={true} showTitle={true} limitImgHeight={true} card={sharedDoc}/>
          </div>)
      }
      </div>
    </div>
  );
};

SharedDoc.propTypes = {
  sharedDocs: PropTypes.array.isRequired,
  scenarioId: PropTypes.string.isRequired,
  hide: PropTypes.func.isRequired,
  sharedHelpDoc: PropTypes.func.isRequired,
  unSharedHelpDoc: PropTypes.func.isRequired,
  isSharedDocActive: PropTypes.func.isRequired
};

export default SharedDoc;
