import React from 'react'
import BlueButton from '../../components/BlueButton'
import stabs2 from '../../assets/images/stabs2.webp';

const prep = () => {
  return (
    <div className='flex justify-center'>
        <div className='bg-white rounded-3xl shadow-xl flex md:flex-row flex-col p-6'>
            <div className=''>
              <h4 className='font-bold text-[22px]'>Интенсивы и тренировки</h4>
              <p className='font-sans max-w-[500px] mt-4'>Проводим бесплатные очные и онлайн занятия для комплексной подготовки к олимпиадам по математике, информатике и физике</p>
              <div className='mt-[80px]'>
                <BlueButton title="Узнать подробности" />
              </div>
            </div>
            <img src={stabs2} alt='stabs1' className='object-cover h-[220px] w-[528px]' />
        </div>
    </div>
  )
}

export default prep