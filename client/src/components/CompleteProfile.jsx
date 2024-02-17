import React from 'react';
import CustomCheckBox from './CustomCheckBox.jsx';
import { MdDownload } from "react-icons/md";

export default function CompleteProfile({ title, subTitle, completionText, btnTxt, btnTxt2, completed, onComplete }) {
  return (
    <div className="flex flex-row justify-between h-36 p-4">
      <div className='flex flex-row gap-4'>
        <div>
          <CustomCheckBox completed={completed} onComplete={onComplete} />
        </div>
        {completed ? (
          <div className='mt-1 flex flex-col'>
            <div>{title}</div>
            <div className='text-sm text-customBlue2'>{subTitle}</div>
            <div className='text-3xl text-customBlue font-semibold mt-1'>{completionText}</div>
          </div>
        ) : (
          <div className='text-lg font-semibold'>{title}</div>
        )}
      </div>
      <div className='flex flex-col justify-between items-end'>
        {completed ? (
          <div>
            {new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}
          </div>
        ) : (
          <div></div>
        )}
        {completed ? (
          <button 
            className="w-auto py-4 px-6 border border-customBlue text-customBlue hover:bg-customBlue hover:text-gray-100  disabled:bg-opacity-40"
            onClick={() => onComplete(true)}
          >
            <div className='flex flex-row justify-center items-center gap-4'>
              <span>{btnTxt2}</span>
              <MdDownload />
            </div>
          </button>
        ) : (
          <button 
            className="py-4 px-6 w-36 bg-customBlue text-slate-100 border hover:border-customBlue hover:bg-white  hover:text-customBlue disabled:bg-opacity-40"
            onClick={() => onComplete(true)}
          >
            {btnTxt}
          </button>
        )}
      </div>
    </div>
  );
}