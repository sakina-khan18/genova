import React, { useState } from 'react';

const CoverLetterGenerator = () => {
    const [resumeData, setResumeData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        jobTitle: '',
        skills: '',
        experience: '',
        education: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResumeData({
            ...resumeData,
            [name]: value,
        });
    };

    const generateCoverLetter = () => {
        return `
            Dear Hiring Manager,

            I am writing to express my interest in the ${resumeData.jobTitle} position. 
            With my background in ${resumeData.skills} and experience in ${resumeData.experience}, 
            I believe I would be a great fit for your team.

            Thank you for considering my application. I look forward to the opportunity to discuss my qualifications further.

            Sincerely,
            ${resumeData.name}
            ${resumeData.address}
            ${resumeData.email}
            ${resumeData.phone}
        `;
    };

    return (
        <div>
            <h2>Cover Letter Generator</h2>
            <form>
                <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
                <input type="text" name="address" placeholder="Your Address" onChange={handleChange} />
                <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
                <input type="tel" name="phone" placeholder="Your Phone" onChange={handleChange} />
                <input type="text" name="jobTitle" placeholder="Job Title" onChange={handleChange} />
                <textarea name="skills" placeholder="Your Skills" onChange={handleChange}></textarea>
                <textarea name="experience" placeholder="Your Experience" onChange={handleChange}></textarea>
                <textarea name="education" placeholder="Your Education" onChange={handleChange}></textarea>
            </form>
            <h3>Generated Cover Letter:</h3>
            <pre>{generateCoverLetter()}</pre>
        </div>
    );
};

export default CoverLetterGenerator;