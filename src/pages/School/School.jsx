import React from 'react'
import HeadText from '../../components/HeadText'
import Button from '../../components/Button'
import headschool from '../../assets/images/headschool.webp'
import { courseSchool } from '../../constants'

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
        <img src={headschool} alt='headschool' className='object-cover w-[80%]'/>
      </div> 

      <div className='flex flex-wrap justify-center items-cetner gap-10 my-10'>
      {courseSchool.map((c, index) => (
        <div className='flex flex-row md:px-0 px-4'  key={index}>
          <img src={c.icon} className='bg-white shadow-lg rounded-3xl object-contain w-[64px] h-[64px]'/>
          <div className='flex flex-col ml-6 max-w-[450px]'>
          <h1 className='font-bold text-[22px]'>{c.title}</h1>
          <p className='font-sans max-w-[450px] mt-2 text-[15px]'>{c.para}</p>
          </div>
        </div>
        ))}
      </div>

    </div>
  )
}

export default School