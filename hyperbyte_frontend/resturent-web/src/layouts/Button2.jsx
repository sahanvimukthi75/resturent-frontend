import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Button2 = ({ title, onClick, scrollTo }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
   
  };

  return scrollTo ? (
    <ScrollLink to={scrollTo} smooth={true} duration={800}>
      <button
        className='px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full cursor-pointer'
        onClick={handleClick}
      >
        {title}
      </button>
    </ScrollLink>
  ) : (
    <button
      className='px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full cursor-pointer'
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button2;
