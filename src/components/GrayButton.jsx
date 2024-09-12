import React from 'react'

const GrayButton = ({ title }) => {
  return (
    <div>
        <button type='button' className='text-gray-500 hover:text-white border-2 border-gray-300 transition-all ease-in-out duration-500 hover:bg-gray-400 p-2 rounded-lg'>{title}</button>
    </div>
  )
}

export default GrayButton