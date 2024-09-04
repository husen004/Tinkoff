import React from 'react'

const GrayButton = ({ title }) => {
  return (
    <div>
        <button type='button' className='text-white border-[1px] border-gray-300 transition-all ease-in-out duration-500 hover:bg-gray-400 p-2 rounded-lg'>{title}</button>
    </div>
  )
}

export default GrayButton