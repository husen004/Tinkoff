import React from 'react'
import HeadText from '../../components/HeadText'
import Button from '../../components/Button'
import headschool from '../../assets/images/headschool.webp'
import { courseSchool } from '../../constants'
import { sicon } from '../../constants'

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

      <div className='flex justify-center mb-20'>
        <div className='flex flex-row justify-evenly bg-white shadow-lg rounded-3xl gap-6 px-10 pt-3 pb-6 '>
          {sicon.map((s, index) => (
            <div className='h-full flex flex-col justify-center items-center' key={index} >
              <img src={s.icon} alt='sicon' className='mt-2 object-cover w-[25px] h-[25px]'/>
              <div className='flex justify-center text-center h-[30px] cursor-pointer'>
                <p className='font-sans text-[12px] max-w-[80px] hover:opacity-80 transition-all duration-300 ease-in-out'>{s.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <HeadText title="Курсы" />

    </div>
  )
}

export default School