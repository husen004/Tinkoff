import React from 'react';
import Button from '../components/Button';
import prog from '../assets/images/prog.webp';
import course from '../constants';

const Home = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='flex justify-center items-center flex-col'>

        <h1 className='font-bold text-[43px] mt-[46px] text-gray-750'>
          Т‑Банк Образование
        </h1>

        <p className='font-sans my-4 text-center'>
        Бесплатные образовательные программы для школьников, студентов и ИТ-специалистов
        </p>

        <Button title="Выбрать программу" />

      </div>

      <div className='flex justify-center items-center my-4'>
        <img src={prog} alt='Программы' className='objext-contain'/>
      </div>
    
      {course.map((c, index) => (
        <div className='' key={index}>
          <img src={c.icon} className=''/>
          <h1 className=''>{c.title}</h1>
          <p className=''>{c.para}</p>
        </div>
      ))}

    </div>
  )
}

export default Home