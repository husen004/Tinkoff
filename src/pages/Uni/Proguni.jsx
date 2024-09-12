import React from 'react'
import progp1 from '../../assets/images/progp1.webp'
import progp2 from '../../assets/images/progp2.webp'
import progp3 from '../../assets/images/progp3.webp'
import progp4 from '../../assets/images/progp4.webp'
import progp5 from '../../assets/images/progp5.webp'
import progp6 from '../../assets/images/progp6.webp'
import progp7 from '../../assets/images/progp7.webp'
import WhiteButton from '../../components/WhiteButton'

const Proguni = () => {
  return (
    <div className='flex flex-col justify-center items-center tab-animation'>
    
    <div className='flex flex-wrap gap-10 my-8'>

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
           <img src={progp2} className='object-cover w-[360px] h-[240px] mt-6'/>
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

      <div className='flex justify-center my-6'>
      <div className='bg-darkgray rounded-3xl shadow-xl flex md:flex-row flex-col'>
      <div className='flex flex-col p-8'>
        <h4 className='font-bold text-[22px]'>Проекты в МГТУ им. Баумана</h4>
        <p className='max-w-[490px] mt-2'>Курсы, хакатоны и митапы по разработке в рамках научно-образовательного центра «Дизайн и разработка продуктов и технологий»</p>
        <WhiteButton className="mt-10" title="Узнать подробнее" />
      </div>
        <img src={progp4} className='object-cover w-[528px] h-[260px] mx-10'/>
      </div>
      </div>

      <div className='flex flex-wrap gap-10 my-8'>

        <div className='relative flex flex-col justify-center items-center text-center transition ease-in-out duration-500 hover:scale-105 cursor-pointer bg-darkgray rounded-3xl shadow-lg'>
          <h4 className='font-bold text-[23px] mt-8'>Проекты в НИУ ВШЭ</h4>
          <p className='font-sans my-4 max-w-[300px]'>Базовая кафедра на факультете компьютерных наук: специализция, проекты и спецкурсы</p>
          <button className='absolute bottom-0 mb-8 bg-white rounded-xl shadow-lg w-[180px] h-[50px] transition ease hover:text-gray-500'>Узнать подробнее</button>
          <div className='mt-6'> 
           <img src={progp5} className='object-cover w-[360px] h-[240px]'/>
          </div>
        </div>

        <div className='relative flex flex-col justify-center items-center text-center transition ease-in hover:scale-105 duration-500 cursor-pointer bg-darkgray rounded-3xl shadow-lg'>
          <h4 className='font-bold text-[23px] mt-8'>Проекты в МФТИ</h4>
          <p className='font-sans my-4 max-w-[300px]'>Бакалавриат и магистратура в рамках базовой кафедры на ФПМИ МФТИ</p>
          <button className='absolute bottom-0 mb-8 bg-white rounded-xl shadow-lg w-[180px] h-[50px] transition ease hover:text-gray-500'>Узнать подробнее</button>
          <div className='mt-6'> 
           <img src={progp6} className='object-cover w-[360px] h-[240px] mt-6'/>
          </div>
        </div> 

        <div className='relative flex flex-col justify-center items-center text-center transition ease-in hover:scale-105 duration-500 cursor-pointer bg-darkgray rounded-3xl shadow-lg'>
          <h4 className='font-bold text-[23px] mt-8'>Проекты в МГУ</h4>
          <p className='font-sans my-4 max-w-[300px]'>Спецкурсы и семинары по программированию, анализу данных и математике</p>
          <button className='absolute bottom-0 mb-8 bg-white rounded-xl shadow-lg w-[180px] h-[50px] transition ease hover:text-gray-500'>Узнать подробнее</button>
          <div className='mt-6'> 
           <img src={progp7} className='object-cover w-[360px] h-[240px]'/>
          </div>
        </div>

    </div>

    </div>
  )
}

export default Proguni