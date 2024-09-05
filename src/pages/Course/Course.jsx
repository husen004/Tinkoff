import React from 'react'
import HeadText from '../../components/HeadText'
import finp1 from '../../assets/images/finp1.webp'
import finp2 from '../../assets/images/finp2.webp'

const Course = () => {
  return (
    <div className='w-full'>

      <div className='flex justify-center items-center flex-col pt-[100px]'>

      <HeadText title="Финтех курсы" />

        <p className='font-sans my-4 text-center'>
        Проводим бесплатные курсы для студентов, выпускников и специалистов с опытом
        </p>

      </div>

      <div className='flex flex-wrap justify-center items-center gap-10 my-14'>

        <div className='relative flex flex-col justify-center items-center text-center transition ease-in-out duration-500 hover:scale-105 cursor-pointer bg-white rounded-3xl shadow-lg'>
          <h4 className='font-bold text-[23px] mt-8'>Для начинающих</h4>
          <p className='font-sans my-4 max-w-[440px]'>Образовательные курсы по разработке, аналитике, SRE, QA, маркетингу, дизайну и другим направлениям</p>
          <button className='absolute bottom-0 mb-8 bg-white rounded-xl shadow-lg w-[120px] h-[50px] transition ease hover:text-gray-500'>Подробнее</button>
          <div className='mt-6'> 
           <img src={finp1} className='h-[240px] w-[528px]'/>
          </div>
        </div>

        <div className='relative flex flex-col justify-center items-center text-center transition ease-in hover:scale-105 duration-500 cursor-pointer bg-white rounded-3xl shadow-lg'>
          <h4 className='font-bold text-[23px] mt-8'>Для опытных</h4>
          <p className='font-sans my-4 max-w-[440px]'>Интенсивы для разработчиков, аналитиков, менеджеров и других специалистов </p>
          <button className='absolute bottom-0 mb-8 bg-white rounded-xl shadow-lg w-[120px] h-[50px] transition ease hover:text-gray-500'>Подробнее</button>
          <div className='mt-6'> 
           <img src={finp2} className='h-[240px] w-[528px]'/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Course