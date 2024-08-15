import React from 'react'

const BlueButton = ({ title }) => {
  return (
    <div>
      <button type='button' className='transition ease-in text-sm hover:bg-gray-200 bg-gray-100 w-[250px] h-[45px] rounded-xl text-blue-600'>
        {title}
      </button>
    </div>
  )
}

export default BlueButton