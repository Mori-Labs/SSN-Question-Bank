import React from 'react';
import Select from 'react-select';

const SubjectDetails = ({ subject, setSubject, Subjects }) => {
  const subjectOptions = Subjects.map((item) => ({ value: item, label: item }))

  const handleSelectChange = (selectedOption) => {
    console.log(selectedOption);
    if (selectedOption) {
        setSubject(selectedOption.label); 
    }
  };

  return (
    <div className="flex items-start border border-gray-300 rounded-3xl mx-auto bg-white shadow-md px-6 sm:px-6 py-4 w-[90vw] max-w-4xl mt-10">
      <div className="w-full text-left">
        <span className="block text-sm font-semibold text-gray-600 mb-2 ml-2">
          Subject (Please select closest subject in case it doesn’t exist)
        </span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium text-black border-2 border-gray-300 rounded-lg"
          options={subjectOptions}
          value={subjectOptions.find(option => option.label === subject)} 
          onChange={handleSelectChange}
        />
      </div>
    </div>
  );
};

export default SubjectDetails;
