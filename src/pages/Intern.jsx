import React from 'react'
import HeadText from '../components/HeadText'
import Button from '../components/Button'
import headintern from '../assets/images/headintern.webp'

const Intern = () => {
  return (
    <div className='w-full'>

      <div className='flex justify-center items-center flex-col pt-[100px]'>

        <HeadText title="Т‑Банк Старт" />

        <p className='font-sans my-4 text-center'>
        Оплачиваемые стажировки в сфере ИТ. Работа над прикладными бизнес-задачами от 20 часов в неделю. Удаленно или из офиса в вашем городе
        </p>

        <Button title="Выбрать направление"/>

      </div>

      <div className='flex justify-center items-center my-4'>
        <img src={headintern} alt='intern' className='object-cover'/>
      </div> 

    </div>
  )
}

export default Intern