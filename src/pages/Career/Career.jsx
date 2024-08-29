import React from 'react'
import { careercard } from '../../constants'
import Button from '../../components/Button'
import HeadText from '../../components/HeadText'
import headcarer from '../../assets/images/headcarer.webp'
import careerimg from '../../assets/images/careerimg.webp'


const Career = () => {
  return (
    <div className='w-full'>

      <div className='flex justify-center items-center flex-col pt-[100px]'>

      <HeadText title="Карьера в Т‑Банке" />

      <p className='font-sans my-4 text-center max-w-[930px]'>
        Присоединяйтесь к команде и меняйте финтех-рынок с нами. У каждого есть возможность проявлять инициативу и влиять на то, каким будет продукт
      </p>

      <Button title="Узнать больше" />

      </div>

      <div className='flex justify-center items-center my-4'>
        <img src={headcarer} alt='carer' className='object-cover w-[80%]'/>
      </div>  

      <HeadText title="Для специалистов с опытом" />

      <div className='flex flex-wrap justify-center items-center  gap-10 my-12'>
        {careercard.map((c, index) => (
          <div className='bg-white rounded-3xl shadow-xl transition ease-in hover:scale-105 cursor-pointer' key={index}>
            <img src={c.icon} className='w-[36px] h-[36px] ml-7 mt-8'/>
            <h4 className='font-bold text-[23px] mt-8 ml-8'>{c.title}</h4>
            <p className='font-sans max-w-[295px] ml-8 mt-6'>{c.para}</p>
            <button className='transition ease-in hover:text-blue-700 text-blue-500 ml-8 mt-12 mb-6' type='button'>{c.bcard}</button>
          </div>
        ))}
      </div>

      <div className='flex flex-col justify-center items-center '>
        <div className='flex flex-col md:flex-row bg-white rounded-3xl shadow-xl transition ease-in hover:scale-105 cursor-pointer'>

        <div className='flex flex-col items-start ml-8'>
          <h4 className='font-bold text-[23px] mt-8'>Рассказываем, как живут ИТ-сообщества</h4>
          <p className='font-sans max-w-[495px] mt-4'>Можно выбрать направление и узнать о команде, технологиях, проектах, процессах и преимуществах</p>
          <button className='mt-[90px] transition ease-in hover:text-blue-700 text-blue-500'>Узнать больше</button>
        </div>

        <div className='mt-6'>
           <img src={careerimg} className='object cover w-[550] h-[239px] flex items-center'/>
        </div>

      </div>
      </div>

    </div>
  )
}

export default Career