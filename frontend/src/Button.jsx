import React from 'react'

const Button = ({ name, onClick }) => {
  return (
    <a
      href="#_"
      onClick={onClick}
      className="relative inline-block px-6 py-3 font-medium group mb-20 cursor-pointer
                 dark:group-hover:bg-white dark:group-hover:border-black
                 dark:text-white"
    >
      {/* Shadow layer */}
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black
                       dark:bg-white
                       group-hover:-translate-x-0 group-hover:-translate-y-0"></span>

      {/* Background and border layer */}
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black
                       dark:bg-black dark:border-white
                       group-hover:bg-black group-hover:border-black
                       dark:group-hover:bg-white dark:group-hover:border-black"></span>

      {/* Text */}
      <span className="relative text-black dark:text-white group-hover:text-white dark:group-hover:text-black text-xl">
        {name}
      </span>
    </a>
  )
}

export default Button
