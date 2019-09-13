import React from 'react';
import PropTypes from 'prop-types';

const SharedDoc = ({ sharedDocs }) => {
  return (
    <div className="shared-doc">
      {
        sharedDocs.map((sharedDoc, index) => <div key={index}>{sharedDoc.path}</div>)
      }
    </div>
  );
};

SharedDoc.propTypes = {
  sharedDocs: PropTypes.array.isRequired
};

export default SharedDoc;
