import React from 'react';
import Select from 'react-select';

const SubjectDetails = ({ subject, setSubject, Subjects }) => {
  const subjectOptions = Subjects.map(item => ({ value: item, label: item }));

  const handleSelectChange = (selectedOption) => {
    if (selectedOption) {
      setSubject(selectedOption.label);
    }
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.selectProps.isDark ? '#1f2937' : 'white', // gray-800 dark / white light
      borderColor: state.isFocused
        ? '#6366f1' // indigo-500 focus ring
        : state.selectProps.isDark ? '#4b5563' : '#d1d5db', // gray-600 dark / gray-300 light border
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
        ? (state.selectProps.isDark ? '#374151' : '#e0e7ff') // gray-700 dark / indigo-100 light hover
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

  // Detect dark mode or pass this as a prop if you prefer
  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <div className="flex items-start border border-gray-300 rounded-3xl mx-auto bg-white shadow-md px-6 sm:px-6 py-4 w-[90vw] max-w-4xl mt-10
                    dark:bg-gray-950 dark:border-gray-700 dark:text-gray-200">
      <div className="w-full text-left">
        <span className="block text-sm font-semibold text-gray-600 mb-2 ml-2 dark:text-gray-400">
          Subject (Please select closest subject in case it doesn’t exist)
        </span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium"
          options={subjectOptions}
          value={subjectOptions.find(option => option.label === subject)}
          onChange={handleSelectChange}
          styles={customStyles}
          isClearable={false}
          isSearchable={false}
          isDark={isDark}
          placeholder="Select Subject"
        />
      </div>
    </div>
  );
};

export default SubjectDetails;
