import React from 'react'
import '../../index.css'
import { develope } from '../../constants/Schoolar'

const Develope = () => {
  return (
    <div className='tab-animation'>
      <div className="flex justify-center items-center flex-col">
        {develope.map((d, index) => (
          <div className='flex flex-wrap justify-center flex-col' key={index}>
            
            <h5 className={`font-sans text-[12px] text-center rounded-2xl w-[100px] ${d.stage === "Набор закрыт" ? "bg-gray-400" : "bg-yellow-400"}`}>{d.stage}</h5>
            <h2 className='font-semibold text-[22px] max-w-[180px]'>{d.country}</h2>
            <h2 className='font-semibold text-[22px] max-w-[180px]'>{d.title}</h2>
            <p className='font-serif'>{d.para}</p>
            
          </div>  
        ))}
      </div>
    </div>
  )
}

export default Develope