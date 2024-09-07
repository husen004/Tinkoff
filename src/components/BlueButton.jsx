import React from 'react'

const BlueButton = ({ title, className }) => {
  return (
    <div className='flex justify-center'>
      <button type='button' className={`${className} flex justify-center items-center transition ease-in text-sm hover:bg-gray-300 bg-gray-200 w-[180px] h-[45px] rounded-xl text-blue-600`}>
        {title}
      </button>
    </div>
  )
}

export default BlueButton