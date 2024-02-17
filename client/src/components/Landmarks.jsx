import React from 'react'

export default function Landmarks({ imgSrc, distance, destination, subDestination }) {
  return (
    <div>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-2 items-center'>
          <img src={imgSrc} alt={destination} className='h-6' />
          <span className='text-customBlue text-lg'>{destination}</span>
        </div>
        <div className='flex flex-col items-end'>
          <span className='text-xl'>{distance} km</span>
          <span className='text-gray-400 text-sm'>{subDestination}</span>
        </div>
      </div>
      <hr className='border-b-0 border-gray-400 mt-2' />
    </div>
  )
}
