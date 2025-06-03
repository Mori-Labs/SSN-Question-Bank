import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Alias = ({ handleSubmit }) => {
  return (
    <>
      <div className="flex justify-center items-center border border-gray-300 dark:border-gray-700 sm:px-6 py-4 w-[90vw] rounded-3xl p-5 max-w-lg mx-auto bg-white dark:bg-gray-900 shadow-md">
        <div className="w-full text-left">
          <span className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
            Enter an alias (For upload credit purposes)
          </span>
          <input 
            type="text" 
            placeholder="A cool nickname perhaps?" 
            className="w-full py-2 px-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800"
          />
        </div>
      </div>

      <div className="text-center mt-10" onClick={handleSubmit}>
        <Button name="Submit" />
      </div>

      <div className="text-center mt-[-25px] mb-12">
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Want to request for a Question paper?{' '}
          <Link to="/requestpapers" className="text-blue-600 dark:text-blue-400 hover:underline">
            Request Here
          </Link>
        </span>
      </div>
    </>
  );
};

export default Alias;
