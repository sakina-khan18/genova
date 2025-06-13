import React, { useState } from 'react';
import { User, Github, Mail, Phone, MapPin, Briefcase, GraduationCap, Code, Award, Plus, Trash2, Download, Eye, Sparkles } from 'lucide-react';

export default function ResumeBuilder() {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      github: '',
      linkedin: '',
      portfolio: ''
    },
    skills: [],
    experience: [],
    projects: [],
    education: [],
    achievements: []
  });
  
  const [currentSkill, setCurrentSkill] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const addSkill = () => {
    if (currentSkill.trim()) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()]
      }));
      setCurrentSkill('');
    }
  };

  const removeSkill = (index) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addArrayItem = (section, newItem) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const updateArrayItem = (section, index, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const removeArrayItem = (section, index) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const addExperience = () => {
    addArrayItem('experience', {
      company: '',
      position: '',
      duration: '',
      description: ''
    });
  };

  const addProject = () => {
    addArrayItem('projects', {
      name: '',
      description: '',
      technologies: '',
      link: ''
    });
  };

  const addEducation = () => {
    addArrayItem('education', {
      institution: '',
      degree: '',
      year: '',
      gpa: ''
    });
  };

  const addAchievement = () => {
    addArrayItem('achievements', {
      title: '',
      description: '',
      date: ''
    });
  };

  return (
     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10">
        <nav className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">ResumeAI</span>
          </div>
          <div className="flex space-x-6">
            <button 
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Eye className="w-4 h-4" />
              <span>{showPreview ? 'Edit' : 'Preview'}</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center py-12 px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            AI Resume Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            Create ATS-optimized resumes with advanced AI algorithms that adapt to industry standards
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12">
        {!showPreview ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personal Information */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Personal Information</h3>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.personalInfo.fullName}
                  onChange={(e) => handleInputChange('personalInfo', 'fullName', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.personalInfo.email}
                  onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.personalInfo.phone}
                  onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={formData.personalInfo.location}
                  onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="url"
                  placeholder="GitHub Profile"
                  value={formData.personalInfo.github}
                  onChange={(e) => handleInputChange('personalInfo', 'github', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="url"
                  placeholder="LinkedIn Profile"
                  value={formData.personalInfo.linkedin}
                  onChange={(e) => handleInputChange('personalInfo', 'linkedin', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="url"
                  placeholder="Portfolio Website"
                  value={formData.personalInfo.portfolio}
                  onChange={(e) => handleInputChange('personalInfo', 'portfolio', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Skills */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Skills</h3>
              </div>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Add a skill"
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                    className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                  <button
                    onClick={addSkill}
                    className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-green-600/20 border border-green-500/30 rounded-lg px-3 py-1">
                      <span className="text-green-300 text-sm">{skill}</span>
                      <button
                        onClick={() => removeSkill(index)}
                        className="text-green-400 hover:text-red-400 transition-colors duration-200"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Experience</h3>
                </div>
                <button
                  onClick={addExperience}
                  className="px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-6">
                {formData.experience.map((exp, index) => (
                  <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/50">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-white font-medium">Experience {index + 1}</h4>
                      <button
                        onClick={() => removeArrayItem('experience', index)}
                        className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={exp.company}
                        onChange={(e) => updateArrayItem('experience', index, 'company', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      />
                      <input
                        type="text"
                        placeholder="Position"
                        value={exp.position}
                        onChange={(e) => updateArrayItem('experience', index, 'position', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      />
                      <input
                        type="text"
                        placeholder="Duration (e.g., Jan 2020 - Present)"
                        value={exp.duration}
                        onChange={(e) => updateArrayItem('experience', index, 'duration', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      />
                      <textarea
                        placeholder="Job Description"
                        value={exp.description}
                        onChange={(e) => updateArrayItem('experience', index, 'description', e.target.value)}
                        rows="3"
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Projects</h3>
                </div>
                <button
                  onClick={addProject}
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-6">
                {formData.projects.map((project, index) => (
                  <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/50">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-white font-medium">Project {index + 1}</h4>
                      <button
                        onClick={() => removeArrayItem('projects', index)}
                        className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Project Name"
                        value={project.name}
                        onChange={(e) => updateArrayItem('projects', index, 'name', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                      <textarea
                        placeholder="Project Description"
                        value={project.description}
                        onChange={(e) => updateArrayItem('projects', index, 'description', e.target.value)}
                        rows="2"
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                      <input
                        type="text"
                        placeholder="Technologies Used"
                        value={project.technologies}
                        onChange={(e) => updateArrayItem('projects', index, 'technologies', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                      <input
                        type="url"
                        placeholder="Project Link"
                        value={project.link}
                        onChange={(e) => updateArrayItem('projects', index, 'link', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <button
                  onClick={addEducation}
                  className="px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-6">
                {formData.education.map((edu, index) => (
                  <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/50">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-white font-medium">Education {index + 1}</h4>
                      <button
                        onClick={() => removeArrayItem('education', index)}
                        className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Institution Name"
                        value={edu.institution}
                        onChange={(e) => updateArrayItem('education', index, 'institution', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      />
                      <input
                        type="text"
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(e) => updateArrayItem('education', index, 'degree', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      />
                      <input
                        type="text"
                        placeholder="Year"
                        value={edu.year}
                        onChange={(e) => updateArrayItem('education', index, 'year', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      />
                      <input
                        type="text"
                        placeholder="GPA (Optional)"
                        value={edu.gpa}
                        onChange={(e) => updateArrayItem('education', index, 'gpa', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Achievements</h3>
                </div>
                <button
                  onClick={addAchievement}
                  className="px-3 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-6">
                {formData.achievements.map((achievement, index) => (
                  <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/50">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-white font-medium">Achievement {index + 1}</h4>
                      <button
                        onClick={() => removeArrayItem('achievements', index)}
                        className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Achievement Title"
                        value={achievement.title}
                        onChange={(e) => updateArrayItem('achievements', index, 'title', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      />
                      <textarea
                        placeholder="Achievement Description"
                        value={achievement.description}
                        onChange={(e) => updateArrayItem('achievements', index, 'description', e.target.value)}
                        rows="2"
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      />
                      <input
                        type="text"
                        placeholder="Date"
                        value={achievement.date}
                        onChange={(e) => updateArrayItem('achievements', index, 'date', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Resume Preview */
          <div div  className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 text-gray-800">
            {/* Header */}
            <div className="text-center mb-8 pb-6 border-b-2 border-gray-200">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{formData.personalInfo.fullName || 'Your Name'}</h1>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                {formData.personalInfo.email && (
                  <div className="flex items-center space-x-1">
                    <Mail className="w-4 h-4" />
                    <span>{formData.personalInfo.email}</span>
                  </div>
                )}
                {formData.personalInfo.phone && (
                  <div className="flex items-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span>{formData.personalInfo.phone}</span>
                  </div>
                )}
                {formData.personalInfo.location && (
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{formData.personalInfo.location}</span>
                  </div>
                )}
                {formData.personalInfo.github && (
                  <div className="flex items-center space-x-1">
                    <Github className="w-4 h-4" />
                    <span>{formData.personalInfo.github}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Skills */}
            {formData.skills.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

      {/* Experience */}
            {formData.experience.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Experience
                </h2>
                <div className="space-y-4">
                  {formData.experience.map((exp, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-gray-900">{exp.position || 'Position'}</h3>
                        <span className="text-sm text-gray-600">{exp.duration || 'Duration'}</span>
                      </div>
                      <h4 className="font-medium text-gray-700 mb-2">{exp.company || 'Company Name'}</h4>
                      {exp.description && (
                        <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects */}
            {formData.projects.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Projects
                </h2>
                <div className="space-y-4">
                  {formData.projects.map((project, index) => (
                    <div key={index} className="border-l-4 border-purple-500 pl-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-gray-900">{project.name || 'Project Name'}</h3>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                            View Project
                          </a>
                        )}
                      </div>
                      {project.technologies && (
                        <p className="text-sm text-gray-600 font-medium mb-2">Technologies: {project.technologies}</p>
                      )}
                      {project.description && (
                        <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {formData.education.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Education
                </h2>
                <div className="space-y-4">
                  {formData.education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-cyan-500 pl-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-gray-900">{edu.degree || 'Degree'}</h3>
                        <span className="text-sm text-gray-600">{edu.year || 'Year'}</span>
                      </div>
                      <h4 className="font-medium text-gray-700 mb-1">{edu.institution || 'Institution Name'}</h4>
                      {edu.gpa && (
                        <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements */}
            {formData.achievements.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Achievements
                </h2>
                <div className="space-y-4">
                  {formData.achievements.map((achievement, index) => (
                    <div key={index} className="border-l-4 border-yellow-500 pl-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-gray-900">{achievement.title || 'Achievement Title'}</h3>
                        {achievement.date && (
                          <span className="text-sm text-gray-600">{achievement.date}</span>
                        )}
                      </div>
                      {achievement.description && (
                        <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty State Message */}
            {formData.experience.length === 0 && formData.projects.length === 0 && 
             formData.education.length === 0 && formData.achievements.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Resume Preview</h3>
                <p className="text-gray-600">Fill out the form sections to see your resume preview here.</p>
              </div>
            )}
          
</div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-6">
            <span>ATS-Optimized Templates</span>
            <span>Professional Formatting</span>
            <span>Instant Preview</span>
            <span>PDF Export</span>
          </div>
          <p className="text-gray-500">
            © 2025 ResumeAI. Create professional resumes with AI-powered optimization.
          </p>
        </div>
      </div>
    </div>
   
  );
}