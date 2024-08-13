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
    <div className='flex md:justify-evenly justify-between md:mx-0 mx-8 items-center flex-row py-4 m-auto sticky'>
      <div className=''>
        <Link to='/'><img src={Logo} alt='Logo' className='cursor-pointer w-[95px] h-[34px]'/></Link>
      </div>
      <div className=''>
      <ul className='gap-6 md:flex hidden text-xs text-gray-500 '>
          <li><Link to='/school'>Школьникам</Link></li>
          <li><Link to='/course'>Финтех курсы</Link></li>
          <li><Link to='/intern'>Стажировка</Link></li>
          <li><Link to='/uni'>Проекты в вузых</Link></li>
          <li><Link to='/poko'>Вклад в поколение</Link></li>
          <li><Link to='/event'>Мероприятние</Link></li>
          <li><Link to='/career'>Карьера</Link></li>
          <li><Link to='/zero'>С нуля</Link></li>
        </ul>
      </div>
      <div className='md:flex hidden'>
      <li className='text-yellow-400 cursor-pointer list-none'><Link to='/register'>Вход</Link></li>
      </div>

      <div onClick={handleToggle} className='block md:hidden cursor-pointer'>
        {toggle ? <Icon icon={close} size={28} /> : <Icon icon={list} size={28} />}
      </div>
      <div className={`absolute lg:hidden top-20 left-0 w-full bg-white flex flex-col items-center gap-6 text-lg transform transition-transform rounded-lg ${toggle ? "flex" : "hidden"}`} style={{ transition: "transform 0.3s ease" }}>
        <ul className='text-center my-6 text-gray-500 '>
          <li className='my-4'><Link to='/school'>Школьникам</Link></li>
          <li className='my-4'><Link to='/course'>Финтех курсы</Link></li>
          <li className='my-4'><Link to='/intern'>Стажировка</Link></li>
          <li className='my-4'><Link to='/uni'>Проекты в вузых</Link></li>
          <li className='my-4'><Link to='/poko'>Вклад в поколение</Link></li>
          <li className='my-4'><Link to='/event'>Мероприятние</Link></li>
          <li className='my-4'><Link to='/career'>Карьера</Link></li>
          <li className='my-4'><Link to='/zero'>С нуля</Link></li>
          <li className='text-yellow-400 cursor-pointer list-none my-6'><Link to='/register'>Вход</Link></li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar