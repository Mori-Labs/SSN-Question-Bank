import React from 'react';
import Select from 'react-select';

const QPDetails = ({ setYear, setSemester, setDepartment }) => {
  const yearOptions = [
    { value: '2025', label: '2025' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
  ];

  const semesterOptions = [
    { value: 'First', label: 'First' },
    { value: 'Second', label: 'Second' },
    { value: 'Third', label: 'Third' },
    { value: 'Fourth', label: 'Fourth' },
    { value: 'Fifth', label: 'Fifth' },
    { value: 'Sixth', label: 'Sixth' },
    { value: 'Seventh', label: 'Seventh' },
    { value: 'Eighth', label: 'Eighth' }
  ];

  const departmentOptions = [
    { value: 'Information Technology', label: 'Information Technology' },
    { value: 'Computer Science', label: 'Computer Science' },
    { value: 'Electronics and Communication', label: 'Electronics and Communication' },
  ];

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

  return (
    <div className="flex gap-4 justify-start items-center border mt-10 border-gray-300 rounded-3xl px-6 py-4 max-w-4xl mx-auto bg-white shadow-lg">
      <div className="text-left w-1/4 h-full pr-4 mr-4 border-r-2 border-gray-300">
        <span className="block text-md font-semibold text-gray-700 mb-2">Year of QP</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium text-black border-2 border-gray-300 rounded-lg"
          options={yearOptions}
          onChange={(selectedOption) => handleSelectChange('year', selectedOption)}
        />
      </div>

      <div className="text-left w-1/4 h-full pr-4 mr-4 border-r-2 border-gray-300">
        <span className="block text-md font-semibold text-gray-700 mb-2">Semester</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium text-black border-2 border-gray-300 rounded-lg"
          options={semesterOptions}
          onChange={(selectedOption) => handleSelectChange('semester', selectedOption)}
        />
      </div>

      <div className="text-left w-2/5 h-full">
        <span className="block text-md font-semibold text-gray-700 mb-2">Department</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium text-black border-2 border-gray-300 rounded-lg"
          options={departmentOptions}
          onChange={(selectedOption) => handleSelectChange('department', selectedOption)}
        />
      </div>
    </div>
  );
};

export default QPDetails;
