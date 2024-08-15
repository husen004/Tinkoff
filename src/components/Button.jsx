import React from 'react'

const Button = ({ title }) => {
  return (
    <div>
      <button type='button' className='transition ease-in h-[55px] my-6 color-yellow focus:outline-none text-black-100 bg-yellow-300 hover:bg-yellow-400  font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2'>
        {title}
      </button>
    </div>
  )
}

export default Button