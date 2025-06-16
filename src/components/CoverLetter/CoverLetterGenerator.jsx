import React, { useState, useRef } from 'react';
import { FileText, Download, RefreshCw, Upload, Sparkles, ArrowLeft } from 'lucide-react';

const CoverLetterGenerator = () => {
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    resumeFile: null
  });
  const [resumeText, setResumeText] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [fileStatus, setFileStatus] = useState('');
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = async (file) => {
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({
        ...prev,
        resumeFile: file
      }));
      
      setFileStatus('success');
      
      // Simulate PDF text extraction
      setResumeText(`Extracted resume content from ${file.name}...
      
Sample resume content:
- Experienced software engineer with 5+ years in full-stack development
- Proficient in React, Node.js, Python, and cloud technologies
- Led multiple projects resulting in 30% performance improvements
- Strong background in agile methodologies and team collaboration
- Bachelor's degree in Computer Science`);
    } else {
      setFileStatus('error');
      setTimeout(() => setFileStatus(''), 3000);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const generateCoverLetter = async () => {
    if (!formData.company || !formData.position || !formData.resumeFile) {
      alert('Please fill in all fields and upload your resume');
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    const generatedLetter = `Dear Hiring Manager,

I am writing to express my strong interest in the ${formData.position} position at ${formData.company}. With my extensive background in software development and proven track record of delivering high-quality solutions, I am confident that I would be a valuable addition to your team.

In my previous roles, I have demonstrated expertise in full-stack development, working with modern technologies including React, Node.js, and Python. I have successfully led multiple projects that resulted in significant performance improvements and enhanced user experiences. My experience with agile methodologies and collaborative development practices aligns well with modern software development environments.

What particularly attracts me to ${formData.company} is your commitment to innovation and excellence in technology solutions. I am excited about the opportunity to contribute to your team's success and help drive the company's technological advancement.

Key highlights from my background include:
• 5+ years of experience in full-stack development
• Proven ability to lead projects and deliver results
• Strong technical skills in modern web technologies
• Excellent problem-solving and communication abilities
• Experience working in collaborative, agile environments

I would welcome the opportunity to discuss how my skills and experience can contribute to ${formData.company}'s continued success. Thank you for considering my application. I look forward to hearing from you.

Sincerely,
[Your Name]`;

    setCoverLetter(generatedLetter);
    setIsGenerating(false);
  };

  const regenerateCoverLetter = async () => {
    if (!coverLetter) return;
    
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    const variations = [
      "I am excited to apply for",
      "I am thrilled to submit my application for",
      "I would like to express my interest in",
      "I am writing to apply for"
    ];

    const randomVariation = variations[Math.floor(Math.random() * variations.length)];
    
    const regeneratedLetter = coverLetter.replace(
      "I am writing to express my strong interest in",
      randomVariation
    ).replace(
      "What particularly attracts me to",
      Math.random() > 0.5 ? "I am particularly drawn to" : "What excites me most about"
    );

    setCoverLetter(regeneratedLetter);
    setIsGenerating(false);
  };

  const downloadAsPDF = () => {
    if (!coverLetter) return;

    // Create a simple PDF-like format (in real implementation, use jsPDF or similar)
    const element = document.createElement('a');
    const file = new Blob([coverLetter], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `cover-letter-${formData.company}-${formData.position}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const copyToClipboard = () => {
    if (!coverLetter) return;
    navigator.clipboard.writeText(coverLetter);
    alert('Cover letter copied to clipboard!');
  };

  return (
    <div style={{
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      background: 'linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #0f1419 100%)',
      color: '#ffffff',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px',
          padding: '20px 0'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '24px',
            fontWeight: '700'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <span style={{ color: 'white', fontSize: '20px' }}>◇</span>
            </div>
            Genova
          </div>
          
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#" style={{
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              color: '#6366f1',
              padding: '12px 24px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <ArrowLeft size={16} />
              Back to Tools
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Form Section */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.4)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            borderRadius: '20px',
            padding: '32px',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '700',
              marginBottom: '8px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              AI Cover Letter Generator
            </h2>
            <p style={{
              color: '#94a3b8',
              marginBottom: '32px',
              fontSize: '16px'
            }}>
              Create personalized cover letters that stand out
            </p>

            {/* Company Name */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#e2e8f0'
              }}>
                Company Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="e.g., Google, Microsoft, Tesla"
                style={{
                  width: '100%',
                  padding: '16px',
                  background: 'rgba(15, 20, 25, 0.6)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#6366f1';
                  e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Role/Position */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#e2e8f0'
              }}>
                Role/Position <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="e.g., Software Engineer, Product Manager, Data Scientist"
                style={{
                  width: '100%',
                  padding: '16px',
                  background: 'rgba(15, 20, 25, 0.6)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#6366f1';
                  e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Resume Upload */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#e2e8f0'
              }}>
                Upload Resume (PDF) <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <div
                style={{
                  position: 'relative',
                  border: `2px dashed ${isDragOver ? '#6366f1' : 'rgba(99, 102, 241, 0.3)'}`,
                  borderRadius: '12px',
                  padding: '32px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  background: isDragOver ? 'rgba(99, 102, 241, 0.1)' : 'rgba(15, 20, 25, 0.3)',
                  cursor: 'pointer'
                }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileUpload(e.target.files[0])}
                  style={{
                    position: 'absolute',
                    opacity: 0,
                    width: '100%',
                    height: '100%',
                    cursor: 'pointer'
                  }}
                />
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  color: '#94a3b8',
                  fontWeight: '500'
                }}>
                  <FileText size={32} />
                  <div>
                    {formData.resumeFile ? formData.resumeFile.name : 'Choose PDF file or drag & drop'}
                    <br />
                    <span style={{ color: '#6366f1', textDecoration: 'underline' }}>
                      Browse Files
                    </span>
                  </div>
                </div>
              </div>

              {fileStatus && (
                <div style={{
                  marginTop: '16px',
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  ...(fileStatus === 'success' ? {
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#10b981'
                  } : {
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#ef4444'
                  })
                }}>
                  {fileStatus === 'success' ? 'Resume uploaded successfully!' : 'Please upload a valid PDF file'}
                </div>
              )}
            </div>

            {/* Generate Button */}
            <button
              onClick={generateCoverLetter}
              disabled={isGenerating}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white',
                padding: '16px 32px',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: isGenerating ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                opacity: isGenerating ? 0.7 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                if (!isGenerating) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isGenerating) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }
              }}
            >
              {isGenerating ? (
                <>
                  <RefreshCw size={20} style={{ animation: 'spin 1s linear infinite' }} />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  Generate Cover Letter
                </>
              )}
            </button>
          </div>

          {/* Output Section */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.4)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            borderRadius: '20px',
            padding: '32px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#e2e8f0',
                margin: 0
              }}>
                Generated Cover Letter
              </h3>
              
              {coverLetter && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: '12px'
                }}>
                  <button
                    onClick={regenerateCoverLetter}
                    disabled={isGenerating}
                    style={{
                      padding: '12px 24px',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      borderRadius: '12px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      color: '#6366f1',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(99, 102, 241, 0.2)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(99, 102, 241, 0.1)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <RefreshCw size={16} style={isGenerating ? { animation: 'spin 1s linear infinite' } : {}} />
                    Regenerate
                  </button>
                  <button
                    onClick={copyToClipboard}
                    style={{
                      padding: '12px 24px',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      borderRadius: '12px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      color: '#6366f1',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '14px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(99, 102, 241, 0.2)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(99, 102, 241, 0.1)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Copy Text
                  </button>
                  <button
                    onClick={downloadAsPDF}
                    style={{
                      padding: '12px 24px',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      borderRadius: '12px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      color: '#6366f1',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(99, 102, 241, 0.2)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(99, 102, 241, 0.1)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <Download size={16} />
                    Download
                  </button>
                </div>
              )}
            </div>
            
            <div style={{
              background: 'rgba(15, 20, 25, 0.6)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '12px',
              padding: '24px',
              minHeight: '500px',
              color: '#e2e8f0',
              lineHeight: '1.6',
              whiteSpace: 'pre-wrap',
              fontFamily: 'Georgia, serif',
              overflow: 'auto'
            }}>
              {isGenerating ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  color: '#94a3b8',
                  fontStyle: 'italic'
                }}>
                  <RefreshCw size={24} style={{ animation: 'spin 1s linear infinite', marginRight: '12px' }} />
                  Generating your personalized cover letter...
                </div>
              ) : coverLetter ? (
                coverLetter
              ) : (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  color: '#94a3b8',
                  textAlign: 'center'
                }}>
                  <FileText size={48} style={{ marginBottom: '16px' }} />
                  <p style={{ fontSize: '18px', marginBottom: '8px' }}>Your generated cover letter will appear here</p>
                  <p style={{ fontSize: '14px' }}>Fill in the form and click "Generate Cover Letter" to get started</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Resume Preview */}
        {resumeText && (
          <div style={{
            background: 'rgba(30, 41, 59, 0.4)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            borderRadius: '20px',
            padding: '32px',
            backdropFilter: 'blur(10px)',
            marginTop: '40px'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#e2e8f0'
            }}>
              Resume Summary (Extracted)
            </h3>
            <div style={{
              background: 'rgba(15, 20, 25, 0.6)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '12px',
              padding: '24px',
              maxHeight: '200px',
              overflow: 'auto',
              whiteSpace: 'pre-wrap',
              fontSize: '14px',
              color: '#94a3b8',
              lineHeight: '1.5'
            }}>
              {resumeText}
            </div>
          </div>
        )}

      
      </div>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default CoverLetterGenerator;