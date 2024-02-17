import React from 'react';

export default function CustomCheckBox({ completed, onComplete }) {
  return (
    <div className="relative">
      <input
        type="checkbox"
        className="hidden"
        checked={completed}
        onChange={() => onComplete(!completed)}
      />
      <div className="w-5 h-5 border border-black flex items-center justify-center cursor-pointer relative">
        {completed && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-10 h-10 text-green-500 absolute top-1 left-4 transform -translate-x-1/2 -translate-y-1/2"
          >
            <path
              fill="currentColor"
              d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
