import React from 'react'
import BlueButton from '../../components/BlueButton'
import stabs1 from '../../assets/images/stabp1.webp'

const explore = () => {
  return (
    <div className='flex justify-center'>
        <div className='bg-white rounded-3xl shadow-xl flex md:flex-row flex-col p-6'>
            <div className=''>
              <h4 className='font-bold text-[22px]'>Экскурсия в офисы Т‑Банка <br /> в России и Беларуси</h4>
              <p className='font-sans max-w-[500px] mt-4'>Наши сотрудники покажут, как выглядит работа в ИТ-компании изнутри</p>
              <div className='mt-[80px]'>
                <BlueButton title="Узнать подробности" />
              </div>
            </div>
            <img src={stabs1} alt='stabs1' className='object-cover h-[240px] w-[528px]' />
        </div>
    </div>
  )
}

export default explore