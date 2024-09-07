import React from 'react'

const Para = ({ title, className }) => {
  return (
    <div className='flex justify-center text-center my-4'>
        <p className={`${className} font-sans max-w-[880px]`}>{title}</p>
    </div>
  )
}

export default Para