import React from 'react';

const CoverLetterPreview = ({ coverLetter }) => {
    return (
        <div className="cover-letter-preview">
            <h2>Cover Letter Preview</h2>
            <p>{coverLetter}</p>
        </div>
    );
};

export default CoverLetterPreview;