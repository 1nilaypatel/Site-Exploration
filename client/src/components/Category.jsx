import React from 'react';

export default function Category({ imgSrc, text }) {
  return (
    <div className='bg-bgGray text-sm px-2 py-0.5 text-gray-500 flex flex-row items-center gap-1'>
      <img src={imgSrc} alt={text} className='h-5' />
      <span>{text}</span>
    </div>
  );
}