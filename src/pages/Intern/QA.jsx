import React from 'react'
import '../../index.css'
import { qa } from '../../constants/Schoolar'

const QA = () => {
  return (
    <div className='tab-animation flex justify-center my-10 mx-4'>
      <div className='w-[1000px]'>
        {qa.map((m, index) => (
          <div key={index}>
            <div className='flex justify-center flex-col bg-white rounded-3xl shadow-xl p-6 transition ease-in-out duration-500 md:hover:scale-105 cursor-pointer' key={index}>
            
            <h5 className={`font-sansserif text-[12px] text-center rounded-2xl w-[100px] py-1 ${m.stage === "Набор закрыт" ? "bg-gray-400" : "bg-yellow-400"}`}>{m.stage}</h5>
            <h2 className='font-semibold text-[22px] text-gray-500 my-4'>{m.country}</h2>
            <h2 className='font-semibold text-[22px]'>{m.developer}</h2>
            <p className='font-serif my-4'>{m.para}</p>
            
          </div>  
          </div>
        ))}
      </div>
    </div>
  )
}

export default QA