import React from 'react';
import Select from 'react-select';

const QPDetails = ({ setExam, setRegulation, setNewPaper }) => {
  const examOptions = [
    { value: 'CAT-1', label: 'CAT-1' },
    { value: 'CAT-2', label: 'CAT-2' },
    { value: 'SAT', label: 'SAT' },
    { value: 'SEM', label: 'SEM' },
  ];

  const regulationOptions = [
    { value: 'R-2021', label: 'R-2021' },
    { value: 'R-2019', label: 'R-2019' },
  ];

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
    <div className="flex gap-4 justify-start items-center border mt-10 border-gray-300 rounded-3xl px-6 py-4 max-w-4xl mx-auto bg-white shadow-lg">
      <div className="text-left w-1/4 h-full pr-4 mr-4 border-r-2 border-gray-300">
        <span className="block text-md font-semibold text-gray-700 mb-2">Exam</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium text-black border-2 border-gray-300 rounded-lg"
          options={examOptions}
          onChange={(selectedOption) => handleSelectChange('exam', selectedOption)}
        />
      </div>

      <div className="text-left w-1/4 h-full pr-4 mr-4 border-r-2 border-gray-300">
        <span className="block text-md font-semibold text-gray-700 mb-2">Regulation</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium text-black border-2 border-gray-300 rounded-lg"
          options={regulationOptions}
          onChange={(selectedOption) => handleSelectChange('regulation', selectedOption)}
        />
      </div>

      <div className="text-left w-2/5 h-full">
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
