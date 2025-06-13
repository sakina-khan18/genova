import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import ResumeBuilder from './components/Resume/ResumeBuilder';
import ResumeTemplate from './components/Resume/ResumeTemplate';
import ResumePreview from './components/Resume/ResumePreview';
import CoverLetterGenerator from './components/CoverLetter/CoverLetterGenerator';
import CoverLetterPreview from './components/CoverLetter/CoverLetterPreview';
import IndustryAnalysis from './components/JobInsights/IndustryAnalysis';
import JobDescription from './components/JobInsights/JobDescription';
import MockInterview from './components/Interview/MockInterview';
import InterviewPrep from './components/Interview/InterviewPrep';
import Homepage from './pages/Homepage'
import AuthPage from './pages/AuthPage'
import './App.css'
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/auth' element={<AuthPage/>}/>
        <Route path='/resume' element={<ResumeBuilder/>}/>
     </Routes>
    </Router>
  );
};

export default App;