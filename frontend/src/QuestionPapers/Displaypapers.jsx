import React, { useState } from 'react';

const QuestionPapers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedExam, setSelectedExam] = useState('All');

  const mockPapers = [
    {
      contribution_id: 1,
      department: "CSE",
      year: 2023,
      semester: 6,
      subject: "Machine Learning",
      exam: "CAT1",
      regulation: "R2019",
      is_new_paper: true,
      file_name: "ml_cat1_2023.pdf",
      github_url: "https://github.com/user/ml_cat1_2023",
      contribution_date: "2023-05-20T14:00:00",
      is_direct: false
    },
    {
      contribution_id: 2,
      department: "IT",
      year: 2022,
      semester: 5,
      subject: "DBMS",
      exam: "SEM",
      regulation: "R2019",
      is_new_paper: false,
      file_name: "dbms_sem_2022.pdf",
      github_url: "https://github.com/user/dbms_sem_2022",
      contribution_date: "2022-11-30T10:30:00",
      is_direct: true
    },
    {
      contribution_id: 3,
      department: "ECE",
      year: 2021,
      semester: 4,
      subject: "Digital Electronics",
      exam: "CAT2",
      regulation: "R2019",
      is_new_paper: true,
      file_name: "de_cat2_2021.pdf",
      github_url: "https://github.com/user/de_cat2_2021",
      contribution_date: "2021-03-15T09:00:00",
      is_direct: false
    },
    {
      contribution_id: 4,
      department: "EEE",
      year: 2023,
      semester: 6,
      subject: "Control Systems",
      exam: "SAT",
      regulation: "R2021",
      is_new_paper: false,
      file_name: "cs_sat_2023.pdf",
      github_url: "https://github.com/user/cs_sat_2023",
      contribution_date: "2023-07-22T11:45:00",
      is_direct: true
    },
    {
      contribution_id: 5,
      department: "BME",
      year: 2022,
      semester: 3,
      subject: "Human Anatomy",
      exam: "CAT1",
      regulation: "R2019",
      is_new_paper: true,
      file_name: "anatomy_cat1_2022.pdf",
      github_url: "https://github.com/user/anatomy_cat1_2022",
      contribution_date: "2022-08-10T13:30:00",
      is_direct: false
    },
    {
      contribution_id: 6,
      department: "Chemical",
      year: 2021,
      semester: 5,
      subject: "Thermodynamics",
      exam: "SEM",
      regulation: "R2019",
      is_new_paper: false,
      file_name: "thermo_sem_2021.pdf",
      github_url: "https://github.com/user/thermo_sem_2021",
      contribution_date: "2021-11-03T16:00:00",
      is_direct: true
    },
    {
      contribution_id: 7,
      department: "Mechanical",
      year: 2023,
      semester: 7,
      subject: "Fluid Mechanics",
      exam: "CAT2",
      regulation: "R2021",
      is_new_paper: true,
      file_name: "fluid_cat2_2023.pdf",
      github_url: "https://github.com/user/fluid_cat2_2023",
      contribution_date: "2023-09-18T10:15:00",
      is_direct: false
    },
    {
      contribution_id: 8,
      department: "CSE",
      year: 2022,
      semester: 4,
      subject: "Operating Systems",
      exam: "SAT",
      regulation: "R2019",
      is_new_paper: false,
      file_name: "os_sat_2022.pdf",
      github_url: "https://github.com/user/os_sat_2022",
      contribution_date: "2022-06-25T15:00:00",
      is_direct: true
    },
    {
      contribution_id: 9,
      department: "IT",
      year: 2021,
      semester: 5,
      subject: "Web Technology",
      exam: "CAT1",
      regulation: "R2019",
      is_new_paper: true,
      file_name: "web_cat1_2021.pdf",
      github_url: "https://github.com/user/web_cat1_2021",
      contribution_date: "2021-04-10T12:20:00",
      is_direct: false
    },
    {
      contribution_id: 10,
      department: "ECE",
      year: 2023,
      semester: 6,
      subject: "VLSI Design",
      exam: "SEM",
      regulation: "R2021",
      is_new_paper: false,
      file_name: "vlsi_sem_2023.pdf",
      github_url: "https://github.com/user/vlsi_sem_2023",
      contribution_date: "2023-10-01T09:45:00",
      is_direct: true
    }
  ];
  

  // Extract unique values for dropdowns
  const uniqueYears = [...new Set(mockPapers.map(p => p.year))];
  const uniqueDepts = [...new Set(mockPapers.map(p => p.department))];
  const uniqueExams = [...new Set(mockPapers.map(p => p.exam))];

  // Apply all filters
  const filteredPapers = mockPapers.filter(paper =>
    (selectedYear === 'All' || paper.year.toString() === selectedYear) &&
    (selectedDept === 'All' || paper.department === selectedDept) &&
    (selectedExam === 'All' || paper.exam === selectedExam) &&
    (paper.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
     paper.file_name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 transform hover:scale-105 transition-transform duration-300">
            Recently Uploaded Papers
          </h1>

          {/* Search Box */}
          <input
            type="text"
            placeholder="Search papers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/2 mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          />

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {/* Year Dropdown */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-white border border-gray-300 text-gray-700 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="All">Year: All</option>
              {uniqueYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>

            {/* Department Dropdown */}
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="bg-white border border-gray-300 text-gray-700 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="All">Department: All</option>
              {uniqueDepts.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>

            {/* Exam Type Dropdown */}
            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="bg-white border border-gray-300 text-gray-700 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="All">Exam: All</option>
              {uniqueExams.map(exam => (
                <option key={exam} value={exam}>{exam}</option>
              ))}
            </select>

          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {filteredPapers.length > 0 ? (
            filteredPapers.map((paper) => (
              <div
                key={paper.contribution_id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6 flex flex-col sm:flex-row justify-between items-center">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-lg font-medium text-gray-800">
                      {paper.exam} - {paper.subject} ({paper.year})
                    </h3>
                    <p className="text-sm text-gray-500">
                      Dept: {paper.department}, Sem: {paper.semester}, Regulation: {paper.regulation}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      File: {paper.file_name}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Uploaded on: {new Date(paper.contribution_date).toLocaleDateString()}
                    </p>
                    {paper.is_new_paper && (
                      <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        New
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={paper.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                    >
                      View
                    </a>
                    <a
                      href={paper.github_url}
                      download
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No papers found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionPapers;
