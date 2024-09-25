import React from 'react'
import '../../index.css'
import { finan } from '../../constants/Schoolar'

const Final = () => {
  return (
    <div className='slide-tabs flex justify-center mb-16 mx-4'>
      <div className='w-[1000px]'>
        {finan.map((q, index) => (
          <div key={index}>
            <div className='flex justify-center flex-col bg-white rounded-3xl shadow-xl p-6 transition ease-in-out duration-500 md:hover:scale-105 cursor-pointer' key={index}>
            
            <h5 className={`font-sansserif text-[12px] text-center rounded-2xl w-[100px] py-1 ${q.stage === "Набор закрыт" ? "bg-gray-400" : "bg-yellow-400"}`}>{q.stage}</h5>
            <h2 className='font-semibold text-[22px] text-gray-500 my-4'>{q.country}</h2>
            <h2 className='font-semibold text-[22px]'>{q.developer}</h2>
            <p className='font-serif my-4'>{q.para}</p>
            
          </div>  
          </div>
        ))}
      </div>
    </div>
  )
}

export default Final