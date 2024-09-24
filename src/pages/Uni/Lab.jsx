import React from 'react'
import BlueButton from '../../components/BlueButton'
import Button from '../../components/Button'
import icon4 from '../../assets/icons/icon4.svg'
import unip3 from '../../assets/images/unip3.webp'
import unip4 from '../../assets/images/unip4.webp'
import unip5 from '../../assets/images/unip5.webp'
import unip6 from '../../assets/images/unip6.webp'

const Lab = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-10 tab-animation'>
      
      <div className='flex lg:flex-row flex-col bg-white rounded-3xl shadow-xl transition-all ease-in-out duration-500 md:hover:scale-105 cursor-pointer mx-4'>

        <div className='pl-10 pt-10 '>
        <div className='flex w-[290px] bg-darkgrey rounded-xl p-2'>
          <img src={icon4} alt='schoolicon' className='object-cover w-[25px] h-[25px]' />
          <p className='font-sans text-[14px] text-gray-800 ml-2'>Для студентов и выпускников вузов</p>
        </div>
            <h4 className='font-bold text-[23px] max-w-[520px] mt-4'>T-Bank Lab в МФТИ</h4>
            <ul className='list-none my-4'>
                <li className='font-sans my-4'>— Иследовательская лаборатория на основе МФТИ</li>
                <li className='font-sans md:max-w-[600px] my-4'>— Студенты и выпускники вузов России работают над проектами искуственного интелекта</li>
                <li className='font-sans my-4'>— Официальное занятость от 20 чвсов в неделю</li>
            </ul>
            <div className='flex justify-start mt-10'>
            <Button className="" title="Узнать подробнее"/>
            </div>
        </div>

        <div className='flex justify-center'>
        <img src={unip3} className='object-cover w-[440px] h-[416px]' />
        </div>

      </div>

      <div className='flex lg:flex-row flex-col bg-white rounded-3xl shadow-xl transition-all ease-in-out duration-500 md:hover:scale-105 cursor-pointer mx-4'>

        <div className='pl-10 pt-10 h-full' >
        <div className='flex w-[250px] bg-darkgrey rounded-xl p-2'>
          <img src={icon4} alt='schoolicon' className='object-cover w-[25px] h-[25px]' />
          <p className='font-sans text-[14px] text-gray-800 ml-2'>Для студентов всех вузов</p>
        </div>
            <h4 className='font-bold text-[23px] max-w-[520px] mt-4'>T-Bank Lab Open Call</h4>
            <ul className='list-none my-4'>
                <li className='font-sans my-4'>— Проектная работа над нашей идеейв лаборатории Т-Банк</li>
                <li className='font-sans md:w-[600px] my-4'>— Экспертное помощь от кураторов лабораторий</li>
            </ul>
            <div className='flex justify-start mt-20'>
            <Button title="Узнать подробнее"/>
            </div>
        </div>

        <div className='flex justify-center'>
        <img src={unip4} className='object-cover w-[440px] h-[416px]' />
        </div>

      </div>

      <div className='flex lg:flex-row flex-col bg-white rounded-3xl shadow-xl transition-all ease-in-out duration-500 hover:scale-105 cursor-pointer mx-4'>

        <div className='pl-10 pt-10'>
        <div className='flex w-[350px] bg-darkgrey rounded-xl p-2'>
          <img src={icon4} alt='schoolicon' className='object-cover w-[25px] h-[25px]' />
          <p className='font-sans text-[14px] text-gray-800 ml-2'>Для студентов МФ, МИЭМ и ФЭН в НИУ ВШЭ</p>
        </div>
            <h4 className='font-bold text-[23px] max-w-[520px] mt-4'>Проектная лаборитория на фатмаке в ВШЭ</h4>
            <ul className='list-none my-4'>
                <li className='font-sans my-4 max-w-[600px]'>— Студенты под руководством наставников из ВШЭ и Т‑Банк решают прикладные задачи, которые требуют углубленного знания математики</li>
                <li className='font-sans my-4'>— Официальное оформление, занятость 10-15 часов в неделю</li>
            </ul>
            <div className='flex justify-start'>
            <Button className="mt-20" title="Узнать подробнее"/>
            </div>
        </div>
        <div className='flex justify-center'>
        <img src={unip5} className='object-cover w-[440px] h-[416px]' />
        </div>

      </div>

      <div className='flex lg:flex-row flex-col bg-white rounded-3xl shadow-xl transition-all ease-in-out duration-500 hover:scale-105 cursor-pointer mx-4'>

        <div className='pl-10 pt-10'>
        <div className='flex w-[260px] bg-darkgrey rounded-xl p-2'>
          <img src={icon4} alt='schoolicon' className='object-cover w-[25px] h-[25px]' />
          <p className='font-sans text-[14px] text-gray-800 ml-2'>Для студентов МехМат в МГУ</p>
        </div>
            <h4 className='font-bold text-[23px] max-w-[520px] mt-6'>Спецсеминар МГУ и Т-Банк</h4>
            <ul className='list-none my-4'>
                <li className='font-sans my-4 max-w-[600px]'>Студенты механико-математического  факультета с поддержкой куратора работают над задачами, которые требуют углубленных знаний математики</li>
                <li className='font-sans my-4'>— Официальное оформление</li>
                <li className='font-sans my-4'>— Занятость 10-15 часов в неделю</li>
            </ul>
            <div className='flex justify-start'>
            <Button title="Подать заявку"/>
            </div>
        </div>

        <div className='flex justify-center'>
        <img src={unip6} className='object-cover w-[440px] h-[416px]' />
        </div>

      </div>

    </div>
  )
}

export default Lab