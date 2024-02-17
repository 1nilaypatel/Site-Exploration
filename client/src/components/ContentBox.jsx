import React from 'react'

export default function ContentBox({ title, content }) {
  return (
    <div className='flex flex-col gap-7'>
      <div className='text-3xl'>{title}</div>
      {/* <div>{content}</div> */}
      <div>
        Our Al feature simplifies your life by automating routine tasks.
        Spend more time on the things you love!Our Al feature simplifies
        your life by automating routine tasks. Spend more time on the
        things you love!Our Al feature simplifies your life by automating
        routine tasks. Spend more time on the things you love.
      </div>
    </div>
  )
}
