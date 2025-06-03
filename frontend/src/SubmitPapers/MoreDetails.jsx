import React from 'react';
import Select from 'react-select';

const QPDetails = ({ setExam, setRegulation, setNewPaper, Exams, Regulations }) => {
  const examOptions = Exams.map(item => ({ value: item, label: item }));
  const regulationOptions = Regulations.map(item => ({ value: item, label: item }));

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

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.selectProps.isDark ? '#1f2937' : 'white', // dark:bg-gray-800 / light white
      borderColor: state.isFocused
        ? '#6366f1' // indigo-500 focus ring
        : state.selectProps.isDark ? '#4b5563' : '#d1d5db', // dark border gray-600 / light gray-300
      boxShadow: state.isFocused ? '0 0 0 2px #6366f1' : 'none',
      borderRadius: '0.5rem', // rounded-lg
      color: state.selectProps.isDark ? '#e5e7eb' : '#374151', // gray-200 / gray-700
      transition: 'all 0.2s ease',
      minHeight: '2.5rem',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.selectProps.isDark ? '#e5e7eb' : '#374151',
      fontWeight: 500,
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: state.selectProps.isDark ? '#1f2937' : 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      marginTop: '4px',
      zIndex: 9999,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? (state.selectProps.isDark ? '#374151' : '#e0e7ff') // dark hover gray-700 / light indigo-100
        : state.selectProps.isDark ? '#1f2937' : 'white',
      color: state.selectProps.isDark ? '#e5e7eb' : '#374151',
      cursor: 'pointer',
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: state.selectProps.isDark ? '#9ca3af' : '#6b7280', // gray-400 light / gray-500 dark
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.selectProps.isDark ? '#9ca3af' : '#6b7280',
      ':hover': {
        color: state.selectProps.isDark ? '#6366f1' : '#4f46e5', // indigo hover
      },
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      backgroundColor: state.selectProps.isDark ? '#4b5563' : '#d1d5db',
    }),
    clearIndicator: (provided, state) => ({
      ...provided,
      color: state.selectProps.isDark ? '#9ca3af' : '#6b7280',
      ':hover': {
        color: state.selectProps.isDark ? '#6366f1' : '#4f46e5',
      },
    }),
  };

  // Detect dark mode (you can also pass this as a prop if you have a global dark mode state)
  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <div
      className="flex flex-col sm:flex-row gap-4 sm:gap-2 md:gap-4 md:w-[90vw] justify-start items-stretch sm:items-center border mt-10
                 border-gray-300 rounded-3xl px-4 sm:px-6 py-4 w-[90vw] sm:w-full max-w-4xl mx-auto
                 bg-white shadow-lg dark:bg-gray-950 dark:border-gray-700 dark:text-gray-200"
    >
      <div className="text-left w-full sm:w-1/4 h-full sm:pr-4 sm:mr-4 sm:border-r-2 border-gray-300 dark:border-gray-700">
        <span className="block text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">Exam</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium"
          options={examOptions}
          onChange={(selectedOption) => handleSelectChange('exam', selectedOption)}
          styles={customStyles}
          isDark={isDark}
          placeholder="Select Exam"
        />
      </div>

      <div className="text-left w-full sm:w-1/4 h-full sm:pr-4 sm:mr-4 sm:border-r-2 border-gray-300 dark:border-gray-700">
        <span className="block text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">Regulation</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium"
          options={regulationOptions}
          onChange={(selectedOption) => handleSelectChange('regulation', selectedOption)}
          styles={customStyles}
          isDark={isDark}
          placeholder="Select Regulation"
        />
      </div>

      <div className="text-left w-full sm:w-2/5 h-full">
        <span className="block text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Is this a new subject?
        </span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium"
          options={newSubjectOptions}
          onChange={(selectedOption) => handleSelectChange('newsubject', selectedOption)}
          styles={customStyles}
          isDark={isDark}
          placeholder="Select Yes/No"
        />
      </div>
    </div>
  );
};

export default QPDetails;
