import React from 'react'

const BlueButton = ({ title }) => {
  return (
    <div>
      <button type='button' className='transition ease-in text-sm hover:bg-gray-300 bg-gray-200 w-[250px] h-[45px] rounded-xl text-blue-600'>
        {title}
      </button>
    </div>
  )
}

export default BlueButton