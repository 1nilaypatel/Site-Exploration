import React from 'react'

export default function Button({ px, text, ...props }) {
  return (
    <button 
      className={`py-4 px-${px} bg-customBlue text-slate-100 border hover:border-customBlue hover:bg-white  hover:text-customBlue disabled:bg-opacity-40`} 
      {...props}
    >
      {text}
    </button>
  )
}
