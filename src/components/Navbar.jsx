import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { Icon } from 'react-icons-kit'
import {list} from 'react-icons-kit/ikons/list'
import {close} from 'react-icons-kit/ikons/close'


const Navbar = () => {

  const [toggle, setToggle] = useState(false)

function handleToggle() {
  setToggle(!toggle);
}

  return (
    <div className='fixed w-full border-[1px] border-b-grey-100 opacity-95 z-20 '>
    <div className='bg-white flex md:justify-evenly justify-between items-center flex-row py-4 m-auto'>
      <div className=''>
        <Link to='/'><img src={Logo} alt='Logo' className='cursor-pointer w-[95px] h-[34px] md:mx-0 mx-6'/></Link>
      </div>
      <div className=''>
      <ul className='md:gap-4 gap-2 md:flex hidden text-xs text-gray-500'>
          <li><Link to='/zero' className='transition ease-in-out duration-300 hover:text-gray-700 focus:text-yellow-400'>С нуля</Link></li>
          <li><Link to='/school' className='transition ease-in-out duration-300 hover:text-gray-700 focus:text-yellow-400'>Школьникам</Link></li>
          <li><Link to='/course' className='transition ease-in-out duration-300 hover:text-gray-700 focus:text-yellow-400'>Финтех курсы</Link></li>
          <li><Link to='/intern' className='transition ease-in-out duration-300 hover:text-gray-700 focus:text-yellow-400'>Стажировка</Link></li>
          <li><Link to='/uni' className='transition ease-in-out duration-300 hover:text-gray-700 focus:text-yellow-400'>Проекты в вузых</Link></li>
          <li><Link to='/poko' className='transition ease-in-out duration-300 hover:text-gray-700 focus:text-yellow-400'>Вклад в поколение</Link></li>
          <li><Link to='/event' className='transition ease-in-out duration-300 hover:text-gray-700 focus:text-yellow-400'>Мероприятние</Link></li>
          <li><Link to='/career' className='transition ease-in-out duration-300 hover:text-gray-700 focus:text-yellow-400'>Карьера</Link></li>
        </ul>
      </div>
      <div className='md:flex hidden'>
      <li className='transition ease-in text-yellow-400 hover:text-yellow-600 cursor-pointer list-none'><Link to='/register'>Вход</Link></li>
      </div>

      <div onClick={handleToggle} className='block md:hidden cursor-pointer mx-6'>
        {toggle ? <Icon icon={close} size={28} /> : <Icon icon={list} size={28} />}
      </div>
      <div className={`slide transition ease-in absolute md:hidden top-0 left-0 w-full bg-white flex flex-col items-center gap-6 text-lg rounded-lg ${toggle ? "flex" : "hidden"}`}>
        <ul className='text-center my-6 w-full'>
          <li className='my-4 hover:text-gray-700'><Link to='/zero'>С нуля</Link></li>
          <li className='my-4 hover:text-gray-700'><Link to='/school'>Школьникам</Link></li>
          <li className='my-4 hover:text-gray-700'><Link to='/course'>Финтех курсы</Link></li>
          <li className='my-4 hover:text-gray-700'><Link to='/intern'>Стажировка</Link></li>
          <li className='my-4 hover:text-gray-700'><Link to='/uni'>Проекты в вузых</Link></li>
          <li className='my-4 hover:text-gray-700'><Link to='/poko'>Вклад в поколение</Link></li>
          <li className='my-4 hover:text-gray-700'><Link to='/event'>Мероприятние</Link></li>
          <li className='my-4 hover:text-gray-700'><Link to='/career'>Карьера</Link></li>
          <li className='text-yellow-400 hover:text-yellow-600 cursor-pointer list-none my-6'><Link to='/register'>Вход</Link></li>
        </ul>
      </div>

    </div>

    </div>
  )
}

export default Navbar