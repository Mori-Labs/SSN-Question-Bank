import React from 'react';

const Button = ({ name, onClick }) => {
  return (
    <a
      href="#_"
      onClick={onClick}
      className="relative inline-block px-6 py-3 font-medium group mb-20 cursor-pointer
                 dark:text-gray-200"
    >
      {/* Shadow layer */}
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 
                       bg-black dark:bg-gray-700
                       group-hover:-translate-x-0 group-hover:-translate-y-0"></span>

      {/* Background and border layer */}
      <span className="absolute inset-0 w-full h-full 
                       bg-white border-2 border-black
                       dark:bg-gray-900 dark:border-gray-300
                       group-hover:bg-black group-hover:border-black
                       dark:group-hover:bg-gray-100 dark:group-hover:border-gray-900"></span>

      {/* Text */}
      <span className="relative text-black dark:text-gray-200 group-hover:text-white dark:group-hover:text-gray-900 text-xl">
        {name}
      </span>
    </a>
  );
};

export default Button;
