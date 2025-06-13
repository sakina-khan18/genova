import React from 'react';

const JobDescription = ({ jobDescription }) => {
    return (
        <div className="job-description">
            <h2>Job Description Insights</h2>
            <p>{jobDescription}</p>
            {/* Additional analysis and insights can be added here */}
        </div>
    );
};

export default JobDescription;