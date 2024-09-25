import React from 'react'
import icon4 from '../../assets/icons/icon4.svg'
import Button from '../../components/Button'
import unip2 from '../../assets/images/unip2.webp'

const schoolar = () => {
  return (
    <div className='flex justify-center slide-tabs'>
      <div className='flex flex-col items-center md:flex-row  my-12  bg-white rounded-3xl shadow-lg transition duration-500 ease-in-out md:hover:scale-105 cursor-pointer mx-2'>

            <div className='ml-6'>  
              
              <div className='flex w-[200px] bg-darkgrey rounded-xl p-2 mt-6'>
                <img src={icon4} alt='schoolicon' className='object-cover w-[25px] h-[25px]' />
                <p className='font-sans text-[14px] text-gray-800 ml-2'>Ученики 5 - 11 классов</p>
              </div>
              <h4 className='font-bold text-[22px] mt-12 '>Алгоритмы и структура данных</h4>
              <p className='font-sans text-[14px] text-gray-600 mt-2'>Подготовим к олимпиадам по информатике и программированию</p>
              
              <div className='flex flex-row gap-16 mt-8 mr-8'>
                <div className=''>
                  <h4 className='font-bold text-[16px]'>Очно и онлайн</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[140px]'>занятие раз в неделю с 16:00 до 21:00</p>
                </div>

                <div className=''>
                  <h4 className='font-bold text-[16px]'>Много практики</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[160px]'>Каждую неделю решаем тематические задачи</p>
                </div>

                <div className=''>
                  <h4 className='font-bold text-[16px]'>Отбор</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[155px]'>Нужно сдать вступительный экзамен</p>
                </div>

              </div>

              <div className='mt-8'>
                <Button title="Узнать подробнее" />
              </div>

            </div>

            <div className='flex justify-center items-center'>
              <img src={unip2} alt='stabsp1' className='object-cover w-[440px] h-[410] rounded-3xl' />
            </div>

      </div>
        
    </div>
  )
}

export default schoolar