import React from 'react'
import '../../index.css'
import { develope } from '../../constants/Schoolar'

const Develope = () => {
  return (
    <div className='tab-animation'>
      <div className="flex justify-center items-center flex-col">
        {develope.map((d, index) => (
          <div className='flex justify-center items-center' key={index}>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            <h5 className=''>{d.stage}</h5>
            <h2 className=''>{d.country}</h2>
            <h2 className=''>{d.title}</h2>
            <p className=''>{d.para}</p>
            </div>
          </div>  
        ))}
      </div>
    </div>
  )
}

export default Develope