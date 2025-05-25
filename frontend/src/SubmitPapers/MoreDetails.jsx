import React from 'react';
import Select from 'react-select';

const QPDetails = ({ setExam, setRegulation, setNewPaper, Exams, Regulations }) => {

  const examOptions = Exams.map((item) => ({ value: item, label: item }));
  const regulationOptions = Regulations.map((item) => ({ value: item, label: item }));

  const newSubjectOptions = [
    { value: 'YES', label: 'YES' },
    { value: 'NO', label: 'NO' },
  ];

  const handleSelectChange = (type, selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';
    switch (type) {
      case 'exam':
        setExam(value);
        break;
      case 'regulation':
        setRegulation(value);
        break;
      case 'newsubject':
        setNewPaper(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 md:gap-4 md:w-[90vw] justify-start items-stretch sm:items-center border mt-10 border-gray-300 rounded-3xl px-4 sm:px-6 py-4 w-[90vw] sm:w-full max-w-4xl mx-auto bg-white shadow-lg">
      <div className="text-left w-full sm:w-1/4 h-full sm:pr-4 sm:mr-4 sm:border-r-2 border-gray-300">
        <span className="block text-md font-semibold text-gray-700 mb-2">Exam</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium text-black border-2 border-gray-300 rounded-lg"
          options={examOptions}
          onChange={(selectedOption) => handleSelectChange('exam', selectedOption)}
        />
      </div>

      <div className="text-left w-full sm:w-1/4 h-full sm:pr-4 sm:mr-4 sm:border-r-2 border-gray-300">
        <span className="block text-md font-semibold text-gray-700 mb-2">Regulation</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium text-black border-2 border-gray-300 rounded-lg"
          options={regulationOptions}
          onChange={(selectedOption) => handleSelectChange('regulation', selectedOption)}
        />
      </div>

      <div className="text-left w-full sm:w-2/5 h-full">
        <span className="block text-md font-semibold text-gray-700 mb-2">Is this a new subject?</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium text-black border-2 border-gray-300 rounded-lg"
          options={newSubjectOptions}
          onChange={(selectedOption) => handleSelectChange('newsubject', selectedOption)}
        />
      </div>
    </div>
  );
};

export default QPDetails;