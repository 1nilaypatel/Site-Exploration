import React from 'react'

export default function LandMetrics({ title, subTitle }) {
  return (
    <div className='flex flex-col'>
      <span class="gerlach-sans" className='text-lg lg:text-2xl'>{title}</span>
      <span className='text-gray-400 text-xs lg:text-sm'>{subTitle}</span>
    </div>
  )
}
