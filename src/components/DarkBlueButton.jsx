import React from 'react'

export default function DarkBlueButton({ title }) {
  return (
    <div className='flex h-full justify-start items-end my-6'>
        <button className='bg-gray-300 hover:bg-gray-400 h-[45px] w-[150px] rounded-lg transition ease-in text-blue-800' type='button'>{title}</button>
    </div>
  )
}
