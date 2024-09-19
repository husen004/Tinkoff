import React, { useState } from 'react'
import HeadText from '../../components/HeadText'
import Button from '../../components/Button'
import headintern from '../../assets/images/headintern.webp'
import { schoolaricons } from '../../constants/Schoolar'
import intern4 from '../../assets/images/intern4.webp'
import Internstar from './Internstar'
import '../../index.css'
import Analyt from './Analyt'
import Develope from './Develope'
import Final from './Final'
import Managment from './Managment'
import Market from './Market'
import QA from './QA'
import Uri from './Uri'

const Intern = () => {

  const [tabs, setTabs] = useState(1)

  function secondHandleTab(i) {
    setTabs(i)
  }

  return (
    <div className='w-full'>

      <div className='flex justify-center items-center flex-col pt-[100px]'>

        <HeadText title="Т‑Банк Старт" />

        <p className='font-sans my-4 text-center max-w-[800px] '>
        Оплачиваемые стажировки в сфере ИТ. Работа над прикладными бизнес-задачами от 20 часов в неделю. Удаленно или из офиса в вашем городе
        </p>

        <Button title="Выбрать направление"/>

      </div>

      <div className='flex justify-center items-center my-4'>
        <img src={headintern} alt='intern' className='object-cover w-[80%]'/>
      </div> 

      <HeadText title="Что мы предлагаем" />

      <div className='flex flex-wrap justify-center items-cetner gap-10 my-10'>
      {schoolaricons.map((s, index) => (
        <div className='flex flex-row md:px-0 px-4'  key={index}>
          <img src={s.icon} className='bg-white shadow-lg rounded-3xl object-contain w-[64px] h-[64px] mt-4'/>
          <div className='flex flex-col ml-6 max-w-[450px]'>
          <h1 className='font-bold text-[22px]'>{s.title}</h1>
          <p className='font-sans max-w-[450px] mt-2 text-[15px]'>{s.para}</p>
          </div>
        </div>
        ))}
      </div>

      <HeadText title="Сколько длится стажировка" />

      <div className='flex justify-center items-center mt-8 mx-4'>
        <div className='bg-white shadow-xl rounded-3xl flex md:flex-row flex-col'>
        <div className='p-8'>
          <h1 className='font-bold text-2xl'>Выбирайте удобное количество часов</h1>
          <p className='font-sans max-w-[550px] mt-4'>Можно работать от 20 до 40 часов в неделю в течение всего учебного года и летом. Стажировка продлится от 3 до 6 месяцев по договоренности с командой</p>
        </div>
        <img src={intern4} alt='intern4' className='object-cover w-[315px] h-[260px] rounded-3xl' />
        </div>
      </div>

      <HeadText title="Как проходит стажировка" />

      <Internstar />

      <HeadText title="Какие есть направления" />

      <div className='flex justify-center py-6 mx-4'>
        <div className='flex flex-row justify-center items-center flex-wrap gap-6 border-b-[1px] border-gray-300 cursor-pointer'>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out cursor-pointer' onClick={() => secondHandleTab(1)}>
             <button className='my-4'>Разработка</button>
          </div>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out cursor-pointer' onClick={() => secondHandleTab(2)}>
             <button className='my-4'>Аналитика</button>
          </div>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out cursor-pointer' onClick={() => secondHandleTab(3)}>
             <button className='my-4'>QA</button>
          </div>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out cursor-pointer' onClick={() => secondHandleTab(3)}>
             <button className='my-4'>Маркетинг</button>
          </div>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out cursor-pointer' onClick={() => secondHandleTab(3)}>
             <button className='my-4'>Менеджмент</button>
          </div>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out cursor-pointer' onClick={() => secondHandleTab(3)}>
             <button className='my-4'>Финансы</button>
          </div>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out cursor-pointer' onClick={() => secondHandleTab(3)}>
             <button className='my-4'>Юриспруденция</button>
          </div>
        </div>
      </div>

      <div className={`${tabs === 1 ? "block" : "hidden"}`}>
        <Develope />
      </div>

      <div className={`${tabs === 2 ? "block" : "hidden"}`}>
        <Analyt />
      </div>

      <div className={`${tabs === 3 ? "block" : "hidden"}`}>
        <QA />
      </div>

      <div className={`${tabs === 4 ? "block" : "hidden"}`}>
        <Market />
      </div>

      <div className={`${tabs === 5 ? "block" : "hidden"}`}>
        <Managment />
      </div>

      <div className={`${tabs === 6 ? "block" : "hidden"}`}>
        <Final />
      </div>

      <div className={`${tabs === 7 ? "block" : "hidden"}`}>
        <Uri />
      </div>

      <HeadText title="Как попасть на Т‑Банк Старт" />

    </div>
  )
}

export default Intern