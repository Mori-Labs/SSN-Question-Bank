import React from 'react';
import Select from 'react-select';

const QPDetails = ({ setYear, setSemester, setDepartment, Years, Semesters, Departments }) => {

  const yearOptions = Years.map((item) => ({ value: item, label: item }));
  const semesterOptions = Semesters.map((item) => ({ value: item, label: item }));
  const departmentOptions = Departments.map((item) => ({ value: item, label: item }));

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
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 md:gap-4 justify-start items-stretch sm:items-center border mt-10 border-gray-300 rounded-3xl px-6 sm:px-6 py-4 w-[90vw] max-w-4xl mx-auto bg-white shadow-lg">
      <div className="text-left w-full sm:w-1/4 h-full sm:pr-4 sm:mr-4 sm:border-r-2 border-gray-300">
        <span className="block text-md font-semibold text-gray-700 mb-2">Year of QP</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium text-black border-2 border-gray-300 rounded-lg"
          options={yearOptions}
          onChange={(selectedOption) => handleSelectChange('year', selectedOption)}
        />
      </div>

      <div className="text-left w-full sm:w-1/4 h-full sm:pr-4 sm:mr-4 sm:border-r-2 border-gray-300">
        <span className="block text-md font-semibold text-gray-700 mb-2">Semester</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium text-black border-2 border-gray-300 rounded-lg"
          options={semesterOptions}
          onChange={(selectedOption) => handleSelectChange('semester', selectedOption)}
        />
      </div>

      <div className="text-left w-full sm:w-2/5 h-full">
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