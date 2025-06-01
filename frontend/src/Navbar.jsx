import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import morilogo from '../src/assets/morilogo.png';

const NavLink = ({ children, onClick, sectionId }) => (
  <div className="cursor-pointer relative group">
    <span 
      onClick={() => onClick(sectionId)} 
      className="text-gray-800 dark:text-gray-200"
    >
      {children}
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 group-hover:w-full"></span>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = ['QuestionPapers', 'Contribute', 'RequestQP', 'AboutUs'];
  const sectionIds = ['/question-papers', '/contribute', '/requestpapers', '/about-us'];

  const toggleMenu = () => setIsOpen(prev => !prev);
  const handleRedirect = (id) => {
    navigate(id);
    setIsOpen(false); // Close mobile menu on redirect
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-white dark:bg-gray-950 shadow-md dark:shadow-gray-800">
      {/* Desktop Navbar */}
      <div className="max-w-6xl mx-auto px-4 py-4 hidden sm:flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
          <img 
            src={morilogo} 
            alt="MoriLabs logo" 
            className="h-8 w-auto rounded-[5px] dark:invert"
          />
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            SSNQuestionBank
          </span>
        </div>
        <div className="flex space-x-10 font-poppins text-md">
          {navLinks.map((link, index) => (
            <NavLink key={link} onClick={handleRedirect} sectionId={sectionIds[index]}>
              {link}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden flex flex-col px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src={morilogo} 
              alt="MoriLabs logo" 
              className="h-7 w-auto dark:invert" 
            />
            <span className="text-base font-semibold text-gray-800 dark:text-gray-200">SSN Question Bank</span>
          </div>
          <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-200 focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="mt-4 space-y-4 font-poppins text-gray-800 dark:text-gray-200">
            {navLinks.map((link, index) => (
              <div 
                key={link} 
                onClick={() => handleRedirect(sectionIds[index])} 
                className="cursor-pointer hover:underline"
              >
                {link}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
