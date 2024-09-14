import React from 'react'

const BlueButton = ({ title, className }) => {
  return (
    <div className={`flex justify-start ${className}`}>
      <button type='button' className={` mt-4 flex justify-center items-center transition ease-in text-sm hover:bg-gray-300 bg-gray-200 w-[180px] h-[45px] rounded-xl text-blue-600`}>
        {title}
      </button>
    </div>
  )
}

export default BlueButton