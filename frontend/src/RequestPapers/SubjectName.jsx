import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const SubjectName = () => {
  const [subject, setSubject] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect dark mode using `document.documentElement.classList`
    const dark = document.documentElement.classList.contains('dark');
    setIsDarkMode(dark);
  }, []);

  const subjectOptions = [
    { value: '', label: 'Leave blank (subject already exists)' },
    { value: 'UIT2601', label: 'Web Programming' },
    { value: 'UIT2602', label: 'Internet Of Things And C Programming' },
  ];

  const handleSelectChange = (selectedOption) => {
    setSubject(selectedOption ? selectedOption.value : null);
  };

  return (
    <div className="flex justify-center items-center border mb-8 rounded-3xl sm:px-6 py-4 w-[90vw] p-5 max-w-lg mx-auto 
                    bg-white shadow-md mt-8 border-gray-300 
                    dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700">
      <div className="w-full text-left">
        <span className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
          Enter Subject Name (If missing, if exists leave blank)
        </span>
        <Select
          className="w-full"
          classNamePrefix="custom-select"
          options={subjectOptions}
          value={subjectOptions.find(option => option.value === subject)}
          onChange={handleSelectChange}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: isDarkMode ? '#111827' : 'white', // dark:bg-gray-900
              borderColor: state.isFocused
                ? isDarkMode ? '#60a5fa' : '#3b82f6'
                : isDarkMode ? '#374151' : '#d1d5db',
              boxShadow: state.isFocused
                ? isDarkMode
                  ? '0 0 0 2px rgba(96, 165, 250, 0.5)'
                  : '0 0 0 2px rgba(59, 130, 246, 0.5)'
                : 'none',
              color: isDarkMode ? '#e5e7eb' : '#111827',
              borderRadius: '0.5rem',
              padding: '4px 6px',
              minHeight: '42px',
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: isDarkMode ? '#1f2937' : 'white', // dark:bg-gray-800
              borderRadius: '0.5rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              marginTop: 4,
              color: isDarkMode ? '#f3f4f6' : '#111827',
            }),
            option: (base, { isFocused }) => ({
              ...base,
              backgroundColor: isFocused
                ? isDarkMode ? '#374151' : '#eff6ff'
                : isDarkMode ? '#1f2937' : 'white',
              color: isDarkMode ? '#f3f4f6' : '#111827',
              fontSize: '14px',
              padding: '10px',
            }),
            singleValue: (base) => ({
              ...base,
              color: isDarkMode ? '#f3f4f6' : '#111827',
            }),
            valueContainer: (base) => ({
              ...base,
              padding: '0 8px',
            }),
            input: (base) => ({
              ...base,
              margin: 0,
              padding: 0,
              color: isDarkMode ? '#f3f4f6' : '#111827',
            }),
          }}
        />
      </div>
    </div>
  );
};

export default SubjectName;
