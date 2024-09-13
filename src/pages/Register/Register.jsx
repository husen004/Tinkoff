import React from 'react'
import eventp2 from '../../assets/images/eventp2.webp'
import '../../index.css'

const Register = () => {
  return (
    <div className='relative flex justify-center items-center h-[100vh]'>
      
      <div className='z-10 absolute flex flex-col justify-center'>
        <div className='bg-white items-center rounded-3xl shadow-xl p-10'>

        <div className='text-center'>
          <h4 className='font-semibold text-[26px]'>Вход</h4>
          <p className='fonst-sasn text-[18px] mb-6 my-2'>Введите почту, чтобы войти или зарегистрироваться</p>
        </div>

        <div className='flex justify-center'>
          <div className='group '>
           <input required="email" type="email" class="input" />
           <span class="highlight"></span>
           <span class="bar"></span>
           <label className='label'>Электронная почта</label>
          </div>
          <div>
            <button className='p-[11px] border-none rounded-r-xl transition ease-in-out duration-300 hover:bg-yellow-400 bg-yellow-300'>Продолжить</button>
          </div>
        </div>

        <div className='flex flex-col justify-start items-center mt-4'>
          <p className='font-sans mt-2 text-blue-400 cursor-pointer transition-all ease-in-out duration-300 hover:text-blue-600'>Вход для сотрудников</p>
          <p className='font-sans my-2 text-blue-400 cursor-pointer transition-all ease-in-out duration-300 hover:text-blue-600'>Вход через Центральный университет</p>
        </div>

        </div>

      </div>

      <div className='flex justify-center items-center'>
        <img src={eventp2} alt='pokop2' className='object-cover h-[100vh] opacity-4 z-0 opacity-40' />
      </div>

    </div>
  )
}

export default Register