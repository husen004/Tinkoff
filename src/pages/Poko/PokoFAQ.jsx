import React, { useState } from 'react'
import { PFAQ } from '../../constants'
import { Icon } from 'react-icons-kit'
import {arrow_up} from 'react-icons-kit/ikons/arrow_up'
import {arrow_down} from 'react-icons-kit/ikons/arrow_down'


const PokoFAQ = () => {

  const [open, setOpen] = useState(null)

  function handleOpen(i)  {
    if (open === i) {
      setOpen(null)
    } else setOpen(i)

  }


  return (
  
      <div className='flex justify-center my-10 mx-2'>
        <div className='flex flex-col bg-white rounded-3xl px-12 w-[1000px]'>
          {PFAQ.map((s, i) => (
            <div className='w-full border-b border-gray-300 cursor-pointer my-4  mx-6' onClick={() => handleOpen(i)} key={i} >
                <div className='flex flex-row justify-between transition ease-in hover:opacity-60'>
                <h4 className='font-semibold md:text-[23px] text-[14px] transition ease-in hover:opacity-60 '>{s.title}</h4>
                <div className={`pr-8`}>
                  {open === i ? <Icon icon={arrow_up} size={28} /> : <Icon icon={arrow_down} size={28} />}
                </div>
                </div>
              <div className={`grid overflow-hidden transition-all duration-300 ease-in-out  ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <p className={`overflow-hidden mb-4 font-sans mt-1 max-w-[930px] transition ease-in-out duration-1000 `}>{s.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default PokoFAQ