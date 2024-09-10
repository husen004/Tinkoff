import React from 'react'
import Button from '../../components/Button'
import unip1 from '../../assets/images/unip1.webp'
import icon4 from '../../assets/icons/icon4.svg'

const Online = () => {
  return (
    <div className='flex justify-center tab-animation'>
      <div className='flex flex-col items-center md:flex-row  my-12  bg-white rounded-3xl shadow-lg transition duration-500 ease-in-out hover:scale-105 mx-2 cursor-pointer'>

            <div className='ml-6'>  
              
              <div className='flex w-[230px] bg-darkgrey rounded-xl p-2 mt-6'>
                <img src={icon4} alt='schoolicon' className='object-cover w-[25px] h-[25px]' />
                <p className='font-sans text-[14px] text-gray-800 ml-2'>Для студентов всех вузов</p>
              </div>
              <h4 className='font-bold text-[22px] mt-12'>Стипендии в Т-Банке </h4>
              <p className='font-sans text-[14px] text-gray-600 mt-2'>Подерживаем талатлевых студентов технической специаьности со всей России</p>
              
              <div className='flex flex-row gap-16 mt-8 mr-8'>
                <div className=''>
                  <h4 className='font-bold text-[16px]'>Два трека</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[140px]'>Индустриальный и Академический</p>
                </div>

                <div className=''>
                  <h4 className='font-bold text-[16px]'>25 000 месяц</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[160px]'>Помогаем сфокусироватся на учебе</p>
                </div>

                <div className=''>
                  <h4 className='font-bold text-[16px]'>Развитие</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[155px]'>Поддержка менторов и доступ к лекциям</p>
                </div>

              </div>

              <div className='mt-8'>
                <Button title="Узнать подробнее" />
              </div>

            </div>

            <div className='flex justify-center items-center'>
              <img src={unip1} alt='stabsp1' className='object-cover w-[440px] h-[410] rounded-3xl' />
            </div>

          </div>
        
    </div>
  )
}

export default Online