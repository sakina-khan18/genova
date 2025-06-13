import React, { useState } from 'react';

const MockInterview = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);

    const mockInterviewQuestions = [
        "Tell me about yourself.",
        "What are your greatest strengths?",
        "What is your biggest weakness?",
        "Why do you want to work here?",
        "Where do you see yourself in five years?"
    ];

    const handleNextQuestion = () => {
        if (currentQuestionIndex < mockInterviewQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setUserAnswer('');
        } else {
            setIsCompleted(true);
        }
    };

    const handleAnswerChange = (e) => {
        setUserAnswer(e.target.value);
    };

    return (
        <div>
            <h2>Mock Interview</h2>
            {!isCompleted ? (
                <div>
                    <p>{mockInterviewQuestions[currentQuestionIndex]}</p>
                    <textarea 
                        value={userAnswer} 
                        onChange={handleAnswerChange} 
                        placeholder="Type your answer here..."
                    />
                    <button onClick={handleNextQuestion}>
                        {currentQuestionIndex < mockInterviewQuestions.length - 1 ? 'Next Question' : 'Finish'}
                    </button>
                </div>
            ) : (
                <div>
                    <h3>Interview Completed!</h3>
                    <p>Thank you for participating in the mock interview.</p>
                </div>
            )}
        </div>
    );
};

export default MockInterview;