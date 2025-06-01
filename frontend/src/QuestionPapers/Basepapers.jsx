import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionPapers from './Displaypapers';
import PaperRequests from './Displayrequests';

const Basepapers = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('papers');

  return (
    <div className="min-h-screen mt-10 flex flex-col items-center bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="w-full bg-white px-6 py-4 flex justify-center gap-6 sticky top-0 z-10 dark:bg-gray-900 dark:text-white">

        <button
          onClick={() => setActiveTab('papers')}
          className={`px-6 py-2 rounded-lg font-medium transition duration-300 ${
            activeTab === 'papers'
              ? 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'
              : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-300 dark:hover:bg-indigo-800'
          }`}
        >
          ❓ Question Papers
        </button>
        <button
          onClick={() => setActiveTab('requests')}
          className={`px-6 py-2 rounded-lg font-medium transition duration-300 ${
            activeTab === 'requests'
              ? 'bg-teal-500 text-white hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500'
              : 'bg-teal-100 text-teal-700 hover:bg-teal-200 dark:bg-teal-900 dark:text-teal-300 dark:hover:bg-teal-800'
          }`}
        >
          📖 Paper Requests
        </button>
      </div>

      <div className="w-full">
        {activeTab === 'papers' ? <QuestionPapers /> : <PaperRequests />}
      </div>
    </div>
  );
};

export default Basepapers;
