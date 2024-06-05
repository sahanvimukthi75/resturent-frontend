import React from 'react';

const Button1 = ({ title, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    window.location.reload();
  };

  return (
    <button
      className='px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full cursor-pointer'
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button1;
