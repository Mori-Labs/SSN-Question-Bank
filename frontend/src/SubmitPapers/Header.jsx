import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const QPDetails = ({ setYear, setSemester, setDepartment, Years, Semesters, Departments }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detect initial theme
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(darkQuery.matches);

    // Listen for changes
    const handler = e => setIsDark(e.matches);
    darkQuery.addEventListener('change', handler);

    return () => darkQuery.removeEventListener('change', handler);
  }, []);

  const yearOptions = Years.map(item => ({ value: item, label: item }));
  const semesterOptions = Semesters.map(item => ({ value: item, label: item }));
  const departmentOptions = Departments.map(item => ({ value: item, label: item }));

  const handleSelectChange = (type, selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';
    switch (type) {
      case 'year':
        setYear(value);
        break;
      case 'semester':
        setSemester(value);
        break;
      case 'department':
        setDepartment(value);
        break;
      default:
        break;
    }
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.selectProps.isDark ? '#1f2937' : 'white',
      borderColor: state.selectProps.isDark
        ? (state.isFocused ? '#6366f1' : '#4b5563')
        : '#d1d5db',
      boxShadow: state.selectProps.isDark && state.isFocused ? '0 0 0 2px #6366f1' : 'none',
      borderRadius: '0.5rem',
      color: state.selectProps.isDark ? '#e5e7eb' : '#374151',
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
      backgroundColor: state.selectProps.isDark
        ? (state.isFocused ? '#374151' : '#1f2937')
        : (state.isFocused ? '#e0e7ff' : 'white'),
      color: state.selectProps.isDark ? '#e5e7eb' : '#374151',
      cursor: 'pointer',
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: state.selectProps.isDark ? '#9ca3af' : '#6b7280',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.selectProps.isDark ? '#9ca3af' : '#6b7280',
      ':hover': {
        color: state.selectProps.isDark ? '#6366f1' : '#6b7280',
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
        color: state.selectProps.isDark ? '#6366f1' : '#6b7280',
      },
    }),
  };

  return (
    <div
      className="flex flex-col sm:flex-row gap-4 sm:gap-2 md:gap-4 justify-start items-stretch sm:items-center border mt-10 rounded-3xl px-6 sm:px-6 py-4 w-[90vw] max-w-4xl mx-auto
                 bg-white text-gray-800
                 dark:bg-gray-950 dark:text-gray-200 dark:border-gray-700 border-gray-300 shadow-lg"
    >
      <div className="text-left w-full sm:w-1/4 h-full sm:pr-4 sm:mr-4 sm:border-r-2 border-gray-300 dark:border-gray-700">
        <span className="block text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">Year of QP</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium"
          options={yearOptions}
          onChange={(selectedOption) => handleSelectChange('year', selectedOption)}
          styles={customStyles}
          isClearable={false}
          isSearchable={false}
          menuPlacement="auto"
          placeholder="Select Year"
          isDark={isDark}  
        />
      </div>

      <div className="text-left w-full sm:w-1/4 h-full sm:pr-4 sm:mr-4 sm:border-r-2 border-gray-300 dark:border-gray-700">
        <span className="block text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">Semester</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium"
          options={semesterOptions}
          onChange={(selectedOption) => handleSelectChange('semester', selectedOption)}
          styles={customStyles}
          isClearable={false}
          isSearchable={false}
          placeholder="Select Semester"
          isDark={isDark}  
        />
      </div>

      <div className="text-left w-full sm:w-2/5 h-full">
        <span className="block text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">Department</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium"
          options={departmentOptions}
          onChange={(selectedOption) => handleSelectChange('department', selectedOption)}
          styles={customStyles}
          isClearable={false}
          isSearchable={false}
          placeholder="Select Department"
          isDark={isDark}  
        />
      </div>
    </div>
  );
};

export default QPDetails;
