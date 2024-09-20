import React from 'react'
import '../../index.css'
import { analyt } from '../../constants/Schoolar'

const Analyt = () => {
  return (
    <div className='tab-animation flex justify-center my-10'>
      <div className="flex flex-wrap justify-center gap-12 mx-4">
        {analyt.map((a, index) => (
          <div className='flex justify-center flex-col bg-white rounded-3xl shadow-xl p-6 transition ease-in-out duration-500 md:hover:scale-105 cursor-pointer' key={index}>
            
            <h5 className={`font-sansserif text-[12px] text-center rounded-2xl w-[100px] py-1 ${a.stage === "Набор закрыт" ? "bg-gray-400" : "bg-yellow-400"}`}>{a.stage}</h5>
            <h2 className='font-semibold text-[22px] text-gray-500 my-4'>{a.country}</h2>
            <h2 className='font-semibold text-[22px]'>{a.developer}</h2>
            <p className='font-serif max-w-[450px] my-4'>{a.para}</p>
            
          </div>  
        ))}
      </div>
    </div>
  )
}

export default Analyt