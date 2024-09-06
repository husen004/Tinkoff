import React from 'react'

const Para = ({ title, className }) => {
  return (
    <div className='flex justify-center'>
        <p className={`${className} font-sans`}>{title}</p>
    </div>
  )
}

export default Para