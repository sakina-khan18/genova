import React from 'react';

const ResumePreview = ({ resumeData }) => {
    return (
        <div className="resume-preview">
            <h1>{resumeData.name}</h1>
            <p>{resumeData.contact}</p>
            <h2>Experience</h2>
            <ul>
                {resumeData.experience.map((job, index) => (
                    <li key={index}>
                        <h3>{job.title} at {job.company}</h3>
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
            <h2>Education</h2>
            <ul>
                {resumeData.education.map((edu, index) => (
                    <li key={index}>
                        <h3>{edu.degree} from {edu.institution}</h3>
                        <p>{edu.year}</p>
                    </li>
                ))}
            </ul>
            <h2>Skills</h2>
            <ul>
                {resumeData.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResumePreview;