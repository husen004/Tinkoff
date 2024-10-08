import React from 'react'
import '../../index.css'
import { develope } from '../../constants/Schoolar'

const Develope = () => {
  return (
    <div className='slide-tabs flex justify-center mb-16'>
      <div className="flex flex-wrap justify-center gap-12 mx-4">
        {develope.map((d, index) => (
          <div className='flex justify-center flex-col bg-white rounded-3xl shadow-xl p-6 transition ease-in-out duration-500 md:hover:scale-105 cursor-pointer' key={index}>
            
            <h5 className={`font-sansserif text-[12px] text-center rounded-2xl w-[100px] py-1 ${d.stage === "Набор закрыт" ? "bg-gray-400" : "bg-yellow-400"}`}>{d.stage}</h5>
            <h2 className='font-semibold text-[22px] max-w-[180px] text-gray-500 my-4'>{d.country}</h2>
            <h2 className='font-semibold text-[22px]'>{d.developer}</h2>
            <p className='font-serif max-w-[300px] my-4'>{d.para}</p>
            
          </div>  
        ))}
      </div>
    </div>
  )
}

export default Develope