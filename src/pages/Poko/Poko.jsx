import React from 'react'
import Button from '../../components/Button'
import BlueButton from '../../components/BlueButton'
import HeadText from '../../components/HeadText'
import headpoko from '../../assets/images/headpoko.webp'

const Poko = () => {
  return (
    <div className='w-full'>
      
      <div className='flex justify-center items-center flex-col pt-[100px]'>

      <HeadText title="Т‑Банк Образование" />

        <p className='font-sans my-4 text-center'>
        Бесплатные образовательные программы для школьников, студентов и ИТ-специалистов
        </p>

        <div className='flex justify-center items-center gap-4 '>
            <button type='button' className='transition ease-in h-[55px] my-6 focus:outline-none text-black-100 bg-yellow-300 hover:bg-yellow-400  font-medium rounded-xl text-sm w-[120px]'>Подать заяку</button>
            <button type='button' className='transition ease-in h-[55px] my-6 focus:outline-none text-black-100 font-medium hover:bg-gray-300 bg-gray-200 w-[200px] rounded-xl text-blue-600'>Положение о конкурсе</button>
        </div>

      </div>

      <div className='flex justify-center items-center my-4'>
        <img src={headpoko} alt='poko' className='object-cover w-[80%]'/>
      </div>  

    </div>
  )
}

export default Poko