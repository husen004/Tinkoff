import React, { useState } from 'react'
import HeadText from '../../components/HeadText'
import Button from '../../components/Button'
import headuni from '../../assets/images/headuni.webp'
import { unicon } from '../../constants'
import BlueButton from '../../components/BlueButton'
import Lab from './Lab'
import Online from './Online'
import Schoollar from './Schoolar'
import Proguni from './Proguni'
import DarkBlueButton from '../../components/DarkBlueButton'
import unip7 from '../../assets/images/unip7.webp'
import UniFAQ from './UniFaq'

const Uni = () => {

  const [tab, setTab] = useState(1)

  function handleTab(i) {
    setTab(i)
  }

  return (
    <div className='w-full'>

      <div className='flex justify-center items-center flex-col pt-[100px]'>

        <HeadText title="Т‑Банк Академия" />

        <p className='font-sans my-4 text-center'>
        Образовательные проекты в вузах России. Спецкурсы, кафедры по аналитике и разработке, стипендия, проектные лаборатории
        </p>

        <Button title="Выбрать программу"/>

      </div>

      <div className='flex justify-center items-center my-4'>
       <img src={headuni} alt='uni' className='object-cover w-[80%]'/>
      </div> 

      <div className='flex flex-wrap justify-center items-cetner gap-10 my-10'>
      {unicon.map((c, index) => (
        <div className='flex flex-row md:px-0 px-4'  key={index}>
          <img src={c.icon} className='bg-white shadow-lg rounded-3xl object-contain w-[64px] h-[64px]'/>
          <div className='flex flex-col ml-6 max-w-[450px]'>
          <h1 className='font-bold text-[22px]'>{c.title}</h1>
          <p className='font-sans max-w-[450px] mt-2 text-[15px]'>{c.para}</p>
          </div>
        </div>
        ))}
      </div>

      <HeadText title="Какие есть форматы программ" />
      <BlueButton className="my-8 mb-10 justify-center" title="Узнать подробнее" />

      <HeadText title="Для студентов" />
      
      
      <div className='flex justify-center items-center flex-row gap-6 my-4'>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out duration-500 cursor-pointer' onClick={() => handleTab(1)}>
             <button className='my-4'>Онлайн-программы</button>
          </div>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out duration-500 cursor-pointer' onClick={() => handleTab(2)}>
             <button className='my-4' >Программы в вузах</button>
          </div>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out duration-500 cursor-pointer' onClick={() => handleTab(3)}>
             <button className='my-4'>Лабаратория</button>
          </div>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out duration-500 cursor-pointer' onClick={() => handleTab(4)}>
             <button className='my-4'>Стипендия</button>
          </div>
      </div>

      <div className={`my-12 ${tab === 1 ? "block" : "hidden"}`}>
        <Online />
      </div>

      <div className={`my-12 ${tab === 2 ? "block" : "hidden"}`}>
        <Proguni />
      </div>

      <div className={`my-12 ${tab === 3 ? "block" : "hidden"}`}>
        <Lab />
      </div>

      <div className={`my-12 ${tab === 4 ? "block" : "hidden"}`}>
        <Schoollar />
      </div>

      <HeadText title="Для вузов-партнеров" />

      <div className='flex justify-center items-center py-10 mx-8'>
        <div className='flex md:flex-row flex-col justify-start w-[1104px] bg-darkgrey rounded-3xl'>
          <div className='flex flex-col justify-center  max-w-[550px] mx-8'>
            <h4 className='font-bold text-[23px] mt-8'>Форматы сотрудничества</h4>
            <ul className='mt-2 max-w-[1000px]'>
              <li className='my-2 font-sans'>- Поучаствуем в ярмарке вакансий, прочитаем лекцию, проведем олимпиаду или спецкурс</li>
              <li className='my-2 font-sans'>- Работаем с техническими вузами по всей России</li>
            </ul>
            <DarkBlueButton title="Узнать больше" />
          </div>
          <div className='w-full flex justify-center items-center'>
            <img src={unip7} alt='unip7' className='w-[528px] h-[260px] object-cover' />
          </div>
        </div>
      </div>

      <HeadText title="Часто задаваемые вопросы" />

      <div className='flex justify-center items-center'>
        <UniFAQ />
      </div>


    </div>
  )
}

export default Uni