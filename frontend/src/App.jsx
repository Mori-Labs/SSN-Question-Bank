import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer.jsx';
import MeetTheTeam from './MeetTheTeam.jsx';
import Sempage from './Sempage.jsx';
import ResultPage from './ResultPage.jsx';
import Combined from './SubmitPapers/Combined.jsx';
import One from './RequestPapers/One.jsx';
import Basepapers from './QuestionPapers/Basepapers.jsx';
import ThemeToggle from './ThemeToggle'; 

function App() {
  return (
    <Router>
    {/* <div className="flex flex-col min-h-screen
    bg-white text-gray-800
    dark:bg-gray-950 dark:text-gray-200
    transition-colors duration-200
    [color-scheme:light dark]"> */}
    <div className="
  flex flex-col min-h-screen
  bg-white text-gray-800
  dark:bg-gray-950 dark:text-gray-200
  transition-colors duration-200
  [color-scheme:light dark]
">

        <Navbar />

        <main className="flex-grow bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<MeetTheTeam />} />
            <Route path='/Qp/:dept' element={<Sempage />} />
            <Route path='/result/:deptName/:selectedSem/:selectedSub/:paperName' element={<ResultPage />} />
            <Route path='/contribute' element={<Combined />} />
            <Route path='/requestpapers' element={<One />} />
            <Route path='/question-papers' element={<Basepapers />} />
          </Routes>
        </main>

        <Footer />
        <ThemeToggle /> 
      </div>
    </Router>
  );
}

export default App;
