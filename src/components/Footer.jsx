import React from 'react'
import footericon from '../assets/images/footericon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-lightgray'>
      <div className='md:px-[170px] px-[16px]'>
        <Link to='/'><img src={footericon} alt='logofooter' className='w-[130px] h-[150px] py-6 cursor-pointer'/></Link>
        <p className='font-sans text-[13px] text-gray-400 my-4'>По всем вопросам обращайтесь на <span className='font-sans transition ease-in cursor-pointer text-[13px] text-gray-400 hover:text-gray-200'>best-talents@tinkoff.ru</span></p>
        <div className=''>
          <ul className='gap-5 flex flex-wrap cursor-pointer'>
            <li className=' font-sans text-[13px] text-gray-400 hover:text-gray-200'>Почта</li>
            <li className=' font-sans text-[13px] text-gray-400 hover:text-gray-200'>ВКонтакте</li>
            <li className=' font-sans text-[13px] text-gray-400 hover:text-gray-200'>Телеграм</li>
            <li className=' font-sans text-[13px] text-gray-400 hover:text-gray-200'>Оферта</li>
          </ul>
          <li className='list-none font-sans text-[13px] text-gray-400 hover:text-gray-200 border-[1px] border-lightgray border-b-gray-500 pb-4'>Сведения об образовательной организации</li>
        </div>
      </div>

      <div className='md:px-[170px] px-[16px] py-6'>
        <p className='font-sans text-[13px] text-gray-400'>
          2024, АНО ДПО «Тинькофф Образование»
        </p>
      </div>

    </div>
  )
}

export default Footer