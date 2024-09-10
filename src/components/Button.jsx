import React from 'react'

const Button = ({ title, className }) => {
  return (
    <div className='flex items-end'>
      <button type='button' className={`${className} transition ease-in h-[45px] my-6 focus:outline-none text-black-100 bg-yellow-300 hover:bg-yellow-400  font-medium rounded-xl text-sm px-4 py-2.5 me-2 mb-2`}>
        {title}
      </button>
    </div>
  )
}

export default Button