import React from 'react';

const QuestionPapers = () => {
  const mockPapers = [
    { name: "Midterm Exam 2023", type: "PDF Document", uploaded_details: "Uploaded by Batman on May 20 - 14:00 PM" },
    { name: "Final Exam 2022", type: "PDF Document", uploaded_details: "Uploaded by Supaerman on May 20 - 14:00 PM"},
    { name: "Practice Questions Set 1", type: "PDF Document",uploaded_details: "Uploaded by Atman on May 20 - 14:00 PM" },
    { name: "Sample Paper with Solutions", type: "PDF Document",uploaded_details: "Uploaded by Vishwaa on May 20 - 14:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 transform hover:scale-105 transition-transform duration-300">
          Recently Uploaded Papers
          </h1>
        </div>

        <div className="space-y-6">
          {mockPapers.map((paper, index) => (
            <div
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 flex flex-col sm:flex-row justify-between items-center">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-lg font-medium text-gray-800">
                    {paper.name}
                  </h3>
                  <p className="text-sm mb-1 text-gray-500">{paper.type}</p>
                  <span className='flex'>
                    <p className='text-gray-500 text-sm mt-2'>
                        {paper.uploaded_details}
                    </p>
                  </span>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    className="px-4 py-2 border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                  >
                    View
                  </button>
                  
                  <button
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionPapers;