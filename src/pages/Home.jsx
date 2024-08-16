import React from 'react';
import Button from '../components/Button';
import prog from '../assets/images/prog.webp';
import course from '../constants';

const Home = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-center items-center flex-col'>

        <h1 className='text-center font-bold text-[43px] mt-[100px] text-gray-750'>
          Т‑Банк Образование
        </h1>

        <p className='font-sans my-4 text-center'>
        Бесплатные образовательные программы для школьников, студентов и ИТ-специалистов
        </p>

        <Button title="Выбрать программу" />

      </div>

      <div className='flex justify-center items-center my-4'>
        <img src={prog} alt='Программы' className='object-cover h-460'/>
      </div>  
      
    <div className='flex flex-wrap justify-center items-cetner gap-10 my-10'>
      {course.map((c, index) => (
        <div className='flex flex-row md:px-0 px-4'  key={index}>
          <img src={c.icon} className='bg-white shadow-lg rounded-3xl object-contain w-[64px] h-[64px]'/>
          <div className='flex flex-col ml-6 max-w-[450px]'>
          <h1 className='font-bold text-[22px]'>{c.title}</h1>
          <p className='font-sans max-w-[450px] mt-2 text-[15px]'>{c.para}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Home