import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionPapers from './Displaypapers';
import PaperRequests from './Displayrequests';

const Basepapers = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('papers');

  return (
    <div className="min-h-screen mt-10 flex flex-col items-center">
      <div className="w-full bg-white px-6 py-4 flex justify-center gap-6 sticky top-0 z-10">
        <button
          onClick={() => setActiveTab('papers')}
          className={`px-6 py-2 rounded-lg font-medium transition duration-300 ${
            activeTab === 'papers' 
              ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
              : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
          }`}
        >
          ❓ Question Papers
        </button>
        <button
          onClick={() => setActiveTab('requests')}
          className={`px-6 py-2 rounded-lg font-medium transition duration-300 ${
            activeTab === 'requests' 
              ? 'bg-teal-500 text-white hover:bg-teal-600' 
              : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
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