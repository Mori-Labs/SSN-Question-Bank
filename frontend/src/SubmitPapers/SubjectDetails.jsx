import React from 'react';
import Select from 'react-select';

const SubjectDetails = ({ subject, setSubject }) => {
  const subjectOptions = [
    { value: 'UIT2601', label: 'Web Programming' },
    { value: 'UIT2602', label: 'Internet Of Things And C Programming' },
  ];

  const handleSelectChange = (selectedOption) => {
    console.log(selectedOption);
    if (selectedOption) {
        setSubject(selectedOption.value); // Set subject as the selected value
    }
  };

  return (
    <div className="flex items-start border border-gray-300 rounded-3xl px-4 py-3 max-w-4xl mx-auto bg-white shadow-md mt-10">
      <div className="w-full text-left">
        <span className="block text-sm font-semibold text-gray-600 mb-2 ml-2">
          Subject (Please select closest subject in case it doesn’t exist)
        </span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium text-black border-2 border-gray-300 rounded-lg"
          options={subjectOptions}
          value={subjectOptions.find(option => option.value === subject)} // Correctly use the subject state to set the selected value
          onChange={handleSelectChange}
        />
      </div>
    </div>
  );
};

export default SubjectDetails;
