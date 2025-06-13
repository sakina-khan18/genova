import React from 'react';

const ResumeTemplate = ({ resumeData }) => {
    return (
        <div className="resume-template">
            <header>
                <h1>{resumeData.name}</h1>
                <p>{resumeData.contact}</p>
            </header>
            <section className="summary">
                <h2>Summary</h2>
                <p>{resumeData.summary}</p>
            </section>
            <section className="experience">
                <h2>Experience</h2>
                {resumeData.experience.map((job, index) => (
                    <div key={index} className="job">
                        <h3>{job.title} at {job.company}</h3>
                        <p>{job.dates}</p>
                        <p>{job.description}</p>
                    </div>
                ))}
            </section>
            <section className="education">
                <h2>Education</h2>
                {resumeData.education.map((edu, index) => (
                    <div key={index} className="education-item">
                        <h3>{edu.degree} in {edu.field}</h3>
                        <p>{edu.institution} - {edu.year}</p>
                    </div>
                ))}
            </section>
            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    {resumeData.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default ResumeTemplate;