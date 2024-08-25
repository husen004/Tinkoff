import React from 'react'
import HeadText from '../components/HeadText'
import Button from '../components/Button'
import headschool from '../assets/images/headschool.webp'

const School = () => {
  return (
    <div className='w-full'>

      <div className='flex justify-center items-center flex-col pt-[100px]'>

        <HeadText title="Т‑Банк Поколение" />

        <p className='font-sans my-4 text-center'>
        Бесплатные курсы и мероприятия для школьников, подготовка к олимпиадам по математике, информатике и анализу данных
        </p>

        <Button title="Выбрать направление"/>

      </div>

      <div className='flex justify-center items-center my-4'>
        <img src={headschool} alt='' className='object-cover'/>
      </div> 

    </div>
  )
}

export default School