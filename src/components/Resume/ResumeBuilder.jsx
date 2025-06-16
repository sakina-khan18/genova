import React, { useState } from 'react';
import { User, Briefcase, GraduationCap, Award, Phone, Mail, MapPin, Plus, Trash2, Download, Sparkles, ArrowRight, Code, Users } from 'lucide-react';

export default function ResumeGenerator() {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
      title: ''
    },
    positionOfResponsibility: '',
    positionsOfResponsibility: [{ title: '', organization: '', duration: '', description: '' }],
    projects: [{ name: '', technologies: '', duration: '', description: '', link: '' }],
    experience: [{ company: '', position: '', duration: '', description: '' }],
    education: [{ institution: '', degree: '', year: '', gpa: '' }],
    skills: [''],
    achievements: ['']
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);

  const updatePersonalInfo = (field, value) => {
    setFormData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const updateArray = (section, index, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => 
        i === index ? (typeof item === 'string' ? value : { ...item, [field]: value }) : item
      )
    }));
  };

  const addArrayItem = (section, template = '') => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], typeof template === 'string' ? template : { ...template }]
    }));
  };

  const removeArrayItem = (section, index) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const generateResume = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setCurrentStep(7);
    }, 3000);
  };

  const steps = [
    { id: 1, title: 'Personal Info', icon: User },
    { id: 2, title: 'Experience', icon: Briefcase },
    { id: 3, title: 'Education', icon: GraduationCap },
    { id: 4, title: 'Projects', icon: Code },
    { id: 5, title: 'Leadership', icon: Users },
    { id: 6, title: 'Skills & Achievements', icon: Award },
    { id: 7, title: 'Preview', icon: Download }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500 rounded-full opacity-10 animate-ping delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI Resume Generator
            </h1>
          </div>
          <div className="text-sm text-gray-400">
            Step {currentStep} of {steps.length}
          </div>
        </header>

        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div className="w-80 bg-gray-900/50 backdrop-blur-sm border-r border-gray-800 p-6">
            <div className="space-y-4">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                      currentStep === step.id
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg transform scale-105'
                        : currentStep > step.id
                        ? 'bg-green-600/20 text-green-400'
                        : 'bg-gray-800/50 hover:bg-gray-700/50'
                    }`}
                    onClick={() => currentStep > step.id && setCurrentStep(step.id)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{step.title}</span>
                    {currentStep > step.id && (
                      <div className="w-2 h-2 bg-green-400 rounded-full ml-auto animate-pulse"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Position of Responsibility Input */}
            <div className="mt-8 p-4 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl border border-orange-500/30">
              <label className="block text-sm font-medium text-orange-300 mb-2">
                Target Position
              </label>
              <input
                type="text"
                value={formData.positionOfResponsibility}
                onChange={(e) => setFormData(prev => ({ ...prev, positionOfResponsibility: e.target.value }))}
                placeholder="e.g., Senior Software Engineer"
                className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
              <p className="text-xs text-gray-400 mt-2">
                AI will tailor your resume for this position
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
              {/* Step 1: Personal Info */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Personal Information</h2>
                    <p className="text-gray-400">Let's start with your basic details</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm font-medium text-gray-300">
                        <User className="w-4 h-4" />
                        <span>Full Name</span>
                      </label>
                      <input
                        type="text"
                        value={formData.personalInfo.name}
                        onChange={(e) => updatePersonalInfo('name', e.target.value)}
                        className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm font-medium text-gray-300">
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </label>
                      <input
                        type="email"
                        value={formData.personalInfo.email}
                        onChange={(e) => updatePersonalInfo('email', e.target.value)}
                        className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm font-medium text-gray-300">
                        <Phone className="w-4 h-4" />
                        <span>Phone</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.personalInfo.phone}
                        onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                        className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm font-medium text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span>Location</span>
                      </label>
                      <input
                        type="text"
                        value={formData.personalInfo.location}
                        onChange={(e) => updatePersonalInfo('location', e.target.value)}
                        className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        placeholder="New York, NY"
                      />
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <label className="flex items-center space-x-2 text-sm font-medium text-gray-300">
                        <Briefcase className="w-4 h-4" />
                        <span>Professional Title</span>
                      </label>
                      <input
                        type="text"
                        value={formData.personalInfo.title}
                        onChange={(e) => updatePersonalInfo('title', e.target.value)}
                        className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        placeholder="Software Engineer"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Experience */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
                    <p className="text-gray-400">Share your professional journey</p>
                  </div>

                  {formData.experience.map((exp, index) => (
                    <div key={index} className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Experience {index + 1}</h3>
                        {formData.experience.length > 1 && (
                          <button
                            onClick={() => removeArrayItem('experience', index)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => updateArray('experience', index, 'company', e.target.value)}
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="Company Name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Position</label>
                          <input
                            type="text"
                            value={exp.position}
                            onChange={(e) => updateArray('experience', index, 'position', e.target.value)}
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="Job Title"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
                          <input
                            type="text"
                            value={exp.duration}
                            onChange={(e) => updateArray('experience', index, 'duration', e.target.value)}
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="Jan 2020 - Present"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                          <textarea
                            value={exp.description}
                            onChange={(e) => updateArray('experience', index, 'description', e.target.value)}
                            rows="3"
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="Describe your responsibilities and achievements..."
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => addArrayItem('experience', { company: '', position: '', duration: '', description: '' })}
                    className="w-full p-4 border-2 border-dashed border-gray-600 rounded-xl hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Add Another Experience</span>
                  </button>
                </div>
              )}

              {/* Step 3: Education */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Education</h2>
                    <p className="text-gray-400">Your academic background</p>
                  </div>

                  {formData.education.map((edu, index) => (
                    <div key={index} className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Education {index + 1}</h3>
                        {formData.education.length > 1 && (
                          <button
                            onClick={() => removeArrayItem('education', index)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Institution</label>
                          <input
                            type="text"
                            value={edu.institution}
                            onChange={(e) => updateArray('education', index, 'institution', e.target.value)}
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="University Name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Degree</label>
                          <input
                            type="text"
                            value={edu.degree}
                            onChange={(e) => updateArray('education', index, 'degree', e.target.value)}
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="Bachelor's in Computer Science"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Year</label>
                          <input
                            type="text"
                            value={edu.year}
                            onChange={(e) => updateArray('education', index, 'year', e.target.value)}
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="2020"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">GPA (Optional)</label>
                          <input
                            type="text"
                            value={edu.gpa}
                            onChange={(e) => updateArray('education', index, 'gpa', e.target.value)}
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="3.8/4.0"
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => addArrayItem('education', { institution: '', degree: '', year: '', gpa: '' })}
                    className="w-full p-4 border-2 border-dashed border-gray-600 rounded-xl hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Add Another Education</span>
                  </button>
                </div>
              )}

              {/* Step 4: Projects */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Projects</h2>
                    <p className="text-gray-400">Showcase your technical projects and achievements</p>
                  </div>

                  {formData.projects.map((project, index) => (
                    <div key={index} className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Project {index + 1}</h3>
                        {formData.projects.length > 1 && (
                          <button
                            onClick={() => removeArrayItem('projects', index)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Project Name</label>
                          <input
                            type="text"
                            value={project.name}
                            onChange={(e) => updateArray('projects', index, 'name', e.target.value)}
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="E-commerce Platform"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Technologies</label>
                          <input
                            type="text"
                            value={project.technologies}
                            onChange={(e) => updateArray('projects', index, 'technologies', e.target.value)}
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="React, Node.js, MongoDB"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
                          <input
                            type="text"
                            value={project.duration}
                            onChange={(e) => updateArray('projects', index, 'duration', e.target.value)}
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="3 months"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Project Link (Optional)</label>
                          <input
                            type="url"
                            value={project.link}
                            onChange={(e) => updateArray('projects', index, 'link', e.target.value)}
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="https://github.com/username/project"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                          <textarea
                            value={project.description}
                            onChange={(e) => updateArray('projects', index, 'description', e.target.value)}
                            rows="3"
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="Describe your project, its features, and your contributions..."
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => addArrayItem('projects', { name: '', technologies: '', duration: '', description: '', link: '' })}
                    className="w-full p-4 border-2 border-dashed border-gray-600 rounded-xl hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Add Another Project</span>
                  </button>
                </div>
              )}

              {/* Step 5: Positions of Responsibility */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Positions of Responsibility</h2>
                    <p className="text-gray-400">Leadership roles and responsibilities you've held</p>
                  </div>

                  {formData.positionsOfResponsibility.map((position, index) => (
                    <div key={index} className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Position {index + 1}</h3>
                        {formData.positionsOfResponsibility.length > 1 && (
                          <button
                            onClick={() => removeArrayItem('positionsOfResponsibility', index)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Position Title</label>
                          <input
                            type="text"
                            value={position.title}
                            onChange={(e) => updateArray('positionsOfResponsibility', index, 'title', e.target.value)}
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="Team Lead, President, Captain"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Organization</label>
                          <input
                            type="text"
                            value={position.organization}
                            onChange={(e) => updateArray('positionsOfResponsibility', index, 'organization', e.target.value)}
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="Student Council, Sports Club, NGO"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
                          <input
                            type="text"
                            value={position.duration}
                            onChange={(e) => updateArray('positionsOfResponsibility', index, 'duration', e.target.value)}
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="Jan 2020 - Dec 2020"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-300 mb-2">Responsibilities & Achievements</label>
                          <textarea
                            value={position.description}
                            onChange={(e) => updateArray('positionsOfResponsibility', index, 'description', e.target.value)}
                            rows="3"
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="Led a team of 15 members, organized events, increased participation by 40%..."
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => addArrayItem('positionsOfResponsibility', { title: '', organization: '', duration: '', description: '' })}
                    className="w-full p-4 border-2 border-dashed border-gray-600 rounded-xl hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Add Another Position</span>
                  </button>
                </div>
              )}

              {/* Step 6: Skills & Achievements */}
              {currentStep === 6 && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Skills & Achievements</h2>
                    <p className="text-gray-400">Showcase your abilities and accomplishments</p>
                  </div>

                  {/* Skills Section */}
                  <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
                    <h3 className="text-xl font-semibold mb-4">Skills</h3>
                    {formData.skills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3 mb-3">
                        <input
                          type="text"
                          value={skill}
                          onChange={(e) => updateArray('skills', index, null, e.target.value)}
                          className="flex-1 p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                          placeholder="e.g., JavaScript, React, Node.js"
                        />
                        {formData.skills.length > 1 && (
                          <button
                            onClick={() => removeArrayItem('skills', index)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={() => addArrayItem('skills', '')}
                      className="w-full p-3 border border-dashed border-gray-600 rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Skill</span>
                    </button>
                  </div>

                  {/* Achievements Section */}
                  <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
                    <h3 className="text-xl font-semibold mb-4">Achievements</h3>
                    {formData.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3 mb-3">
                        <textarea
                          value={achievement}
                          onChange={(e) => updateArray('achievements', index, null, e.target.value)}
                          rows="2"
                          className="flex-1 p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                          placeholder="e.g., Increased team productivity by 30% through implementation of automated testing"
                        />
                        {formData.achievements.length > 1 && (
                          <button
                            onClick={() => removeArrayItem('achievements', index)}
                            className="text-red-400 hover:text-red-300 transition-colors mt-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={() => addArrayItem('achievements', '')}
                      className="w-full p-3 border border-dashed border-gray-600 rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Achievement</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 7: Preview/Generate */}
              {currentStep === 7 && (
                <div className="text-center animate-fadeIn">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Resume Preview</h2>
                    <p className="text-gray-400">Your AI-generated resume is ready!</p>
                  </div>

                  <div className="bg-white text-gray-900 p-8 rounded-xl shadow-2xl max-w-2xl mx-auto">
                    <div className="border-b border-gray-200 pb-6 mb-6">
                      <h1 className="text-3xl font-bold text-gray-900">{formData.personalInfo.name || 'Your Name'}</h1>
                      <p className="text-lg text-purple-600 mb-2">{formData.personalInfo.title || 'Professional Title'}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>{formData.personalInfo.email}</span>
                        <span>{formData.personalInfo.phone}</span>
                        <span>{formData.personalInfo.location}</span>
                      </div>
                    </div>

                    {formData.positionOfResponsibility && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Target Position</h3>
                        <p className="text-purple-600 font-medium">{formData.positionOfResponsibility}</p>
                      </div>
                    )}

                    <div className="text-left">
                      {/* Projects Section */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Projects</h3>
                      {formData.projects.map((project, index) => (
                        <div key={index} className="mb-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-gray-900">{project.name}</h4>
                              <p className="text-purple-600">{project.technologies}</p>
                            </div>
                            <span className="text-sm text-gray-500">{project.duration}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                          {project.link && (
                            <a href={project.link} className="text-xs text-blue-600 hover:underline mt-1 block">
                              {project.link}
                            </a>
                          )}
                        </div>
                      ))}

                      {/* Positions of Responsibility Section */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Leadership & Positions of Responsibility</h3>
                      {formData.positionsOfResponsibility.map((position, index) => (
                        <div key={index} className="mb-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-gray-900">{position.title}</h4>
                              <p className="text-purple-600">{position.organization}</p>
                            </div>
                            <span className="text-sm text-gray-500">{position.duration}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{position.description}</p>
                        </div>
                      ))}

                      {/* Experience Section */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Experience</h3>
                      {formData.experience.map((exp, index) => (
                        <div key={index} className="mb-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-gray-900">{exp.position}</h4>
                              <p className="text-purple-600">{exp.company}</p>
                            </div>
                            <span className="text-sm text-gray-500">{exp.duration}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{exp.description}</p>
                        </div>
                      ))}

                      {/* Skills Section */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Skills</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {formData.skills.filter(skill => skill.trim()).map((skill, index) => (
                          <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Achievements Section */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h3>
                      <ul className="space-y-1">
                        {formData.achievements.filter(achievement => achievement.trim()).map((achievement, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex space-x-4 justify-center">
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                    <button 
                      onClick={() => setCurrentStep(1)}
                      className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-lg font-medium transition-all duration-300"
                    >
                      Edit Resume
                    </button>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Previous
                </button>

                {currentStep < 7 ? (
                  <button
                    onClick={() => setCurrentStep(Math.min(7, currentStep + 1))}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : currentStep === 6 ? (
                  <button
                    onClick={generateResume}
                    disabled={isGenerating}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Generating...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Generate Resume</span>
                      </>
                    )}
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}