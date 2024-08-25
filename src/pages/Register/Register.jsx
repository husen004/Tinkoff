import React from 'react'
import headevent from '../../assets/images/headevent.webp'

const Register = () => {
  return (
    <div className='w-full'>
      
      <div className='flex flex-col justify-center items-center h-[100vh]'>
        <div className='w-[450px]'>

        <div className='text-center'>
          <h4 className=''>Вход</h4>
          <p className=''>Введите почту, чтобы войти или зарегистрироваться</p>
        </div>

        <div className='flex justify-center items-center'>
          <input className='' type='email' placeholder='Электронная почта' required ></input>
          <button className=''>Продолжить</button>
        </div>

        <div className='flex flex-col justify-start'>
          <p className=''>Вход для сотрудников</p>
          <p className=''>Вход через Центральный университет</p>
        </div>

        </div>
      </div>

    </div>
  )
}

export default Register