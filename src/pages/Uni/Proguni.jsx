import React from 'react'
import progp1 from '../../assets/images/progp1.webp'
import progp2 from '../../assets/images/progp2.webp'
import progp3 from '../../assets/images/progp3.webp'

const Proguni = () => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-10 my-14'>

        <div className='relative flex flex-col justify-center items-center text-center transition ease-in-out duration-500 hover:scale-105 cursor-pointer bg-darkgray rounded-3xl shadow-lg'>
          <h4 className='font-bold text-[23px] mt-8'>Проекты в НИУ ВШЭ</h4>
          <p className='font-sans my-4 max-w-[300px]'>Базовая кафедра на факультете компьютерных наук: специализция, проекты и спецкурсы</p>
          <button className='absolute bottom-0 mb-8 bg-white rounded-xl shadow-lg w-[180px] h-[50px] transition ease hover:text-gray-500'>Узнать подробнее</button>
          <div className='mt-6'> 
           <img src={progp1} className='object-cover w-[360px] h-[240px]'/>
          </div>
        </div>

        <div className='relative flex flex-col justify-center items-center text-center transition ease-in hover:scale-105 duration-500 cursor-pointer bg-darkgray rounded-3xl shadow-lg'>
          <h4 className='font-bold text-[23px] mt-8'>Проекты в МФТИ</h4>
          <p className='font-sans my-4 max-w-[300px]'>Бакалавриат и магистратура в рамках базовой кафедры на ФПМИ МФТИ</p>
          <button className='absolute bottom-0 mb-8 bg-white rounded-xl shadow-lg w-[180px] h-[50px] transition ease hover:text-gray-500'>Узнать подробнее</button>
          <div className='mt-6'> 
           <img src={progp2} className='object-cover w-[360px] h-[240px]'/>
          </div>
        </div> 

        <div className='relative flex flex-col justify-center items-center text-center transition ease-in hover:scale-105 duration-500 cursor-pointer bg-darkgray rounded-3xl shadow-lg'>
          <h4 className='font-bold text-[23px] mt-8'>Проекты в МГУ</h4>
          <p className='font-sans my-4 max-w-[300px]'>Спецкурсы и семинары по программированию, анализу данных и математике</p>
          <button className='absolute bottom-0 mb-8 bg-white rounded-xl shadow-lg w-[180px] h-[50px] transition ease hover:text-gray-500'>Узнать подробнее</button>
          <div className='mt-6'> 
           <img src={progp3} className='object-cover w-[360px] h-[240px]'/>
          </div>
        </div>

      </div>
  )
}

export default Proguni