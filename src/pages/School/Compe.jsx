import React from 'react'
import BlueButton from '../../components/BlueButton'
import stabs3 from '../../assets/images/stabs3.avif'
import stabs4 from '../../assets/images/stabs4.avif'

const compe = () => {
  return (
    <div className='flex justify-center gap-10 '>
        <div className='bg-white rounded-3xl shadow-xl flex md:flex-row flex-col p-6'>
            <div className=''>
              <h4 className='font-bold text-[22px]'>Математический квиз</h4>
              <p className='font-sans max-w-[500px] mt-4'>Проверьте свои силы в решении <br/> математических задач</p>
              <div className='mt-[95px]'>
                <BlueButton title="Узнать подробности" />
              </div>
            </div>
            <img src={stabs3} alt='stabs1' className='ml-4 object-cover h-[230px] w-[248px]' />
        </div>

        <div className='bg-white rounded-3xl shadow-xl flex md:flex-row flex-col p-6'>
            <div className=''>
              <h4 className='font-bold text-[22px]'>Математическая игра <br />  «Непростые числа»</h4>
              <p className='font-sans max-w-[500px] mt-4'>Нестандартные задачи для всех, <br/> кто любит математику</p>
              <div className='mt-[60px]'>
                <BlueButton title="Узнать подробности" />
              </div>
            </div>
            <img src={stabs4} alt='stabs4' className='ml-4 object-cover h-[230px] w-[248px]' />
        </div>
    </div>
    
    
    
  )
}

export default compe