import React from 'react'
import Button from '../components/Button'
import HeadText from '../components/HeadText'
import headzero from '../assets/images/headzero.webp'


const Zero = () => {
  return (
    <div className='w-full'>
      
    <div className='flex justify-center items-center flex-col pt-[100px]'>

      <HeadText title="ИТ-курсы для начинающих" />

        <p className='font-sans my-4 text-center'>
        Бесплатное обучение с нуля. Попробуйте себя в разработке, аналитике и других востребованных ИТ-направлениях
        </p>

        <Button title="Узнать подробнее" />

      </div>

      <div className='flex justify-center items-center my-4'>
        <img src={headzero} alt='zero' className='object-cover'/>
      </div>

    </div>
  )
}

export default Zero