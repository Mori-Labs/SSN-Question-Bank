import React, { useState } from 'react';

const AcknowledgementCheckbox = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <div className="flex flex-col gap-3 my-5 max-w-[500px] w-full mx-auto px-4 sm:px-0">
      <label className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200 cursor-pointer">
  <input
    type="checkbox"
    className="w-4 h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
    checked={isChecked1}
    onChange={(e) => setIsChecked1(e.target.checked)}
  />
  <span>I acknowledge that the details entered above are correct</span>
    </label>

    <label className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200 cursor-pointer">
      <input
        type="checkbox"
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
        checked={isChecked2}
        onChange={(e) => setIsChecked2(e.target.checked)}
      />
      <span>The question paper is clearly visible and I have double-checked it before uploading.</span>
    </label>

    </div>
  );
};

export default AcknowledgementCheckbox;
