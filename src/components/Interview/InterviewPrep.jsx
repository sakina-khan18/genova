
import React, { useState, useRef, useEffect } from 'react';
import { Briefcase, Brain, ArrowRight, Loader2, MessageSquare, Target, Star, AlertCircle, CheckCircle, TrendingUp, Users, Code, BarChart3, Megaphone, Package, Mic, MicOff, Play, Pause, Clock, Award, RefreshCw } from 'lucide-react';

const InterviewPracticeSystem = () => {
  const [apiKey, setApiKey] = useState('');
  const [showApiInput, setShowApiInput] = useState(true);
  const [jobTitle, setJobTitle] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState(null);
  const [questionHistory, setQuestionHistory] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  
  const timerRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const departments = [
    { id: 'engineering', name: 'Engineering', icon: Code, color: '#6366f1' },
    { id: 'product', name: 'Product Management', icon: Package, color: '#8b5cf6' },
    { id: 'data', name: 'Data Science', icon: BarChart3, color: '#10b981' },
    { id: 'marketing', name: 'Marketing', icon: Megaphone, color: '#f59e0b' },
    { id: 'management', name: 'Management', icon: Users, color: '#ef4444' }
  ];

  // Timer effect
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isTimerRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Mock OpenAI API call (replace with actual implementation)
  const callOpenAI = async (prompt, systemMessage = '') => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock responses based on prompt content
    if (prompt.includes('Generate a challenging interview question')) {
      return getMockQuestion(selectedDepartment, jobTitle);
    } else if (prompt.includes('Evaluate the following answer')) {
      return getMockEvaluation(userAnswer, currentQuestion);
    }
    
    return "Mock response from OpenAI";
  };

  const getMockQuestion = (dept, job) => {
    const questions = {
      engineering: {
        question: "Design a distributed system that can handle 10 million daily active users with 99.9% uptime. Walk me through your architecture, including database design, caching strategy, and failure handling mechanisms.",
        context: "This is a system design question commonly asked for senior engineering roles. Focus on scalability, reliability, and specific technology choices.",
        difficulty: "Hard",
        timeLimit: 600,
        category: "System Design"
      },
      product: {
        question: "You're the PM for a messaging app. Daily active users dropped 15% over the past month, but engagement per user increased 25%. How would you investigate this issue and what actions would you take?",
        context: "This tests analytical thinking, metric interpretation, and strategic decision-making skills essential for product management.",
        difficulty: "Medium",
        timeLimit: 480,
        category: "Analytics & Strategy"
      },
      data: {
        question: "You built a machine learning model to predict customer churn with 85% accuracy on test data. After deploying to production, you notice the accuracy dropped to 65%. What could be causing this and how would you fix it?",
        context: "This evaluates understanding of model deployment challenges, data drift, and ML engineering best practices.",
        difficulty: "Hard",
        timeLimit: 420,
        category: "ML Engineering"
      },
      marketing: {
        question: "Your company's customer acquisition cost (CAC) increased by 40% while the lifetime value (LTV) remained constant. The CEO wants to cut marketing spend by 30%. How do you respond and what strategy do you propose?",
        context: "This tests strategic thinking, data interpretation, and ability to defend marketing investments with business impact.",
        difficulty: "Medium",
        timeLimit: 360,
        category: "Performance Marketing"
      },
      management: {
        question: "You have a high-performing team member who consistently delivers excellent work but has started exhibiting toxic behavior that's affecting team morale. Two other team members have approached you about this. How do you handle this situation?",
        context: "This evaluates leadership skills, conflict resolution, and ability to balance individual performance with team dynamics.",
        difficulty: "Hard",
        timeLimit: 300,
        category: "People Management"
      }
    };

    return JSON.stringify(questions[dept] || questions.engineering);
  };

  const getMockEvaluation = (answer, question) => {
    const evaluation = {
      score: Math.floor(Math.random() * 30) + 70, // Random score between 70-100
      feedback: {
        strengths: [
          "Demonstrated clear structured thinking and problem-solving approach",
          "Good understanding of technical concepts and industry best practices",
          "Showed ability to consider multiple perspectives and trade-offs"
        ],
        improvements: [
          "Could provide more specific examples or metrics to support your points",
          "Consider discussing potential risks and mitigation strategies in more detail",
          "Try to structure your response using frameworks like STAR method for behavioral questions"
        ],
        detailed: "Your answer shows good foundational knowledge and logical thinking. You covered the main points but could strengthen your response by providing more concrete examples and demonstrating deeper strategic thinking. Focus on quantifying impact and discussing implementation challenges."
      },
      categories: {
        "Technical Knowledge": Math.floor(Math.random() * 20) + 80,
        "Communication": Math.floor(Math.random() * 15) + 75,
        "Problem Solving": Math.floor(Math.random() * 25) + 75,
        "Strategic Thinking": Math.floor(Math.random() * 20) + 70
      },
      recommendation: "Good foundation! Practice structuring your responses and include more specific examples to reach the next level."
    };

    return JSON.stringify(evaluation);
  };

  const generateQuestion = async () => {
    if (!selectedDepartment || !jobTitle.trim()) return;
    
    setIsLoading(true);
    setTimer(0);
    
    try {
      const prompt = `Generate a challenging interview question for a ${jobTitle} position in the ${selectedDepartment} department. The question should be appropriate for the role level and test key competencies. Return the response in JSON format with: question, context, difficulty, timeLimit (in seconds), and category.`;
      
      const response = await callOpenAI(prompt);
      const questionData = JSON.parse(response);
      
      setCurrentQuestion(questionData);
      setUserAnswer('');
      setEvaluationResult(null);
      setIsTimerRunning(false);
      
    } catch (error) {
      console.error('Error generating question:', error);
      // Fallback to mock data
      const mockResponse = getMockQuestion(selectedDepartment, jobTitle);
      setCurrentQuestion(JSON.parse(mockResponse));
    } finally {
      setIsLoading(false);
    }
  };

  const startAnswering = () => {
    setTimer(0);
    setIsTimerRunning(true);
  };

  const submitAnswer = async () => {
    if (!userAnswer.trim() || !currentQuestion) return;
    
    setIsLoading(true);
    setIsTimerRunning(false);
    
    try {
      const prompt = `Evaluate the following answer to the interview question. Provide detailed feedback including score (0-100), strengths, areas for improvement, and category-wise breakdown.

Question: ${currentQuestion.question}
Answer: ${userAnswer}

Return response in JSON format with: score, feedback (strengths array, improvements array, detailed string), categories object, and recommendation string.`;

      const response = await callOpenAI(prompt);
      const evaluation = JSON.parse(response);
      
      setEvaluationResult(evaluation);
      
      // Add to history
      const historyItem = {
        question: currentQuestion,
        answer: userAnswer,
        evaluation: evaluation,
        timeTaken: timer,
        timestamp: new Date().toISOString()
      };
      
      setQuestionHistory(prev => [...prev, historyItem]);
      
    } catch (error) {
      console.error('Error evaluating answer:', error);
      // Fallback to mock evaluation
      const mockEvaluation = getMockEvaluation(userAnswer, currentQuestion);
      setEvaluationResult(JSON.parse(mockEvaluation));
    } finally {
      setIsLoading(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        // Here you would typically convert speech to text using OpenAI Whisper
        setUserAnswer(prev => prev + " [Audio recorded - transcription would appear here]");
      };
      
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return '#10b981';
    if (score >= 80) return '#f59e0b';
    if (score >= 70) return '#ef4444';
    return '#6b7280';
  };

  if (showApiInput) {
    return (
      <div 
        className="min-h-screen p-6 flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #0f1419 100%)',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
        }}
      >
        <div 
          className="max-w-md w-full p-8 rounded-2xl"
          style={{
            backgroundColor: 'rgba(30, 41, 59, 0.4)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(99, 102, 241, 0.2)'
          }}
        >
          <div className="text-center mb-6">
            <Brain className="w-12 h-12 mx-auto mb-4" style={{ color: '#6366f1' }} />
            <h1 
              className="text-3xl font-bold mb-2"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              AI Interview Practice
            </h1>
            <p style={{ color: '#94a3b8' }}>
              Enter your OpenAI API key to get started
            </p>
          </div>
          
          <div className="space-y-4">
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2"
              style={{
                backgroundColor: 'rgba(15, 20, 25, 0.6)',
                color: '#ffffff',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                focusRingColor: '#6366f1'
              }}
            />
            
            <button
              onClick={() => setShowApiInput(false)}
              disabled={!apiKey.trim()}
              className="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: '#6366f1',
                color: '#ffffff'
              }}
            >
              Continue to Interview Practice
            </button>
            
            <p className="text-xs text-center" style={{ color: '#94a3b8' }}>
              Your API key is stored locally and never sent to our servers
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen p-6"
      style={{
        background: 'linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #0f1419 100%)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-10 h-10 mr-3" style={{ color: '#6366f1' }} />
            <h1 
              className="text-4xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              AI-Powered Interview Practice
            </h1>
          </div>
          <p className="text-lg" style={{ color: '#94a3b8' }}>
            Real-time AI evaluation with personalized feedback and scoring
          </p>
        </div>

        {!currentQuestion ? (
          /* Setup Form */
          <div 
            className="p-8 rounded-2xl mb-8"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.4)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(99, 102, 241, 0.2)'
            }}
          >
            <div className="space-y-6">
              {/* Job Title */}
              <div>
                <label className="block text-lg font-medium mb-3" style={{ color: '#e2e8f0' }}>
                  Target Position
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#94a3b8' }} />
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="e.g., Senior Software Engineer, Product Manager..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl text-lg transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: 'rgba(15, 20, 25, 0.6)',
                      color: '#ffffff',
                      border: '1px solid rgba(99, 102, 241, 0.2)'
                    }}
                  />
                </div>
              </div>

              {/* Department */}
              <div>
                <label className="block text-lg font-medium mb-3" style={{ color: '#e2e8f0' }}>
                  Department
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {departments.map((dept) => {
                    const Icon = dept.icon;
                    const isSelected = selectedDepartment === dept.id;
                    return (
                      <button
                        key={dept.id}
                        onClick={() => setSelectedDepartment(dept.id)}
                        className={`p-4 rounded-xl transition-all duration-300 border-2 ${isSelected ? 'transform scale-105' : ''}`}
                        style={{
                          backgroundColor: isSelected ? 'rgba(99, 102, 241, 0.2)' : 'rgba(15, 20, 25, 0.6)',
                          borderColor: isSelected ? '#6366f1' : 'rgba(99, 102, 241, 0.2)',
                          color: isSelected ? '#ffffff' : '#94a3b8'
                        }}
                      >
                        <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: dept.color }} />
                        <p className="text-sm font-medium text-center">{dept.name}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={generateQuestion}
                disabled={!jobTitle.trim() || !selectedDepartment || isLoading}
                className="w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                style={{ backgroundColor: '#6366f1', color: '#ffffff' }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                    Generating AI Question...
                  </>
                ) : (
                  <>
                    Generate Interview Question
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Question Display */}
            <div 
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(99, 102, 241, 0.2)'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <MessageSquare className="w-6 h-6" style={{ color: '#6366f1' }} />
                  <h2 className="text-xl font-semibold" style={{ color: '#ffffff' }}>
                    Interview Question
                  </h2>
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: 'rgba(139, 92, 246, 0.2)',
                      color: '#8b5cf6'
                    }}
                  >
                    {currentQuestion.category}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" style={{ color: '#f59e0b' }} />
                    <span style={{ color: '#f59e0b' }} className="font-mono text-lg">
                      {formatTime(timer)}
                    </span>
                  </div>
                  <button
                    onClick={() => setCurrentQuestion(null)}
                    className="px-3 py-1 rounded-lg text-sm font-medium"
                    style={{
                      backgroundColor: 'rgba(99, 102, 241, 0.2)',
                      color: '#6366f1'
                    }}
                  >
                    New Question
                  </button>
                </div>
              </div>
              
              <p className="text-lg mb-4" style={{ color: '#ffffff' }}>
                {currentQuestion.question}
              </p>
              
              <p className="text-sm" style={{ color: '#94a3b8' }}>
                {currentQuestion.context}
              </p>
            </div>

            {/* Answer Input */}
            {!evaluationResult && (
              <div 
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(99, 102, 241, 0.2)'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold" style={{ color: '#ffffff' }}>
                    Your Answer
                  </h3>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={isRecording ? stopRecording : startRecording}
                      className={`p-2 rounded-lg transition-all duration-300 ${isRecording ? 'animate-pulse' : ''}`}
                      style={{
                        backgroundColor: isRecording ? 'rgba(239, 68, 68, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                        color: isRecording ? '#ef4444' : '#6366f1'
                      }}
                    >
                      {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    </button>
                    
                    {!isTimerRunning && timer === 0 && (
                      <button
                        onClick={startAnswering}
                        className="px-4 py-2 rounded-lg font-medium transition-all duration-300"
                        style={{
                          backgroundColor: 'rgba(16, 185, 129, 0.2)',
                          color: '#10b981'
                        }}
                      >
                        <Play className="w-4 h-4 mr-2 inline" />
                        Start Timer
                      </button>
                    )}
                  </div>
                </div>
                
                <textarea
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your answer here... Be specific and provide examples where possible."
                  rows={8}
                  className="w-full p-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                  style={{
                    backgroundColor: 'rgba(15, 20, 25, 0.6)',
                    color: '#ffffff',
                    border: '1px solid rgba(99, 102, 241, 0.2)'
                  }}
                />
                
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm" style={{ color: '#94a3b8' }}>
                    Suggested time limit: {Math.floor(currentQuestion.timeLimit / 60)} minutes
                  </p>
                  
                  <button
                    onClick={submitAnswer}
                    disabled={!userAnswer.trim() || isLoading}
                    className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center disabled:opacity-50"
                    style={{ backgroundColor: '#6366f1', color: '#ffffff' }}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        AI Evaluating...
                      </>
                    ) : (
                      <>
                        Submit for AI Evaluation
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Evaluation Results */}
            {evaluationResult && (
              <div className="space-y-6">
                {/* Overall Score */}
                <div 
                  className="p-6 rounded-2xl text-center"
                  style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(99, 102, 241, 0.2)'
                  }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 mr-3" style={{ color: getScoreColor(evaluationResult.score) }} />
                    <h2 className="text-3xl font-bold" style={{ color: getScoreColor(evaluationResult.score) }}>
                      {evaluationResult.score}/100
                    </h2>
                  </div>
                  <p className="text-lg mb-2" style={{ color: '#ffffff' }}>
                    {evaluationResult.recommendation}
                  </p>
                  <p style={{ color: '#94a3b8' }}>
                    Completed in {formatTime(timer)}
                  </p>
                </div>

                {/* Category Breakdown */}
                <div 
                  className="p-6 rounded-2xl"
                  style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(99, 102, 241, 0.2)'
                  }}
                >
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#ffffff' }}>
                    Performance Breakdown
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(evaluationResult.categories).map(([category, score]) => (
                      <div key={category} className="text-center">
                        <div 
                          className="w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center font-bold text-lg"
                          style={{
                            backgroundColor: `${getScoreColor(score)}20`,
                            color: getScoreColor(score),
                            border: `2px solid ${getScoreColor(score)}`
                          }}
                        >
                          {score}
                        </div>
                        <p className="text-sm font-medium" style={{ color: '#e2e8f0' }}>
                          {category}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Feedback */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div 
                    className="p-6 rounded-2xl"
                    style={{
                      backgroundColor: 'rgba(30, 41, 59, 0.4)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(16, 185, 129, 0.2)'
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 mr-3" style={{ color: '#10b981' }} />
                      <h3 className="text-lg font-semibold" style={{ color: '#10b981' }}>
                        Strengths
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {evaluationResult.feedback.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span style={{ color: '#e2e8f0' }}>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div 
                    className="p-6 rounded-2xl"
                    style={{
                      backgroundColor: 'rgba(30, 41, 59, 0.4)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(245, 158, 11, 0.2)'
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-6 h-6 mr-3" style={{ color: '#f59e0b' }} />
                      <h3 className="text-lg font-semibold" style={{ color: '#f59e0b' }}>
                        Areas for Improvement
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {evaluationResult.feedback.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span style={{ color: '#e2e8f0' }}>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Detailed Analysis */}
                <div 
                  className="p-6 rounded-2xl"
                  style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(99, 102, 241, 0.2)'
                  }}
                >
                  <div className="flex items-center mb-4">
                    <AlertCircle className="w-6 h-6 mr-3" style={{ color: '#6366f1' }} />
                    <h3 className="text-lg font-semibold" style={{ color: '#6366f1' }}>
                      Detailed Analysis
                    </h3>
                  </div>
                  <p className="leading-relaxed" style={{ color: '#e2e8f0' }}>
                    {evaluationResult.feedback.detailed}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={generateQuestion}
                    